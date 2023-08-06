import { RemoteProduct } from '../data';
import { gql, useQuery } from '../lib/hygraph-client';

const GET_PRODUCT_QUERY = gql`
  query getProduct($id: String!) {
    product(where: { id: $id }) {
      name
      price
      id
      description
      brand {
        id
        name
      }
      images {
        id
        url
      }
    }
  }
`

const useFetchProduct = (id: RemoteProduct['id']) => useQuery<RemoteProduct>(GET_PRODUCT_QUERY, { variables: { id }})

export default useFetchProduct