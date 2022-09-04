/** @format */
import { Repository } from 'typeorm'
import Produto from '@modules/products/typeorm/entities/Produto'
import { dataSource } from '@shared/typeorm'

export default class ProdutoRepository {
  /**  */

  repository: Repository<Produto>

  constructor() {
    this.repository = dataSource.getRepository(Produto)
  }

  public async findByName(name: string): Promise<Produto | null> {
    return await this.repository.findOneBy({ name })
  }
}
