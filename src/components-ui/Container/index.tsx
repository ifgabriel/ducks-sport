import { ReactElement } from "react"

interface ComponentProps {
  condition?: boolean,
  children: ReactElement[],
}

const Container = ({ condition, children, ...props }: ComponentProps) => {
  const handleCondition = () => {
    if (condition) {
      return 'view'
    }

    return 'error'
  }
  
  const components = children.map((child) => child.props.children[0])

  const renders = components.reduce((acc, current) => ({ ...acc, [current.props.case]: current }), {})

  return (
    <div {...props} className="container mx-auto">{renders[handleCondition()] ?? children}</div>
  )
}

export default Container
