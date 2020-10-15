import envVar from 'env-var'

export function getConfig () {
  const env = {
    NODE_ENV: envVar.get('NODE_ENV').required().asString(),
    API_HOST: envVar.get('API_HOST').required().asString(),
    API_PORT: envVar.get('API_PORT').required().asPortNumber()
  }

  const isProduction = /^\s*production\s*$/i.test(env.NODE_ENV)

  return {
    isProduction,
    fastify: {
      host: env.API_HOST,
      port: env.API_PORT
    },
    fastifyInit: {
      logger: true
    }
  }
}

export function getTestingConfig(): Config {
  return {
    isProduction: false,
    fastify: {
      host: '0.0.0.0',
      port: 5000
    },
    fastifyInit: {
      logger: false
    }
  }
}

export type Config = ReturnType<typeof getConfig>