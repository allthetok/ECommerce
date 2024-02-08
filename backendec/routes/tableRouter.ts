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
				error: 'Unable to create table: brands'
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
				error: 'Unable to create table: models'
			})
		})
})

router.get('/createProduct', async (request: Request, response: Response) => {
	await pool.query(SQL`
		CREATE TABLE products
			( id SERIAL PRIMARY KEY,
			  brandId INT NOT NULL,
			  modelId INT NOT NULL,
			  name VARCHAR(200) UNIQUE NOT NULL,
			  releaseDate DATE NOT NULL,
			  price INT NOT NULL,
			  description VARCHAR(2500),
			  colors JSON[] DEFAULT '{}',
			  CONSTRAINT FOREIGN_BRAND FOREIGN KEY(brandId) REFERENCES brands(id),
			  CONSTRAINT FOREIGN_MODEL FOREIGN KEY(modelId) REFERENCES models(id)
			)
		`)
		.then(() => {
			console.log(pool.query)
			return response.status(200).json({
				Message: 'Successfully created table: products'
			})
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(500).json({
				error: 'Unable to create table: products'
			})
		})
})


router.get('/createSize', async (request: Request, response: Response) => {
	await pool.query(SQL`
		CREATE TABLE sizes
			( id INT PRIMARY KEY NOT NULL,
			  colSize JSON[] DEFAULT '{}',
			  CONSTRAINT FOREIGN_PRODUCT FOREIGN KEY(id) REFERENCES products(id)
			)
		`)
		.then(() => {
			console.log(pool.query)
			return response.status(200).json({
				Message: 'Successfully created table: sizes'
			})
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(500).json({
				error: 'Unable to create table: sizes'
			})
		})
})

router.get('/createUser', async (request: Request, response: Response) => {
	await pool.query(SQL`
		CREATE TABLE users (
				id SERIAL PRIMARY KEY,
				email VARCHAR(100) NOT NULL,
				password VARCHAR(100) NOT NULL,
				emailVerified BOOLEAN DEFAULT FALSE,
				prevlogin TIMESTAMP,
				image VARCHAR(500) DEFAULT '',
				externalid VARCHAR(200) DEFAULT '',
				provider VARCHAR(100) NOT NULL
			)
		`)
		.then(() => {
			return response.status(200).json({
				Message: 'Successfully created table: users'
			})
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(500).json({
				error: 'Unable to create table: users'
			})
		})
})


export { router }