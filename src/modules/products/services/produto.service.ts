/** @format */
import AppError from '@shared/errors/AppError'
import { dataSource } from '@shared/typeorm'

import Produto from '@modules/products/typeorm/entities/Produto'
import ProdutoRepository from '@modules/products/typeorm/repositories/ProdutoRepository'

interface Prod {
  id: string
  name: string
  price: number
  quantity: number
}

class ProdutoService {
  /** */
  public produtoRepository
  public customRepositorio: ProdutoRepository

  constructor() {
    this.produtoRepository = dataSource.getRepository(Produto)
    this.customRepositorio = new ProdutoRepository()
  }

  async create(produto: Prod): Promise<Produto> {
    /** */
    await this.getByName(produto.name)
    const product = this.produtoRepository.create(produto)
    await this.produtoRepository.save(product)
    return product
  }

  async update(produto: Prod): Promise<Produto> {
    /** */
    const product = await this.getById(produto.id)

    product.name = produto.name
    product.price = produto.price
    product.quantity = produto.quantity

    await this.produtoRepository.save(product)

    return product
  }

  async delete(id: string): Promise<void> {
    /** */
    const product = await this.getById(id)
    await this.produtoRepository.remove(product)
  }

  async getById(id: string): Promise<Produto> {
    /** */
    const product = await this.produtoRepository.findOneBy({ id })

    if (!product) {
      throw new AppError('Product not found.')
    }
    return product
  }

  async getByName(name: string): Promise<boolean> {
    /** */

    const productExists = await this.customRepositorio.findByName(name)

    if (productExists) {
      throw new AppError('There is already one product with this name')
    }

    return false
  }

  async getAll(): Promise<Produto[]> {
    /** */

    return this.produtoRepository.find()
  }
}

export default ProdutoService
