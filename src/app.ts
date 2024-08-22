import fastify from 'fastify'
import { transactionRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()
app.register(fastifyCookie)
// middleware global no escopo da aplicação. Todas as rotas da aplicação ativarão esse middleware
// app.addHook('preHandler', async (request, reply)=> {
//   console.log(`${request.method} ${request.url}`)
// });

app.register(transactionRoutes, {
  prefix: 'transactions',
})