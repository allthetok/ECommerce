/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import { requestLogger, corsOptions } from '../helpers/requests'
require('dotenv').config()
import express from 'express'
import cors from 'cors'
import { router as populateRouter } from '../routes/populateRouter'
import { router as productRouter } from '../routes/productRouter'
import { router as tableRouter } from '../routes/tableRouter'


const app = express()
app.use(express.json())
app.use(requestLogger)
app.use(cors(corsOptions))
app.use('/api/populate', populateRouter)
app.use('/api/shoes', productRouter)
app.use('/api/table', tableRouter)

const PORT = process.env.API_PORT || 3002

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`)
})