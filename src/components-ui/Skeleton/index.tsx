
interface ComponentProps {
  width: string
  height: string
}

const Skeleton = ({ width, height }: ComponentProps) => (
  <div role="status" className={`animate-pulse w-[${width}]`}>
    <div className={`h-[${height}]  bg-gray-100 rounded`} />
    <span className="sr-only">Carregando</span>
  </div>
)

export default Skeleton
