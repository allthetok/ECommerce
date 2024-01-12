/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config()
import express, { NextFunction, Request, Response } from 'express'
import axios from 'axios'
import { Brands, IndProduct } from '../helpers/betypes'
import { brandMap, modelMap, productMap } from '../helpers/enumMap'
import { fullBrands } from '../mockproduct/db'
const router = express.Router()

router.post('/brands', async (request: Request, response: Response) => {
	const body = request.body
	const brandReq: string = body.brand
	if (!brandReq || brandReq === null || brandReq === undefined) {
		return response.status(404).json({
			message: `No brand specified: ${brandReq}`
		})
	}

	if (brandReq === '' || brandReq === 'all') {
		// allBrands: [
		// 	brandMap.get('Adidas'),
		// 	brandMap.get('Yeezy'),
		// 	brandMap.get('Nike'),
		// 	brandMap.get('Air Jordan'),
		// 	brandMap.get('New Balance')
		// ]
		return response.status(200).json({
			allBrands: [
				...brandMap.values()
			]
		})
	}
	return response.status(200).json({
		brandReq: brandMap.get(brandReq)
	})
})

router.post('/models', async (request: Request, response: Response) => {
	const body = request.body
	const modelReq: string = body.model
	if (!modelReq || modelReq === null || modelReq === undefined) {
		return response.status(404).json({
			message: `No model specified: ${modelReq}`
		})
	}

	if (modelReq === '' || modelReq === 'all') {
		return response.status(200).json({
			allModels: [
				...modelMap.values()
			]
		})
	}
	return response.status(200).json({
		modelReq: modelMap.get(modelReq)
	})
})

router.post('/product', async (request: Request, response: Response) => {
	const body = request.body
	const productReq: string = body.product
	if (!productReq || productReq === null || productReq === undefined || productReq === '') {
		return response.status(404).json({
			message: `No product specified: ${productReq}`
		})
	}
	const productMapped = productMap.get(productReq)
	const similarProducts = modelMap.get(productMapped.modelName).allProducts.filter((indProduct: IndProduct) => indProduct.id !== productMapped.id)

	return response.status(200).json({
		productReq: productMapped,
		similarProducts: similarProducts
	})
})


export { router }