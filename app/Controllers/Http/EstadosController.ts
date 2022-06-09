import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estado from 'App/Models/Estado'

export default class EstadosController {

    public async inserir({request, response}: HttpContextContract){
        const nom_estado = request.only(['nom_estado'])
        const estado = await Estado.create(nom_estado)
        return response.created({estado})
    } 

    public async listar(){

        return await Estado.all()
    } 

    public async buscarPorId({params}: HttpContextContract){

        return await Estado.findOrFail(params.id_estado)
    } 

    public async atualizar({params, request}: HttpContextContract){

        const estado = await Estado.findOrFail(params.id_estado);
        const nom_estado =  request.only(['nom_estado']);
        estado.merge(nom_estado);
        await estado.save();
        return estado;
    } 

    public async deletar({params}: HttpContextContract){

        const estado = await Estado.findOrFail(params.id_estado);
        await estado.delete();
        return {message: 'Estado deletado!'}

    } 

    
}
