import Route from '@ioc:Adonis/Core/Route'
 
Route.group(() => {
  Route.post('/inserir', 'EstadosController.inserir')
  Route.get('/listar', 'EstadosController.listar')
  Route.get('/buscar/:id_estado', 'EstadosController.buscarPorId')
  Route.put('/atualizar/:id_estado', 'EstadosController.atualizar')
})
  .prefix('apiEstado')