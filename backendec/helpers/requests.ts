/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { Request, Response, NextFunction } from 'express'
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
		const filteredRows = rawQueryResult.filter((indRow: any) => indRow.brand === key)
		const brandEl: any = {
			id: filteredRows[0].brandid,
			name: key,
			allModels: []
		}
		value.map((modelName: string) => {
			const modelFilteredRows = filteredRows.filter((indRow: any) => indRow.modelname === modelName)
			const modelEl: any = {
				id: filteredRows[0].modelid,
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
	return rawQueryResult.length > 0 ? {
		id: rawQueryResult[0].modelid,
		name: rawQueryResult[0].modelname,
		brandId: rawQueryResult[0].brandid,
		brand: rawQueryResult[0].brand,
		allProducts: rawQueryResult
	} : {
		id: 0,
		name: 'None',
		brandId: 0,
		brand: 'None',
		allProducts: []
	}
}

export { requestLogger, corsOptions, formatInStatement, buildBrandOutput, buildModelOutput }