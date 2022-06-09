import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Estado extends BaseModel {
  
  @column({ isPrimary: true })
  public id_estado: number

  @column()
  public nom_estado: string

  @beforeSave()
  public static async validacoesEstado(estado: Estado){
  estado.nom_estado = estado.nom_estado.toUpperCase().trim()
  }
}

