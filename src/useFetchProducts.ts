/* eslint-disable no-console */
import { useQuery } from 'react-query'

import products from './products.json'

interface FetchProducts {
  filter: string
}

const useFetchProducts = ({ filter }: FetchProducts) =>
  useQuery(['fetch-products', filter], () =>
    products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
  )

export default useFetchProducts
