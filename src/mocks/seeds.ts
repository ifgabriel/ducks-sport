import { MocksType } from './type'

const seeds = (server: MocksType) => {
  server.createList('product', 10)
}

export default seeds
