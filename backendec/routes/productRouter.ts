/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config()
import express, { NextFunction, Request, Response } from 'express'
import SQL from 'sql-template-strings'
import { pool } from '../src/db'
import { Brands, IndProduct } from '../helpers/betypes'

const router = express.Router()

router.post('/brand', async (request: Request, response: Response) => {
	const body = request.body
	const brandReq: string[] = body.brand
	if (!brandReq || brandReq === null || brandReq === undefined || brandReq.length === 0) {
		return response.status(404).json({
			message: `No brand specified: ${brandReq}`
		})
	}

})

router.post('/model', async (request: Request, response: Response) => {
	const body = request.body
	const modelReq: string = body.model
	if (!modelReq || modelReq === null || modelReq === undefined || modelReq.length === 0) {
		return response.status(404).json({
			message: `No model specified: ${modelReq}`
		})
	}

})

router.post('/product', async (request: Request, response: Response) => {
	const body = request.body
	const productReq: string = body.product
	let productQueryResult: any
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

	// await pool.query(SQL`
	// 	SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, p.name, p.releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
	// 	FROM products p
	// 	INNER JOIN brands b ON p.brandId = b.id
	// 	INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
	// 	INNER JOIN sizes s ON p.id = s.id
	// 	WHERE p.name=${productReq}
	// 	`)

	await pool.query(SQL`
		WITH prod_req AS (
			SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, p.releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM products p
			INNER JOIN brands b ON p.brandId = b.id
			INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
			INNER JOIN sizes s ON p.id = s.id
			WHERE p.name=${productReq}
		),
		WITH similar_prod AS (
			SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, p.releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM products p
			INNER JOIN brands b ON p.brandId = b.id
			INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
			INNER JOIN sizes s ON p.id = s.id
			WHERE p.modelId = prod_req.modelId AND p.name <> ${productReq}
		)
		SELECT pr.*, ps.* FROM prod_req pr, similar_prod ps
		`)
		.then((response: any) => {
			console.log(response.rows)
			productQueryResult = response.rows
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