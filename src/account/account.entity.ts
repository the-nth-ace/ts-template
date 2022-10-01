import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum AccountType {
  CURRENT = "current",
  SAVINGS = "savings",
}

export interface IAccount {
  id: string
  number: number
  type: AccountType
  balance: number
  isActive: boolean
  createdAt: Date
}

@Entity()
export class Account implements IAccount {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  number: number

  @Column({
    type: "enum",
    enum: AccountType,
    default: AccountType.SAVINGS,
  })
  type: AccountType

  @Column()
  balance: number

  @Column()
  isActive: boolean

  @Column({
    type: "date",
    default: new Date(Date.now()),
  })
  createdAt: Date
}
