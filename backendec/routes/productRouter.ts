/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config()
import express, { NextFunction, Request, Response, raw } from 'express'
import SQL from 'sql-template-strings'
import { pool } from '../src/db'
import { BrandQueryResult, Brands, IndProduct, ModelQueryResult, ProductQueryResult, SearchQueryResult, SqlProduct } from '../helpers/betypes'
import { brandMap } from '../helpers/enumMap'
import { buildBrandOutput, buildModelOutput, buildProductOutput, buildSearchOutput, formatInStatement, formatSQLColToProduct } from '../helpers/requests'

const router = express.Router()

router.post('/brand', async (request: Request, response: Response) => {
	const body = request.body
	let brandReq: string[] = body.brand
	let brandQueryResult: BrandQueryResult = {
		brandReq: []
	}
	let rawQueryResult: SqlProduct[]
	let brandExists = true
	let brandInStatement: string = ''

	if (!brandReq || brandReq === null || brandReq === undefined || brandReq.length === 0) {
		return response.status(404).json({
			message: `No brand specified: ${brandReq}`
		})
	}

	if (brandReq.length === 1 && (brandReq.join('') === 'all' || brandReq.join('') === '')) {
		brandReq = []
		for (const key of brandMap.keys()) {
			brandReq.push(key)
		}
	}

	brandInStatement = formatInStatement(brandReq)

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS 
			(SELECT * FROM brands b
				INNER JOIN models m
				ON b.id = m.brandId
				INNER JOIN products p 
				ON m.id = p.modelId AND b.id = p.brandId
				WHERE b.name IN`.append(`(${brandInStatement}) )`))
		.then((response: any) => {
			if (response.rows.length === 0) {
				brandExists = !brandExists
			}
		})
	if (!brandExists) {
		return response.status(400).json({
			error: `There is no brand that exists with that name: ${brandReq}`
		})
	}

	await pool.query(SQL`
		SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, CAST(p.releaseDate AS DATE) AS releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM brands b
			INNER JOIN models m
			ON b.id = m.brandId
			INNER JOIN products p
			ON b.id = p.brandId AND m.id = p.modelId
			INNER JOIN sizes s ON p.id = s.id
			WHERE b.name IN`.append(`(${brandInStatement})`))
		.then((response: any) => {
			rawQueryResult = response.rows
			brandQueryResult = buildBrandOutput(response.rows)
			// if (response.rows.length !== 0) {
			// 	brandQueryResult = buildBrandOutput(response.rows)
			// }
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to retrieve brand and associated models/products for brand: ${brandReq.join(',')} from database`
			})
		})

	return brandQueryResult.brandReq.length !== 0 ? response.status(200).json(brandQueryResult) : response.status(404).json({ error: `Unable to retrieve brand and associated models/products for brand: ${brandReq.join(',')} from database` })

})

router.post('/model', async (request: Request, response: Response) => {
	const body = request.body
	const modelReq: string = body.model
	const modelQueryResult: ModelQueryResult = {
		modelReq: null
	}

	let rawQueryResult: SqlProduct[]
	let modelExists = true

	if (!modelReq || modelReq === null || modelReq === undefined || modelReq.length === 0) {
		return response.status(404).json({
			message: `No model specified: ${modelReq}`
		})
	}

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS 
			(SELECT * FROM models m
				INNER JOIN products p 
				ON m.id = p.modelId
				WHERE m.name = ${modelReq})`)
		.then((response: any) => {
			if (response.rows.length === 0) {
				modelExists = !modelExists
			}
		})
	if (!modelExists) {
		return response.status(400).json({
			error: `There is no model that exists with that name: ${modelReq}`
		})
	}

	await pool.query(SQL`
		SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, CAST(p.releaseDate AS DATE) AS releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM models m
			INNER JOIN brands b ON m.brandId = b.id
			INNER JOIN products p ON m.id = p.modelId AND b.id = p.brandId
			INNER JOIN sizes s ON s.id = p.id
			WHERE m.name=${modelReq} `)
		.then((response: any) => {
			rawQueryResult = response.rows
			modelQueryResult.modelReq = buildModelOutput(rawQueryResult)
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to retrieve model: ${modelReq} from database`
			})
		})
	return modelQueryResult.modelReq === null ? response.status(404).json({ error: `Unable to retrieve model: ${modelReq} from database` }): response.status(200).json(modelQueryResult)
})

