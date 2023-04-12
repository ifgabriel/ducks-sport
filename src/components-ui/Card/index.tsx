import { Box, Badge, Image } from '@chakra-ui/react'

import Text from '../Text'

interface ComponentProps {
  imageUrl: string
  name: string
  brand: string
  price: string
  onPress?: any
  installmentPrice?: {
    installments: number
    price: string
  }
  status?: 'NEW' | 'RECOMMED'
}

const Card = ({ onPress, imageUrl, status, name, price, installmentPrice }: ComponentProps) => (
  <Box maxW='sm' onClick={onPress} borderRadius='lg'>
    <Image src={imageUrl} alt='' borderRadius='3xl' />
    <Box px='2' py='6' gap='16px' display='flex' flexDirection='column'>
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
