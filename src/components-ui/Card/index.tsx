import { Badge, Box, Image } from '@chakra-ui/react'

import Text from '../Text'

interface ComponentProps {
  imageUrl: string
  name: string
  brand: string
  price: string
  onPress: any
  installmentPrice?: {
    installments: number
    price: string
  }
  status?: 'NEW' | 'RECOMMED'
}

const Card = ({ imageUrl, status, name, price, installmentPrice, onPress }: ComponentProps) => (
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' onClick={() => onPress?.()}>
    <Image src={imageUrl} alt='' />
    <Box p='6' gap='16px' display='flex' flexDirection='column'>
      <Box display='flex' alignItems='baseline'>
        {status && (
          <Badge borderRadius='full' px='2' colorScheme={status === 'NEW' ? 'cyan' : 'purple'}>
            {status === 'NEW' ? 'Lançamento' : 'Recomendado'}
          </Badge>
        )}
      </Box>
      <Text mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
        {name}
      </Text>
      <Box>
        <Text>R${price}</Text>
        {!!installmentPrice && (
          <Text color='orange.500' fontSize='sm'>
            {installmentPrice.installments} x R$ {installmentPrice.price}{' '}
          </Text>
        )}
      </Box>
    </Box>
  </Box>
)

export default Card
