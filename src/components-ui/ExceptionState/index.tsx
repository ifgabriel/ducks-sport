import { FileWarningIcon, XIcon } from 'lucide-react'

interface ComponentProps {
  title: string
  description: string
  type: 'error' | 'empty'
}

const ExceptionState = ({ title, description, type }: ComponentProps) => (
  <div>
    {type === 'error' ? <XIcon /> : <FileWarningIcon />}
    <h2>{title}</h2>
    <span>{description}</span>
  </div>
)

export default ExceptionState
