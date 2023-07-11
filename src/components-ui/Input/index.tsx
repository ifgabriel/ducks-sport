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
  <div className="flex gap-2 flex-col md:max-w-2xl sm:max-w-md mx-auto my-6 px-6">
    <label className="text-zinc-950">{label}</label>
    <input 
      className="h-14 rounded bg-white w-auto px-4 py-2 border border-zinc-100"
      value={value} 
      onChange={handleEvent(onChange)}
       placeholder={placeholder} 
       />
  </div>
)

export default Input
