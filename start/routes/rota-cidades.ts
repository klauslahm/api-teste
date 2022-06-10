import Route from '@ioc:Adonis/Core/Route'
 
Route.group(() => {
    Route.post('/inserir/:id_estado/:id_pais', 'CidadesController.inserir')
    Route.get('/listar', 'CidadesController.listar')
})
  .prefix('apiCidade')