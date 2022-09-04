/** @format */

import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { errors } from 'celebrate'
import logger from 'morgan'
import routes from './routes'
import AppError from '@shared/errors/AppError'
import { dataSource } from '../typeorm'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(errors())

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

dataSource.initialize().then(() => {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
})
