import { Text as PrimitiveText, TextProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ComponentProps extends TextProps {
  text?: ReactNode
}

const Text = ({ text, ...props }: ComponentProps) => (
  <PrimitiveText {...props}>{text ?? props.children}</PrimitiveText>
)

export default Text
