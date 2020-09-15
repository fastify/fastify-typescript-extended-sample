import { FastifyInstance } from 'fastify'
import getConfig from './lib/config'
import createServer from './lib/createServer'

async function run () {
  process.on('unhandledRejection', err => {
    console.error(err)
    process.exit(1)
  })

  const config = getConfig()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
  const app = require('fastify')(config.fastifyInit) as FastifyInstance
  void app.register(createServer, config)

  await app.listen(config.fastify)
}

void run()