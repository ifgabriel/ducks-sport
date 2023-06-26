import { Registry, Server } from 'miragejs'

import * as factories from './factories'
import * as models from './models'

type Schema = Registry<typeof models, typeof factories>
export type MocksType = Server<Schema>
