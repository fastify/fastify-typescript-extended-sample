import { FastifyPluginAsync } from 'fastify'
import routes from './routes'
import { Config } from './config'

// Passing the Config type here is OK. It provides the necessary definition for the `opts` parameter
const createServer: FastifyPluginAsync<Config> = async (server, opts) => {
  void server.register(routes, opts)
}

export default createServer