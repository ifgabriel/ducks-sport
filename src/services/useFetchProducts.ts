import { RemoteProduct } from '../data';
import { gql, useQuery } from '../lib/hygraph-client';

const GET_PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      brand {
        id
        name
      }
      price
      gender {
        id
        name
      }
      description
      images {
        id
        url
      }
    }
  }
`

const useFetchProducts = () => useQuery<RemoteProduct[]>(GET_PRODUCTS_QUERY)

export default useFetchProducts