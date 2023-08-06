import { RemotePages } from '../data';
import { gql, useQuery } from '../lib/hygraph-client';

const GET_PAGES_QUERY = gql`
  query {
    pages {
      name
      payload
    }
  }
`

const useFetchPages = () => useQuery<RemotePages[]>(GET_PAGES_QUERY)

export default useFetchPages