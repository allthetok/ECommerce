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

router.post('/login', async (request: Request, response: Response) => {
	const body = request.body
	const email: string = body.email
	const rawPassword: string = body.password
	const provider: string = body.provider
	let queryResult: any
	let userExists = true
	let matchPass = false

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
	else if (!provider || provider === '' || provider === null) {
		return response.status(400).json({
			error: 'No provider specified'
		})
	}

	await pool.query(SQL`
			SELECT u.id, u.email, u.password, u.provider
			FROM users u
			WHERE u.email=${email} AND u.provider=${provider}
		`)
		.then(async (response: any) => {
			queryResult = response
			if (queryResult.rows.length === 0) {
				userExists = !userExists
			}
			else {
				queryResult = queryResult.rows[0]
				matchPass = await verifyPassword(rawPassword, queryResult.password)
			}
		})

	if (!userExists) {
		return response.status(400).json({
			error: 'User with this email was not found'
		})
	}
	if (!matchPass) {
		return response.status(400).json({
			error: 'Incorrect password'
		})
	}

	await pool.query(SQL`
			UPDATE users SET
				prevlogin=to_timestamp(${Date.now()} / 1000.0)
				WHERE id=${queryResult.id}
				AND email=${queryResult.email}
				AND provider=${queryResult.provider}
			RETURNING id, email, emailVerified, provider
		`)
		.then((response: any) => {
			queryResult = response ? response.rows[0] : response
		})
		.catch((err: any) => {
			return response.status(404).json({
				error: `Failed to login user with email: ${email}`
			})
		})
	return queryResult ? response.status(200).json(queryResult) : response.status(404).json({ error: `Failed to login user with email: ${email}` })
})