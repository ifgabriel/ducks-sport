import { FileWarningIcon, XIcon } from 'lucide-react';

interface ComponentProps {
  title: string,
  description: string,
  type: 'ERROR' | 'EMPTY'
}

const ExceptionState = ({ title, description, type }: ComponentProps) => (
  <div>
    {type === 'ERROR'
      ? <XIcon />
      : <FileWarningIcon />
    }
    <h2>
      {title}
    </h2>
    <span>
      {description}
    </span>
  </div>
)

export default ExceptionState
