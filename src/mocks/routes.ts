import { Response } from 'miragejs'

import { MocksType } from './type'

const routes = (server: MocksType) => {
  server.get('/products', function (schema, request) {
    let products = schema.all('product').models

    if (request.queryParams.name) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(request.queryParams.name)
      )

      return new Response(200, {}, products)
    }

    return new Response(200, {}, products)
  }, { timing: 1500 })

  server.get('/product/:id', function (schema, request) {
    const product = schema.find('product', request.params.id)

    return new Response(200, {}, product)
  })
}

export default routes
