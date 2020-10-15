import { FastifyPluginAsync } from 'fastify'
import autoload from 'fastify-autoload'
import path from 'path'
import { Config } from './config'
import fastifyStatic from 'fastify-static'

export interface PluginOpts {
  config: Config
}

export type Plugin = FastifyPluginAsync<PluginOpts>

const createServer: Plugin = async (server, opts) => {
  void server.register(fastifyStatic, {
    root: path.join(process.cwd(), '/public'),
    prefixAvoidTrailingSlash: true
  })

  server.setNotFoundHandler((_, reply) => {
    void reply.sendFile('404.html')
  })

  void server.register(autoload, {
    dir: path.join(__dirname, 'routes'),
    ignorePattern: /.test.(t|j)s/,
    dirNameRoutePrefix: false,
    options: {
      prefix: '/api',
      config: opts.config
    }
  })
}

export default createServer