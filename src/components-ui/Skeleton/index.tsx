import { HTMLAttributes } from 'react'
interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  width: string
  height: string
}

const Skeleton = ({ width, height, ...props }: ComponentProps) => (
  <div {...props} role="status" className={`animate-pulse`}>
    <div className={`h-[${height}] w-[${width}] bg-gray-100 rounded`} />
    <span className="sr-only">Carregando</span>
  </div>
)

export default Skeleton
