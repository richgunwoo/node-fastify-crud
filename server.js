const fastify = require('fastify')({logger: true})
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
        version: '1.0.0',
    }
})
fastify.register(require('./routes/users'))

fastify.get('/', async (request, reply) => {
    reply.send('server is running....')
})
  
const PORT = process.env.PORT || 5000
const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()