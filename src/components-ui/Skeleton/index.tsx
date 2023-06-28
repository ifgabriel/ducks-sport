import { Skeleton as PrimitiveSkeleton } from '@chakra-ui/react'

interface ComponentProps {
  width: string
  height: string
}

const Skeleton = (props: ComponentProps) => (
  <PrimitiveSkeleton borderRadius='3xl' {...props} />
)

export default Skeleton
