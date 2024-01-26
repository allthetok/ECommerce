/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express'
import SQL from 'sql-template-strings'
import { pool } from '../src/db'
import { AxiosError } from 'axios'
require('dotenv').config()

const router = express.Router()

router.post('/brand', async (request: Request, response: Response) => {
	const body = request.body
	const brand: string = body.brand
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
		RETURNING id, brand`)
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
	const model: string = body.model
	const brandId: number = body.brandId
	let modelExists = false
	let brandExists = false
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
			WHERE b.id = ${brandId})`)
		.then((response: any) => {
			if (response.rows.length === 0) {
				brandExists = !brandExists
			}
			brandQueryResult = response.rows[0]
		})
	if (brandExists) {
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