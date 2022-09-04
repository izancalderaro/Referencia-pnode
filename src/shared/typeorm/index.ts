/** @format */

import { DataSource } from 'typeorm'

import Produto from '@modules/products/typeorm/entities/Produto'

import { CreateProducts1629968681371 } from './migrations/1629968681371-CreateProducts'

export const dataSource = new DataSource({
  type: 'postgres',
  host: '192.168.192.194',
  port: 49172,
  username: 'postgres',
  password: 'password',
  database: 'apivendas',
  entities: [Produto],
  migrations: [CreateProducts1629968681371]
})
