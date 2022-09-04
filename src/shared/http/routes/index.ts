/** @format */
import produtoRouter from '@modules/products/routes/produto.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/produtos', produtoRouter)

routes.get('/', (_req, res) => {
  return res.json({ msg: 'Ola programador' })
})

export default routes
