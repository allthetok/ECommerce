/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express'
import SQL from 'sql-template-strings'
import { pool } from '../src/db'
import { AxiosError } from 'axios'
import { ColorSizes, Colors } from '../helpers/betypes'
require('dotenv').config()

const router = express.Router()

router.post('/brand', async (request: Request, response: Response) => {
	const body = request.body
	const brand: string = body.name
	let brandExists = false
	let brandQueryResult: any
	if (!brand || brand === '' || brand === null) {
		return response.status(400).json({
			error: 'No brandname provided'
		})
	}
	await pool.query(SQL`
		SELECT 1 WHERE EXISTS 
			(SELECT * FROM brands b 
				WHERE b.name = ${brand})`)
		.then((response: any) => {
			if (response.rows.length !== 0) {
				brandExists = !brandExists
			}
		})
	if (brandExists) {
		return response.status(400).json({
			error: `There already exists a brand with that name: ${brand}`
		})
	}

	await pool.query(SQL`
		INSERT INTO brands (name)
		VALUES (${brand})
		RETURNING id, name`)
		.then((response: any) => {
			console.log(response.rows[0])
			brandQueryResult = response.rows[0]
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to insert ${brand} in brands table`
			})
		})
	return response.status(200).json(brandQueryResult)
})

router.post('/model', async (request: Request, response: Response) => {
	const body = request.body
	const model: string = body.name
	const brandId: number = body.brandId
	let brandExists = true
	let modelExists = false
	let brandQueryResult: any
	let modelQueryResult: any
	if (!model || model === '' || model === null) {
		return response.status(400).json({
			error: 'No modelname provided'
		})
	}
	else if (!brandId || brandId === undefined || brandId === null) {
		return response.status(400).json({
			error: 'No brandid provided'
		})
	}

	await pool.query(SQL`
		SELECT b.id, b.name 
			FROM brands b 
			WHERE b.id = ${brandId} `)
		.then((response: any) => {
			if (response.rows.length === 0) {
				brandExists = !brandExists
			}
			brandQueryResult = response.rows[0]
		})
	if (!brandExists) {
		return response.status(400).json({
			error: `There does not exist corresponding brand with brandId: ${brandId}`
		})
	}

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS 
			(SELECT * FROM models m 
				WHERE m.name = ${model})`)
		.then((response: any) => {
			if (response.rows.length !== 0) {
				modelExists = !modelExists
			}
		})
	if (modelExists) {
		return response.status(400).json({
			error: `There already exists a model with that name: ${model}`
		})
	}

	await pool.query(SQL`
		INSERT INTO models (name, brandId)
		VALUES (${model}, ${brandQueryResult.id})
		RETURNING id, name, brandId`)
		.then((response: any) => {
			console.log(response.rows[0])
			modelQueryResult = response.rows[0]
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to insert ${model} in models table`
			})
		})
	return response.status(200).json(modelQueryResult)
})

router.post('/product', async (request: Request, response: Response) => {
	const body = request.body
	const product: string = body.name
	const releaseDate: string = body.releaseDate
	const colors: Colors[] = body.colors
	const price: number = body.price
	const description: string = body.description
	const sizes: ColorSizes[] = body.sizes
	const brandId: number = body.brandId
	const modelId: number = body.modelId
	let brandExists = true
	let modelExists = true
	let productExists = false
	let brandQueryResult: any
	let modelQueryResult: any
	let productQueryResult: any

	if (!product || product === '' || product === null ||
		!releaseDate || releaseDate === '' || releaseDate === null ||
		!colors || colors.length === 0 || colors === null ||
		!sizes || sizes.length === 0 || sizes === null ||
		!price || price === 0 || price === null ||
		!description || description === '' || description === null ||
		!brandId || brandId === undefined || brandId === null ||
		!modelId || modelId === undefined || modelId === null) {
		return response.status(400).json({
			error: 'No modelname provided'
		})
	}

	await pool.query(SQL`
		SELECT b.id, b.name 
			FROM brands b 
			WHERE b.id = ${brandId}`)
		.then((response: any) => {
			if (response.rows.length === 0) {
				brandExists = !brandExists
			}
			brandQueryResult = response.rows[0]
		})
	if (!brandExists) {
		return response.status(400).json({
			error: `There does not exist corresponding brand with brandId: ${brandId}`
		})
	}

	await pool.query(SQL`
		SELECT m.id, m.name 
			FROM models m 
			WHERE m.id = ${modelId}`)
		.then((response: any) => {
			if (response.rows.length === 0) {
				modelExists = !modelExists
			}
			modelQueryResult = response.rows[0]
		})
	if (!modelExists) {
		return response.status(400).json({
			error: `There does not exist corresponding model with modelId: ${modelId}`
		})
	}

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS 
			(SELECT * FROM products p 
				WHERE p.name = ${product})`)
		.then((response: any) => {
			if (response.rows.length !== 0) {
				productExists = !productExists
			}
		})
	if (productExists) {
		return response.status(400).json({
			error: `There already exists a product with that name: ${product}`
		})
	}
	//insert into products, sizes with CTE
	await pool.query(SQL`
		WITH new_product AS (
			INSERT INTO products (name, brandId, modelId, releaseDate, price, description, colors)
			VALUES (${product}, ${brandQueryResult.id}, ${modelQueryResult.id}, ${releaseDate}, ${price}, ${description}, ${colors})
			RETURNING id, brandId, modelId, name, releaseDate, price, description, colors
		),
		new_sizes AS (   
			INSERT INTO sizes (id, colSize) VALUES ((SELECT id FROM new_product), ${sizes}) RETURNING colSize
		)
		SELECT np.id, ${brandQueryResult.name} AS brand, np.brandId, np.modelId, ${modelQueryResult.name} AS modelName, np.name, np.releaseDate, np.price, np.description, np.colors, ns.colSize AS sizes
		FROM new_product np, new_sizes ns;`)
		.then((response: any) => {
			console.log(response.rows[0])
			productQueryResult = response.rows[0]
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to insert ${product} in products table`
			})
		})
	return productQueryResult === null ? response.status(404).json({ error: `Unable to insert ${product} in products table` }): response.status(200).json(productQueryResult)
})

export { router }