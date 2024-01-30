/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config()
import express, { NextFunction, Request, Response, raw } from 'express'
import SQL from 'sql-template-strings'
import { pool } from '../src/db'
import { Brands, IndProduct } from '../helpers/betypes'
import { brandMap } from '../helpers/enumMap'
import { buildBrandOutput, buildModelOutput, formatInStatement } from '../helpers/requests'

const router = express.Router()

router.post('/brand', async (request: Request, response: Response) => {
	const body = request.body
	let brandReq: string[] = body.brand
	let brandQueryResult: any = {
		brandReq: []
	}
	let rawQueryResult: any
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
		SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, p.releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM brands b
			INNER JOIN models m
			ON b.id = m.brandId
			INNER JOIN products p
			ON b.id = p.brandId AND m.id = p.modelId
			INNER JOIN sizes s ON p.id = s.id
			WHERE b.name IN`.append(`(${brandInStatement})`))
		.then((response: any) => {
			if (response.rows.length !== 0) {
				brandQueryResult = buildBrandOutput(response.rows)
			}
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
	let modelQueryResult: any
	let rawQueryResult: any
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
		SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, p.releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM models m
			INNER JOIN brands b ON m.brandId = b.id
			INNER JOIN products p ON m.id = p.modelId AND b.id = p.brandId
			INNER JOIN sizes s ON s.id = p.id
			WHERE m.name=${modelReq} `)
		.then((response: any) => {
			console.log(response.rows)
			console.log(response)
			if (response.rows.length !== 0) {
				rawQueryResult = response.rows
				modelQueryResult = {
					modelReq: {
						id: rawQueryResult[0].modelid,
						name: rawQueryResult[0].modelname,
						brandId: rawQueryResult[0].brandid,
						brand: rawQueryResult[0].brand,
						allProducts: rawQueryResult
					}
				}
			}
			else {
				modelQueryResult = {
					modelReq: {
						id: 0,
						name: 'None',
						brandId: 0,
						brand: 'None',
						allProducts: []
					}
				}
			}
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to retrieve model: ${modelReq} from database`
			})
		})
	return modelQueryResult === null ? response.status(404).json({ error: `Unable to retrieve model: ${modelReq} from database` }): response.status(200).json(modelQueryResult)
	// const body = request.body
	// const modelReq: string = body.model
	// // const modelQueryResult: any = {
	// // 	modelReq: {
	// // 		id: null,
	// // 		name: null,
	// // 		brandId: null,
	// // 		brand: null,
	// // 		allProducts: []
	// // 	}
	// // }
	// let modelQueryResult: any
	// let rawQueryResult: any
	// let modelExists = true
	// if (!modelReq || modelReq === null || modelReq === undefined || modelReq.length === 0) {
	// 	return response.status(404).json({
	// 		message: `No model specified: ${modelReq}`
	// 	})
	// }

	// await pool.query(SQL`
	// 	SELECT 1 WHERE EXISTS
	// 		(SELECT * FROM models m
	// 			INNER JOIN products p
	// 			ON m.id = p.modelId
	// 			WHERE m.name = ${modelReq})`)
	// 	.then((response: any) => {
	// 		if (response.rows.length === 0) {
	// 			modelExists = !modelExists
	// 		}
	// 	})
	// if (!modelExists) {
	// 	return response.status(400).json({
	// 		error: `There is no model that exists with that name: ${modelReq}`
	// 	})
	// }

	// await pool.query(SQL`
	// 	SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, p.releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
	// 		FROM models m
	// 		INNER JOIN brands b ON m.brandId = b.id
	// 		INNER JOIN products p ON m.id = p.modelId AND b.id = p.brandId
	// 		INNER JOIN sizes s ON s.id = p.id
	// 		WHERE m.name=${modelReq} `)
	// 	.then((response: any) => {
	// 		console.log(response.rows)
	// 		console.log(response)
	// 		// modelQueryResult.modelReq = buildModelOutput(response.rows)
	// 		if (response.rows.length !== 0) {
	// 			rawQueryResult = response.rows
	// 			modelQueryResult = {
	// 				modelReq: {
	// 					id: rawQueryResult[0].modelid,
	// 					name: rawQueryResult[0].modelname,
	// 					brandId: rawQueryResult[0].brandid,
	// 					brand: rawQueryResult[0].brand,
	// 					allProducts: rawQueryResult
	// 				}
	// 			}
	// 			// modelQueryResult.modelReq = buildModelOutput(response.rows)
	// 		}
	// 		else {
	// 			modelQueryResult = {
	// 				modelReq: {
	// 					id: 0,
	// 					name: 'None',
	// 					brandId: 0,
	// 					brand: 'None',
	// 					allProducts: []
	// 				}
	// 			}
	// 		}
	// 	})
	// 	.catch((err: any) => {
	// 		console.log(err)
	// 		return response.status(404).json({
	// 			error: `Unable to retrieve model: ${modelReq} from database`
	// 		})
	// 	})
	// return modelQueryResult !== null ? response.status(404).json({ error: `Unable to retrieve model: ${modelReq} from database` }): response.status(200).json(modelQueryResult)
})

router.post('/product', async (request: Request, response: Response) => {
	const body = request.body
	const productReq: string = body.product
	let productQueryResult: any
	let rawQueryResult: any
	let productExists = true
	let productRequested: any
	let similarProducts: any[]

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
			SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, p.releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM products p
			INNER JOIN brands b ON p.brandId = b.id
			INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
			INNER JOIN sizes s ON p.id = s.id
			WHERE p.name=${productReq}
		),
		similar_prod AS (
			SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, p.releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM products p
			INNER JOIN brands b ON p.brandId = b.id
			INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
			INNER JOIN sizes s ON p.id = s.id
			WHERE p.modelId = (SELECT modelId FROM prod_req) AND p.name <> (SELECT name FROM prod_req)
		)
		SELECT pr.* FROM prod_req pr UNION ALL SELECT ps.* FROM similar_prod ps;`)
		.then((response: any) => {
			if (response.rows.length !== 0) {
				rawQueryResult = response.rows
				productRequested = rawQueryResult.filter((res: any) => res.name === productReq).length === 1 ? rawQueryResult.filter((res: any) => res.name === productReq)[0] : {}
				similarProducts = rawQueryResult.filter((res: any) => res.name !== productReq).length !== 0 ? rawQueryResult.filter((res: any) => res.name !== productReq) : []
				productQueryResult = {
					productReq: productRequested,
					similarProducts: similarProducts
				}
			}
			else {
				productQueryResult = { productReq: [], similarProducts: [] }
			}
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to retrieve product: ${productReq} from database`
			})
		})

	return productQueryResult === null ? response.status(404).json({ error: `Unable to retrieve product: ${productReq} from database` }): response.status(200).json(productQueryResult)

})


export { router }