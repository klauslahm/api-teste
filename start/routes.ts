import Route from '@ioc:Adonis/Core/Route'
import './routes/rota-estado'
import './routes/rota-paises'
import './routes/rota-cidades'

Route.get('/', async () => {
  return { hello: 'world' }
})

