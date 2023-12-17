/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config()
import express, { NextFunction, Request, Response } from 'express'
const SneaksAPI = require('sneaks-api')
import axios from 'axios'
const sneaks = new SneaksAPI()
const router = express.Router()

router.post('/search', async (request: Request, response: Response) => {
	const body = request.body
	const searchTerm: string = body.searchTerm
	const limit: number = body.limit
	// const productsObj: any

	const productsObj: any = sneaks.getProducts(searchTerm, 1, async (err: any, products: any) => {
		// console.log(products)
		console.log(products[0])
		// productsObj = products[0]
		// productsObj = products
		return products
	})
	console.log(productsObj)

	// const productsObj = retrieveProducts(searchTerm, limit)
	// console.log(productsObj)
	return response.status(200).json(productsObj)

})

const retrieveProducts = (searchTerm: string, limit: number) => {
	const theProducts = sneaks.getProducts(searchTerm, limit, (err: any, products: any) => {
		return products
	})
	return theProducts
}

export { router }