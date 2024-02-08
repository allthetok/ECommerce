/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express'
import SQL from 'sql-template-strings'
import { pool } from '../src/db'
import { AxiosError } from 'axios'
require('dotenv').config()

const router = express.Router()

router.post('/createUser', async (request: Request, response: Response) => {
	const body = request.body
	const email: string = body.email
	const password: string = body.password
	const provider: string = body.provider
	let queryResult: any
	let userExists = false
	let hashPass: string = ''

	if (!email || email === '' || email === null) {
		return response.status(400).json({
			error: 'No email provided'
		})
	}
	else if (!password || password === '' || password === null) {
		return response.status(400).json({
			error: 'No password provided'
		})
	}

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS
			(SELECT * FROM users u
				WHERE u.email=${email} 
				AND u.provider=${provider})
		`)
		.then((response: any) => {
			if (response.rows.length !== 0) {
				userExists = !userExists
			}
		})

	if (userExists) {
		return response.status(400).json({
			error: `There already exists a user with email: ${email} with method: ${provider}`
		})
	}



})