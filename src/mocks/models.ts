import { Model, belongsTo } from 'miragejs'
import { ModelDefinition } from 'miragejs/-types'

import { RemoteProduct } from './../data'

export const product: ModelDefinition<RemoteProduct> = Model.extend({ category: belongsTo('category') })
