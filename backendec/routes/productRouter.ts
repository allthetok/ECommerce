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
	if (!productReq || productReq === null || productReq === undefined || productReq === '') {
		return response.status(404).json({
			message: `No product specified: ${productReq}`
		})
	}

})


export { router }