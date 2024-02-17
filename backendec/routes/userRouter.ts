/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express'
import SQL, { SQLStatement } from 'sql-template-strings'
import { AxiosError } from 'axios'
import { pool } from '../src/db'
import nodemailer from 'nodemailer'
import { buildProductOutput, formatStringInStatement, hashPassword, mapQueryResult, stringArrayToPostgresArray, verifyPassword } from '../helpers/requests'
import { generateVerificationCode, transport } from '../src/smtptransport'
import { Mail } from '../helpers/betypes'
require('dotenv').config()

const router = express.Router()

const transporter = nodemailer.createTransport(transport)
transporter.verify((error: Error | null, success: true): void => {
	if (error) {
		console.error(error)
	}
	else {
		console.log('Connected to SMTP transporter')
	}
})

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
			INSERT INTO users 
				(email, password, emailVerified, prevlogin, provider)
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
	// let userExists = true
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
			// if (queryResult.rows.length === 0) {
			// 	userExists = !userExists
			// }
			// else {
			queryResult = queryResult.rows[0]
			matchPass = await verifyPassword(rawPassword, queryResult.password)
			// }
		})

	// if (!userExists) {
	// 	return response.status(400).json({
	// 		error: 'User with this email was not found'
	// 	})
	// }
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
			RETURNING id, email, prevlogin, provider
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

