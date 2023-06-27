import { Container as ContainerPrimitive } from '@chakra-ui/react'

import { useEffect } from 'react'

interface ComponentProps {
  onInit: any
}

const Container = ({ onInit, ...props }: ComponentProps) => {

  useEffect(() => {
    if (onInit) {
      onInit()
    }
  }, [])

  return (
    <ContainerPrimitive {...props} maxW='8xl' mt={8} />
  )
}

export default Container
