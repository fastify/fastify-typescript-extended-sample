import { FastifyPluginAsync } from 'fastify'
import { Config } from '../config'

const ping: FastifyPluginAsync<Config> = async (server, opts) => {
  server.route({
    url: '/ping',
    method: 'GET',
    handler: async (request, reply) => {
      return 'pong\n'
    }
  })
}

export default ping