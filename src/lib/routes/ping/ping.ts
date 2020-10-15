import { Plugin } from '../../createServer'

const ping: Plugin = async server => {
  server.route({
    url: '/ping',
    method: 'GET',
    handler: async () => {
      return 'pong\n'
    }
  })
}

export default ping