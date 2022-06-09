import { BaseModel,beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pais extends BaseModel {
  @column({ isPrimary: true })
  public id_pais: number

  @column()
  public nom_pais: string

  @beforeSave()
  public static async validacoesPais(pais: Pais){
  pais.nom_pais = pais.nom_pais.toUpperCase().trim()

}}

