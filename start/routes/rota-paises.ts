import Route from '@ioc:Adonis/Core/Route'
 
Route.group(() => {
  Route.post('/inserir', 'PaisesController.inserir')
  Route.get('/listar', 'PaisesController.listar')
  Route.get('/buscar/:id_pais', 'PaisesController.buscarPorId')
  Route.put('/atualizar/:id_pais', 'PaisesController.atualizar')
})
  .prefix('apiPais')