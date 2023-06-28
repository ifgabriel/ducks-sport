import { Box, Text } from "@chakra-ui/react"

interface ComponentProps {
  title: string,
  description: string,
  type: 'ERROR' | 'EMPTY'
}

const ExceptionState = ({ title, description, type }: ComponentProps) => (
  <Box bg='gray.200' borderRadius='lg' py='4' px='10'>
    <Text fontSize='xl'>{title}</Text>
    <Text fontSize='xl'>{type}</Text>
    <Text fontSize='lg'>{description}</Text>
  </Box>
)

export default ExceptionState