router.post('/product', async (request: Request, response: Response) => {
	const body = request.body
	const productReq: string = body.product
	let productQueryResult: ProductQueryResult
	let rawQueryResult: SqlProduct[]
	let productExists = true

	if (!productReq || productReq === null || productReq === undefined || productReq === '') {
		return response.status(404).json({
			message: `No product specified: ${productReq}`
		})
	}

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS 
			(SELECT * FROM products p 
				WHERE p.name = ${productReq})`)
		.then((response: any) => {
			if (response.rows.length === 0) {
				productExists = !productExists
			}
		})
	if (!productExists) {
		return response.status(400).json({
			error: `There is no product that exists with that name: ${productReq}`
		})
	}

	await pool.query(SQL`
		WITH prod_req AS (
			SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, CAST(p.releaseDate AS DATE) AS releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM products p
			INNER JOIN brands b ON p.brandId = b.id
			INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
			INNER JOIN sizes s ON p.id = s.id
			WHERE p.name=${productReq}
		),
		similar_prod AS (
			SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, CAST(p.releaseDate AS DATE) AS releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM products p
			INNER JOIN brands b ON p.brandId = b.id
			INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
			INNER JOIN sizes s ON p.id = s.id
			WHERE p.modelId = (SELECT modelId FROM prod_req) AND p.name <> (SELECT name FROM prod_req)
		)
		SELECT pr.* FROM prod_req pr UNION ALL SELECT ps.* FROM similar_prod ps;`)
		.then((response: any) => {
			rawQueryResult = response.rows
			productQueryResult = buildProductOutput(rawQueryResult, productReq)
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to retrieve product: ${productReq} from database`
			})
		})

	return productQueryResult === null ? response.status(404).json({ error: `Unable to retrieve product: ${productReq} from database` }): response.status(200).json(productQueryResult)

})

router.post('/productSearch', async (request: Request, response: Response) => {
	const body = request.body
	const searchterm: string = body.searchterm
	let searchQueryResult: SearchQueryResult = {
		products: []
	}
	let rawQueryResult: SqlProduct[]
	let productExists = true

	if (!searchterm || searchterm === null || searchterm === undefined || searchterm === '') {
		return response.status(200).json(searchQueryResult)
	}

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS 
			(SELECT * FROM products p 
				WHERE LOWER(p.name) LIKE `.append(`'%${searchterm.toLowerCase()}%' )`))
		.then((response) => {
			if (response.rows.length === 0) {
				productExists = !productExists
			}
		})
	if (!productExists) {
		return response.status(200).json(searchQueryResult)
	}

	await pool.query(SQL`
		SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, CAST(p.releaseDate AS DATE) AS releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM products p
			INNER JOIN brands b ON p.brandId = b.id
			INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
			INNER JOIN sizes s ON p.id = s.id
			WHERE LOWER(p.name) LIKE `.append(`'%${searchterm.toLowerCase()}%'`))
		.then((response: any) => {
			rawQueryResult = response.rows
			searchQueryResult = buildSearchOutput(rawQueryResult)
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to retrieve product which includes: ${searchterm} from database`
			})
		})

	return response.status(200).json(searchQueryResult)
})

// router.patch('/productImage', async (request: Request, response: Response) => {
// 	const body = request.body
// 	const searchterm: string = body.searchterm
// 	const imageArray: any = body.images
// 	let rawQueryResult: any

// 	// await pool.query(SQL`
// 	// 	SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, p.TODATE(p.releaseDate), p.colors, p.price, p.description, s.colSize AS sizes
// 	// 		FROM products p
// 	// 		INNER JOIN brands b ON p.brandId = b.id
// 	// 		INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
// 	// 		INNER JOIN sizes s ON p.id = s.id
// 	// 		WHERE p.name = ${searchterm}`)
// 	await pool.query(SQL`
// 		UPDATE products SET colors=${imageArray} WHERE name=${searchterm} RETURNING name, id, brandId, modelId, TODATE(p.releaseDate), price, description, colors`)
// 		.then((response: any) => {
// 			if (response.rows.length !== 0) {
// 				rawQueryResult = response.rows[0]
// 			}
// 		})
// 		.catch((err: any) => {
// 			console.log(err)
// 			return response.status(404).json({
// 				error: `Unable to retrieve product which includes: ${searchterm} from database`
// 			})
// 		})


// 	return response.status(200).json(rawQueryResult)
// })


export { router }