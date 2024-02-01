/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { Request, Response, NextFunction } from 'express'
import { IndProduct, SqlProduct } from './betypes'
require('dotenv').config()

const requestLogger = (request: Request, response: Response, next: NextFunction): void => {
	console.log('Method:', request.method)
	console.log('Path: ', request.url)
	console.log('Body: ', request.body)
	console.log('---')
	next()
}

const corsOptions = {
	origin: true,
	credentials: true,	//access-control-allow-credentials:true
	optionSuccessStatus: 200
}

const formatInStatement = (input: string[]) => `${input.map((c: string) => `'${c}'`).join(',')}`

const buildBrandOutput = (rawQueryResult: any[]) => {
	const brandQueryResult: any = {
		brandReq: []
	}
	//map where key is brand name, value is unique list of strings of all modelnames
	const modelMap = new Map<string, string[]>()

	for (let i = 0; i < rawQueryResult.length; i++) {
		const indRow: any = rawQueryResult[i]
		if (modelMap.has(indRow.brand)) {
			const curModels: string[] = modelMap.get(indRow.brand)
			const toInsert: string[] = [...curModels]
			if (toInsert.includes(indRow.modelname)) {
				continue
			}
			else {
				toInsert.push(indRow.modelname)
				modelMap.set(indRow.brand, toInsert)
			}
		}
		else {
			modelMap.set(indRow.brand, [indRow.modelname])
		}
	}

	for (const [key, value] of modelMap.entries()) {
		const filteredRows = rawQueryResult.map((indProd: any) => formatSQLColToProduct(indProd)).filter((indRow: any) => indRow.brand === key)
		const brandEl: any = {
			id: filteredRows[0].brandId,
			name: key,
			allModels: []
		}
		value.map((modelName: string) => {
			const modelFilteredRows = filteredRows.filter((indRow: any) => indRow.modelName === modelName)
			const modelEl: any = {
				id: filteredRows[0].modelId,
				name: modelName,
				brandId: brandEl.id,
				brand: key,
				allProducts: modelFilteredRows
			}
			brandEl.allModels.push(modelEl)
		})
		brandQueryResult.brandReq.push(brandEl)
	}
	return brandQueryResult
}

const buildModelOutput = (rawQueryResult: any[]) => {
	let modelReq: any = {
		id: 0,
		name: 'None',
		brandId: 0,
		brand: 'None',
		allProducts: []
	}
	modelReq = rawQueryResult.length !== 0
		? {
			id: rawQueryResult[0].modelid,
			name: rawQueryResult[0].modelname,
			brandId: rawQueryResult[0].brandid,
			brand: rawQueryResult[0].brand,
			allProducts: rawQueryResult.map((indProd: any) => formatSQLColToProduct(indProd))
		} :
		modelReq
	return modelReq
}

const buildProductOutput = (rawQueryResult: any[], specProduct: string) => {
	let productQueryResult: any = {
		productReq: [],
		similarProducts: []
	}
	productQueryResult = rawQueryResult.length !== 0
		? {
			productReq: rawQueryResult.map((indProd: any) => formatSQLColToProduct(indProd)).filter((res: any) => res.name === specProduct).length === 1 ? rawQueryResult.map((indProd: any) => formatSQLColToProduct(indProd)).filter((res: any) => res.name === specProduct)[0] : {},
			similarProducts: rawQueryResult.map((indProd: any) => formatSQLColToProduct(indProd)).filter((res: any) => res.name !== specProduct).length !== 0 ? rawQueryResult.map((indProd: any) => formatSQLColToProduct(indProd)).filter((res: any) => res.name !== specProduct) : []
		} :
		productQueryResult
	return productQueryResult
}

const buildSearchOutput = (rawQueryResult: any[]) => {
	let searchQueryResult: any = {
		products: []
	}
	searchQueryResult = rawQueryResult.length !== 0
		? {
			products: rawQueryResult.map((indProd: any) => formatSQLColToProduct(indProd))
		} :
		searchQueryResult
	return searchQueryResult
}

const formatSQLColToProduct: (input: any) => IndProduct = (input: any) => {
	return {
		id: input.id,
		brand: input.brand,
		brandId: input.brandid,
		modelId: input.modelid,
		modelName: input.modelname,
		name: input.name,
		releaseDate: input.releasedate,
		colors: input.colors,
		price: input.price,
		description: input.description,
		sizes: input.sizes
	}
}

export { requestLogger, corsOptions, formatInStatement, buildBrandOutput, buildModelOutput, buildProductOutput, buildSearchOutput, formatSQLColToProduct }