import t from 'tap'
import { FastifyInstance } from 'fastify'

import ping from './ping'
import { getTestingConfig } from '../../config'

void t.test('ping should return pong', async t => {
	t.plan(2)

	const config = getTestingConfig()
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
	const server = require('fastify')(config.fastifyInit) as FastifyInstance
	await server.register(ping, { config }).ready()

	const res = await server.inject({
		method: 'GET',
		url: '/ping'
	})

	t.equal(res.statusCode, 200)
	t.equal(res.payload, 'pong\n')

	await server.close()
})