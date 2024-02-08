/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express'
import SQL from 'sql-template-strings'
import { AxiosError } from 'axios'
import { pool } from '../src/db'
import { hashPassword, verifyPassword } from '../helpers/requests'
require('dotenv').config()

const router = express.Router()

router.post('/createUser', async (request: Request, response: Response) => {
	const body = request.body
	const email: string = body.email
	const rawPassword: string = body.password
	const provider: string = body.provider
	let queryResult: any
	let userExists = false
	let hashPass: string = ''

	if (!email || email === '' || email === null) {
		return response.status(400).json({
			error: 'No email provided'
		})
	}
	else if (!rawPassword || rawPassword === '' || rawPassword === null) {
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

	hashPass = await hashPassword(10, rawPassword)

	await pool.query(SQL`
			INSERT INTO users (email, password, emailVerified, prevlogin, provider)
			VALUES (${email}, ${hashPass}, FALSE, to_timestamp(${Date.now()} / 1000.0), ${provider})
			RETURNING id, email, prevlogin, provider
		`)
		.then((response: any) => {
			queryResult = response.rows.length !== 0 ? response.rows[0] : null
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Failed to create new user for email: ${email} with method: ${provider}`
			})
		})

	return queryResult === null ? response.status(404).json({ error: `Failed to create new user for email: ${email} with method: ${provider}` }) : response.status(200).json(queryResult)


})