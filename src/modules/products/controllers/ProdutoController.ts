/** @format */

import { Request, Response } from 'express'
import ProdutoService from '@modules/products/services/produto.service'
import Produto from '@modules/products/typeorm/entities/Produto'

export default class ProdutoController {
  /** */

  async create(req: Request, res: Response): Promise<Response> {
    /** */
    const produto: Produto = req.body
    const servico = new ProdutoService()
    const prod = await servico.create(produto)

    return res.json(prod)
  }

  async update(req: Request, res: Response): Promise<Response> {
    /** */
    const produto: Produto = req.body
    const { id } = req.params
    produto.id = id

    const servico = new ProdutoService()
    const prod = await servico.update(produto)

    return res.json(prod)
  }

  async delete(req: Request, res: Response): Promise<Response> {
    /** */
    const { id } = req.params

    const servico = new ProdutoService()
    await servico.delete(id)

    return res.json('Registro excluído')
  }

  async getById(req: Request, res: Response): Promise<Response> {
    /** */
    const { id } = req.params

    const servico = new ProdutoService()
    const prod = await servico.getById(id)

    return res.json(prod)
  }

  async getByName(req: Request, res: Response): Promise<Response> {
    /** */
    const { name } = req.params

    const servico = new ProdutoService()
    const prod = await servico.getByName(name)

    return res.json(prod)
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    /** */
    const servico = new ProdutoService()
    const prod = await servico.getAll()

    return res.json(prod)
  }
}
