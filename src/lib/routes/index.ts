import { FastifyPluginAsync } from 'fastify'
import ping from './ping'
import { Config } from '../config'

const routes: FastifyPluginAsync<Config> = async (server, opts) => {
  void server.register(ping, opts)
}

export default routes