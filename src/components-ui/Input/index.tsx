import { ChangeEventHandler } from 'react'
import { FormControl, FormLabel, Input as PrimitiveInput } from '@chakra-ui/react'

interface InputProps {
  // eslint-disable-next-line no-undef
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  label: string
  value: string
}

const Input = (props: InputProps) => {
  const handleEvent = (handler?: any) => (event: any) => {
    if (!handler) return

    handler({ value: event.target.value })
  }

  return (
    <FormControl maxWidth='500'>
      <FormLabel fontWeight='normal' color='#60695C'>
        {props.label}
      </FormLabel>
      <PrimitiveInput
        type='text'
        onChange={handleEvent(props.onChange)}
        value={props.value}
        placeholder={props.placeholder}
        boxShadow='md'
        background='white'
      />
    </FormControl>
  )
}

export default Input
