/** @format */

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('produto')
class Produto {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public name: string

  @Column('decimal')
  public price: number

  @Column('int')
  public quantity: number

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date
}

export default Produto
