import { Box, FormLabel, Input as InputPrimitive } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

type onChange = (value: Record<string, string>) => void

interface ComponentProps {
  value: string
  label: string
  onChange: onChange,
  placeholder: string,
}

const handleEvent = (handler?: onChange) => (event: ChangeEvent<HTMLInputElement>) => {
  handler?.({ value: event.target.value })
}

const Input = ({ value, label, onChange, placeholder }: ComponentProps) => (
  <Box mx="auto" width={500}  my={12}>
    <FormLabel fontWeight='normal'>{label}</FormLabel>
    <InputPrimitive value={value} onChange={handleEvent(onChange)} placeholder={placeholder} />
  </Box>
)

export default Input
