import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TesteController {

public async teste({response}: HttpContextContract){
    const respostaDoTeste = {"Você chamou": "teste"};
    return response.ok(respostaDoTeste);
}

}
