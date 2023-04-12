/* eslint-disable no-console */
import { Box, Grid as GridPrimitive } from '@chakra-ui/react'

import Card from '../Card'
import Text from '../Text'
import { useFetchProducts } from '../../services'

interface GridProps {
  title: string
  filter: string
}

const Grid = ({ title, filter }: GridProps) => {
  console.log('filter', filter)
  const { data, isFetched } = useFetchProducts({ filter })

  const handleStateRender = () => {
    if (!!data && isFetched) return 'view'
    if (data === undefined && isFetched) return 'error'
    if (!data?.length && isFetched) return 'empty'

    return 'loading'
  }

  return (
    <Box marginY={16}>
      <Text fontSize='2xl' marginBottom={8}>
        {title}
      </Text>
      <GridPrimitive templateColumns='repeat(4, 1fr)' gap={6}>
        {
          {
            view: !!data && (
              <>
                {data.map(product => (
                  <Card key={product.id} {...product} />
                ))}
              </>
            ),
            empty: 'EMPTY',
            error: 'ERROR',
            loading: 'LOADING',
          }[handleStateRender()]
        }
      </GridPrimitive>
    </Box>
  )
}

export default Grid
