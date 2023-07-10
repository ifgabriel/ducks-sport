import { Response } from 'miragejs'

import { MocksType } from './type'

const routes = (server: MocksType) => {
  server.get('/products', function (schema, request) {
    let products = schema.all('product').models

    if (request.queryParams.type) {
      products = products.filter((product) => product.status === request.queryParams.type)
    }

    if (request.queryParams.name) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(request.queryParams.name)
      )
    }

    return new Response(200, {}, products)
  }, { timing: 1000 })

  server.get('/product/:productId', function (schema, request) {
    const product = schema.find('product', request.params.productId)

    return new Response(200, {}, product as any)
  }, { timing: 1000 })
}

export default routes
