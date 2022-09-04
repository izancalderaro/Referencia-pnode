/** @format */

import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import ProdutoController from '@modules/products/controllers/ProdutoController'

const produtoRouter = Router()
const produtoController = new ProdutoController()

produtoRouter.get('/', produtoController.getAll)

produtoRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  produtoController.getById
)

produtoRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required()
    }
  }),
  produtoController.create
)

produtoRouter.patch(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      price: Joi.number().precision(2),
      quantity: Joi.number()
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  produtoController.update
)

produtoRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  produtoController.delete
)

export default produtoRouter
