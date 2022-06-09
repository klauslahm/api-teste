import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pais from "App/Models/Pais"

export default class PaisesController {

    public async inserir({request, response}: HttpContextContract){
        const nom_pais = request.only(['nom_pais'])
        const pais = await Pais.create(nom_pais)
        return response.created({pais})
    } 

    public async listar(){

        return await Pais.all()
    } 

    public async buscarPorId({params}: HttpContextContract){

        return await Pais.findOrFail(params.id_pais)
    } 

    public async atualizar({params, request}: HttpContextContract){

        const pais = await Pais.findOrFail(params.id_pais);
        const nom_pais =  request.only(['nom_pais']);
        pais.merge(nom_pais);
        await pais.save();
        return pais;
    } 

    public async deletar({params}: HttpContextContract){

        const pais = await Pais.findOrFail(params.id_pais);
        await pais.delete();
        return {message: 'País deletado!'}

    } 


}
