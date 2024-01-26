/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express'
import { pool } from '../src/db'
import SQL from 'sql-template-strings'
require('dotenv').config()
const router = express.Router()

router.get('/createBrand', async (request: Request, response: Response) => {
	return response.status(200).json({
		Mesage: 'Successfully created brands table'
	})
})

router.get('/createModel', async (request: Request, response: Response) => {
	return response.status(200).json({
		Mesage: 'Successfully created models table'
	})
})

router.get('/product', async (request: Request, response: Response) => {
	return response.status(200).json({
		Mesage: 'Successfully created products table'
	})
})


export { router }