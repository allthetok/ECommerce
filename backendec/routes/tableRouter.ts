/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express'
import SQL from 'sql-template-strings'
import { pool } from '../src/db'
import { AxiosError } from 'axios'
require('dotenv').config()

const router = express.Router()

router.get('/createBrand', async (request: Request, response: Response) => {
	await pool.query(SQL`
		CREATE TABLE brands
			( id SERIAL PRIMARY KEY,
			  name VARCHAR(200) UNIQUE NOT NULL
			)
		`)
		.then(() => {
			console.log(pool.query)
			return response.status(200).json({
				Message: 'Successfully created table: brands'
			})
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(500).json({
				error: 'Unable to create table: users'
			})
		})
})

router.get('/createModel', async (request: Request, response: Response) => {
	await pool.query(SQL`
		CREATE TABLE models
			( id SERIAL PRIMARY KEY,
			  name VARCHAR(200) UNIQUE NOT NULL,
			  brandId INT NOT NULL,
			  CONSTRAINT FOREIGN_BRAND FOREIGN KEY(brandId) REFERENCES brands(id)
			)
		`)
		.then(() => {
			console.log(pool.query)
			return response.status(200).json({
				Message: 'Successfully created table: models'
			})
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(500).json({
				error: 'Unable to create table: users'
			})
		})
})

router.get('/createProduct', async (request: Request, response: Response) => {
	return response.status(200).json({
		Message: 'Successfully created products table'
	})
})

router.get('/createSizes', async (request: Request, response: Response) => {
	return response.status(200).json({
		Message: 'Successfully created products table'
	})
})


export { router }