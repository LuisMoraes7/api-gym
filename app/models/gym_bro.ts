import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class GymBro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare public username: string

  @column()
  declare public workouts: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}