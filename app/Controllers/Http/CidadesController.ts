import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Cidade from 'App/Models/Cidade'
import Estado from 'App/Models/Estado'
import Pais from 'App/Models/Pais'

export default class CidadesController {

    public async inserir({request, params, response}: HttpContextContract){
        const body = request.body()
        const estado = await Estado.findOrFail(params.id_estado)
        body.id_estado = estado.id_estado
        const pais = await Pais.findOrFail(params.id_pais)
        body.id_pais = pais.id_pais
        const cidade = await Cidade.create(body)
        return response.created({cidade})
    } 

    public async listar(){

        return await Cidade.query().preload('estado').preload('pais')
        
    } 

}
