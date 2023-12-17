/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config()
import express, { NextFunction, Request, Response } from 'express'
import axios from 'axios'
const router = express.Router()

router.post('/')