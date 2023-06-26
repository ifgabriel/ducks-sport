import { RestSerializer, createServer } from 'miragejs'

import * as factories from './factories'
import include from './include'
import * as models from './models'
import routes from './routes'
import seeds from './seeds'

const makeServer = () =>
  createServer({
    models,
    factories,
    serializers: {
      application: RestSerializer.extend({ embed: true, root: false, include }),
    },
    seeds(server) {
      seeds(server)
    },
    routes() {
      routes(this)
      this.passthrough('/pages/home.json')
      this.passthrough('/pages/product-detail.json')
    },
  })

export default makeServer