router.post('/resolveUser', async (request: Request, response: Response) => {
	const body = request.body
	const email: string = body.email
	const provider: string = body.provider
	let userExists: boolean = false

	if (!email || email === '' || email === null) {
		return response.status(400).json({
			error: 'No email provided'
		})
	}
	else if (!provider || provider === '' || provider === null) {
		return response.status(400).json({
			error: 'No provider specified'
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
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Failed to check if user with email: ${email} , exists with method: ${provider}`
			})
		})

	return response.status(200).json({
		userExists: userExists,
		message: userExists ? `User with this email: ${email} and method: ${provider} is valid` : `User with this email: ${email} and method: ${provider} is invalid`
	})
})

router.post('/loginExternal', async (request: Request, response: Response) => {
	const body = request.body
	const email: string | null = body.email
	const emailVerified: boolean = body.emailVerified
	const externalId: string = body.externalId
	const provider: string | null = body.provider
	let queryResult: any
	let userExists: boolean = false

	if (!email || email === '' || email === null) {
		return response.status(400).json({
			error: 'No email provided'
		})
	}
	else if (!provider || provider === '' || provider === null) {
		return response.status(400).json({
			error: 'No provider specified'
		})
	}

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS
			(SELECT * FROM users u
				WHERE u.email=${email}
				AND u.provider=${provider}
				AND u.externalid = ${externalId})
		`)
		.then((response: any) => {
			if (response.rows.length !== 0) {
				userExists = !userExists
			}
		})

	if (userExists) {
		await pool.query(SQL`
			UPDATE users SET
				prevlogin=to_timestamp(${Date.now()} / 1000.0)
				WHERE email=${email}
				AND provider=${provider}
				AND externalid=${externalId}
			RETURNING id, email, provider, prevlogin
			`)
			.then((response: any) => {
				queryResult = response.rows.length !== 0 ? response.rows[0] : null
			})
			.catch((err: any) => {
				return response.status(404).json({
					error: `Failed to update record for email: ${email} , by method: ${provider}`
				})
			})
	}
	else {
		await pool.query(SQL`
			INSERT INTO users 
				(email, emailVerified, externalid, prevlogin, provider)
				VALUES (${email}, ${emailVerified}, ${externalId}, to_timestamp(${Date.now()} / 1000.0), ${provider})
			RETURNING id, email, prevlogin, provider
			`)
			.then((response: any) => {
				queryResult = response.rows.length !== 0 ? response.rows[0] : null
			})
			.catch((err: any) => {
				return response.status(404).json({
					error: `Failed to insert record for email: ${email} , by method: ${provider}, and externalId: ${externalId}`
				})
			})
	}

	return queryResult ? response.status(200).json(queryResult) : response.status(404).json({ error: `Failed to insert or update record for email: ${email} , by method: ${provider}, and externalId: ${externalId}` })
})

router.patch('/userDetails', async (request: Request, response: Response) => {
	const body = request.body
	const userid: number | null = body.userid
	const provider: string | null = body.provider
	const email: string | null = body.email
	const rawPassword: string | null = body.password
	const specField: string | null = body.specField
	let queryResult: any
	let userExists: boolean = false
	let fieldTaken: boolean = false
	let queryString: SQLStatement
	let hashPass: string = ''

	if (specField === null || !specField || specField === undefined || specField === '') {
		return response.status(400).json({
			error: `Did not specify which user attribute to update: ${specField}`
		})
	}
	else if (userid === null || !userid || userid === undefined) {
		return response.status(400).json({
			error: 'No userid provided'
		})
	}
	else if (provider === null || !provider || provider === undefined) {
		return response.status(400).json({
			error: 'No provider provided'
		})
	}

	await pool.query(SQL`
		SELECT 1 WHERE EXISTS
			(SELECT * FROM users u
				WHERE u.id=${userid}
				AND u.provider=${provider})
		`)
		.then((response: any) => {
			userExists = response && response.rows.length === 0 ? userExists : true
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(400).json({
				error: 'Unable to retrieve data from user tables'
			})
		})
	if (!userExists) {
		return response.status(400).json({
			error: `User with this userid: ${userid} and by method: ${provider} does not exist`
		})
	}

	switch (specField) {
	case 'email':
		if (email === null || !email || email === undefined || email === '') {
			return response.status(400).json({
				error: 'No email provided'
			})
		}
		await pool.query(SQL`
			SELECT 1 WHERE EXISTS 
				(SELECT * FROM users u
					WHERE u.id <> ${userid}
					AND u.provider = ${provider}
					AND u.email = ${email})`)
			.then((response: any) => {
				fieldTaken = response && response.rows.length === 1 ? true : fieldTaken
			})
			.catch((err: any) => {
				console.log(err)
				return response.status(404).json({ error: 'Unable to check if email exists' })
			})
		queryString = SQL`
			UPDATE users SET 
				email=${email}, prevlogin = to_timestamp(${Date.now()} / 1000.0)
				WHERE id = ${userid} AND provider=${provider}
			RETURNING id, email, emailVerified, prevlogin, externalId, provider`
		break

	case 'password':
		if (rawPassword === null || !rawPassword || rawPassword === undefined) {
			return response.status(400).json({
				error: 'No password provided'
			})
		}
		hashPass = await hashPassword(10, rawPassword)
		queryString = SQL`
			UPDATE users SET 
				password=${hashPass}, prevlogin = to_timestamp(${Date.now()} / 1000.0)
				WHERE id = ${userid}
			RETURNING id, email, emailVerified, prevlogin, externalId, provider`
		break

	case 'both':
		if (email === null || !email || email === undefined || email === '' || rawPassword === null || !rawPassword || rawPassword === undefined) {
			return response.status(400).json({
				error: 'No email or password provided when updating both records'
			})
		}
		await pool.query(SQL`
			SELECT 1 WHERE EXISTS 
				(SELECT * FROM users u
					WHERE u.id <> ${userid}
					AND u.provider = ${provider}
					AND u.email = ${email})`)
			.then((response: any) => {
				fieldTaken = response && response.rows.length === 1 ? true : fieldTaken
			})
			.catch((err: any) => {
				console.log(err)
				return response.status(404).json({ error: 'Unable to check if email exists' })
			})
		hashPass = await hashPassword(10, rawPassword)
		queryString = SQL`
			UPDATE users SET 
				email=${email}, password=${hashPass}, prevlogin = to_timestamp(${Date.now()} / 1000.0)
				WHERE id = ${userid} AND provider=${provider}
			RETURNING id, email, emailVerified, prevlogin, externalId, provider`
		break

	default:
		return response.status(400).json({
			error: `Specified case does not exist and is not within: email/password/both, it is currently: ${specField}`
		})
	}

	if (fieldTaken) {
		return response.status(404).json({ error: 'This email is already taken' })
	}

	else {
		await pool.query(queryString)
			.then((response: any) => {
				queryResult = response && response.rows.length !== 0 ? response.rows[0] : null
			})
			.catch((err: any) => {
				console.log(err)
				return response.status(400).json({
					error: `Unable to edit user details for userid: ${userid}`
				})
			})
		return queryResult ? response.status(200).json(queryResult) : response.status(404).json({ error: `Unable to edit user details for userid: ${userid}` })
	}
})

router.post('/verificationCode', async (request: Request, response: Response) => {
	const body = request.body
	const email: string = body.email
	let id: number
	let generatedCode: boolean

	const verificationCodeGenerated: number = generateVerificationCode()
	const mail: Mail = {
		from: process.env.SMTP_FROM_EMAIL || 'noreply.atkicks@gmail.com',
		to: email,
		subject: 'Verification Code from ATKicks',
		text: `Hello, your ATKicks Verification Code is: ${verificationCodeGenerated} . Please do not respond to this email.`
	}

	transporter.sendMail(mail, (err: Error | null, data) => {
		if (err) {
			return response.status(400).json({
				status: 'fail',
			})
		}
	})

	await pool.query(SQL`
		SELECT u.id
			FROM users u
			WHERE u.email=${email} AND u.provider='ATKNative' 
		`)
		.then((response: any) => {
			id = response.rows.length === 1 ? response.rows[0].id : 0
		})
		.catch((err: any) => {
			return response.status(400).json({ error: `Failed to query users table for userid on email: ${email}` })
		})

	await pool.query(SQL`
		INSERT INTO usercode 
			(verificationCode, userid, email, dateCreated)
			VALUES 
			(${String(verificationCodeGenerated)}, ${id!}, ${email}, to_timestamp(${Date.now()} / 1000.0))
		`)
		.then((response: any) => {
			generatedCode = response.rows && response.rows.length === 1
		})
		.catch((err: any) => {
			console.log(err)
			generatedCode = false
		})
	return generatedCode ? response.status(200).json({ id: id!, email: email, message: 'Success' }) : response.status(400).json({ error: `Failed to generate user verification code for user with email: ${email}` })
})

router.post('/resolveCode', async (request: Request, response: Response) => {
	const body = request.body
	const email: string = body.email
	let queryResult: any

	await pool.query(SQL`
		SELECT c.verificationCode
			FROM usercode c
			WHERE c.email=${email}
		ORDER BY dateCreated DESC
		`)
		.then((response: any) => {
			queryResult = response.rows && response.rows.length !== 0 ? response.rows[0] : null
		})
		.catch((err: any) => {
			queryResult = null
		})
	return queryResult !== null ? response.status(200).json(queryResult) : response.status(400).json({ error: `Unable to retrieve verificationCode from usercode table for: ${email}` })
})

router.post('/createOrder', async (request: Request, response: Response) => {
	const body = request.body
	const userid: number = body.userid
	const productList: string[] = body.products
	const stripeid: string = body.sessionId
	let orderQueryResult: any
	let productQueryResult: any
	let rawQueryResult: any

	await pool.query(SQL`
		INSERT INTO usercode
			(userid, stripeid, productList, dateCreated)
			VALUES (${userid}, ${stripeid}, ${stringArrayToPostgresArray(productList)}, to_timestamp(${Date.now()} / 1000.0))
		RETURNING paymentid, userid, stripeid, productList
		`)
		.then((response: any) => {
			orderQueryResult = response.rows.length !== 0 ? response.rows[0] : null
		})
		.catch((err: any) => {
			return response.status(404).json({
				error: `Failed to insert payment record for user: ${userid}, with products: ${productList} on stripe payment ID: ${stripeid}`
			})
		})
	const productInStatement = formatStringInStatement(productList)
	await pool.query(SQL`
		SELECT p.id, b.name AS brand, b.id AS brandId, m.id AS modelId, m.name AS modelName, p.name, CAST(p.releaseDate AS DATE) AS releaseDate, p.colors, p.price, p.description, s.colSize AS sizes
			FROM products p
			INNER JOIN brands b ON p.brandId = b.id
			INNER JOIN models m ON p.modelId = m.id AND b.id = m.brandId
			INNER JOIN sizes s ON p.id = s.id
			WHERE p.name IN`.append(`(${productInStatement})`))
		.then((response: any) => {
			rawQueryResult = response.rows
			productQueryResult = mapQueryResult(rawQueryResult)
		})
		.catch((err: any) => {
			console.log(err)
			return response.status(404).json({
				error: `Unable to retrieve product details for these products: ${productList.join(',')} from database`
			})
		})

	return orderQueryResult ? response.status(200).json({
		paymentDetails: orderQueryResult,
		productsOrder: productQueryResult
	}) : response.status(404).json({
		error: `Failed to insert payment record for user: ${userid}, with products: ${productList} on stripe payment ID: ${stripeid}`
	})
})

export { router }