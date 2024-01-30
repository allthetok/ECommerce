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

export { requestLogger, corsOptions, formatInStatement }