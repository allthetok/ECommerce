/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { Request, Response, NextFunction } from 'express'
import { BrandQueryResult, Brands, IndProduct, Models, ProductQueryResult, SearchQueryResult, SqlProduct } from './betypes'
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

const buildBrandOutput = (rawQueryResult: SqlProduct[]) => {
	const brandQueryResult: BrandQueryResult = {
		brandReq: []
	}
	if (rawQueryResult.length !== 0) {
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
			const filteredRows = mapQueryResult(rawQueryResult).filter((indRow: IndProduct) => indRow.brand === key)
			const brandEl: Brands = {
				id: filteredRows[0].brandId,
				name: key,
				allModels: []
			}
			value.map((modelName: string) => {
				const modelFilteredRows = filteredRows.filter((indRow: IndProduct) => indRow.modelName === modelName)
				const modelEl: Models = {
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
	}
	return brandQueryResult
}

const buildModelOutput = (rawQueryResult: any[]) => {
	let modelReq: Models = {
		id: 0,
		name: '',
		brandId: 0,
		brand: '',
		allProducts: []
	}
	modelReq = rawQueryResult.length !== 0
		? {
			id: rawQueryResult[0].modelid,
			name: rawQueryResult[0].modelname,
			brandId: rawQueryResult[0].brandid,
			brand: rawQueryResult[0].brand,
			allProducts: mapQueryResult(rawQueryResult)
		} :
		modelReq
	return modelReq
}

const buildProductOutput = (rawQueryResult: SqlProduct[], specProduct: string) => {
	let productQueryResult: ProductQueryResult = {
		productReq: {
			id: 0,
			brand: '',
			brandId: 0,
			modelId: 0,
			modelName: '',
			name: '',
			releaseDate: '',
			colors: [],
			price: 0,
			description: '',
			sizes: []
		},
		similarProducts: []
	}
	productQueryResult = rawQueryResult.length !== 0
		? {
			productReq: mapQueryResult(rawQueryResult).filter((indRow: IndProduct) => indRow.name === specProduct).length === 1 ? mapQueryResult(rawQueryResult).filter((indRow: IndProduct) => indRow.name === specProduct)[0] : productQueryResult.productReq,
			similarProducts: mapQueryResult(rawQueryResult).filter((indRow: IndProduct) => indRow.name !== specProduct).length !== 0 ? mapQueryResult(rawQueryResult).filter((indRow: IndProduct) => indRow.name !== specProduct) : []
		} :
		productQueryResult
	return productQueryResult
}

const buildSearchOutput = (rawQueryResult: SqlProduct[]) => {
	let searchQueryResult: SearchQueryResult = {
		products: []
	}
	searchQueryResult = rawQueryResult.length !== 0
		? {
			products: mapQueryResult(rawQueryResult)
		} :
		searchQueryResult
	return searchQueryResult
}

const formatSQLColToProduct: (input: SqlProduct) => IndProduct = (input: SqlProduct) => {
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

const mapQueryResult = (rawQueryResult: SqlProduct[]) => {
	return rawQueryResult.map((indProd: SqlProduct) => formatSQLColToProduct(indProd))
}

export { requestLogger, corsOptions, formatInStatement, buildBrandOutput, buildModelOutput, buildProductOutput, buildSearchOutput, formatSQLColToProduct, mapQueryResult }