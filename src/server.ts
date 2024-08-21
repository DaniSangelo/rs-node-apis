import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'

const app = fastify()
app.register(fastifyCookie)
// middleware global no escopo da aplicação. Todas as rotas da aplicação ativarão esse middleware
// app.addHook('preHandler', async (request, reply)=> {
//   console.log(`${request.method} ${request.url}`)
// });

app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server running on port 3333')
  })
