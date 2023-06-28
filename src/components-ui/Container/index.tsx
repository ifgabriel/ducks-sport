import { Container as ContainerPrimitive, ContainerProps } from '@chakra-ui/react'

const Container = (props: ContainerProps) => (
  <ContainerPrimitive {...props} maxW='8xl' />
)

export default Container
