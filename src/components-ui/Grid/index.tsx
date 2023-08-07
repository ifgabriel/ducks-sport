import { ReactElement, cloneElement } from 'react'

import { useFetchProducts } from '../../services'
import { handleRenderState } from '../../utils'

interface ComponentProps {
  case?: string
  children: ReactElement[]
}

const Grid = ({ children, ...props }: ComponentProps) => {
  const { data, loading, called } = useFetchProducts()

  const components = children.map((child) => child.props.children[0])
  const renderState = handleRenderState(called, loading, data, !data?.products.length)
  const renders = components.reduce(
    (acc, current) => ({ ...acc, [current.props.case]: current }),
    {},
  )

  return (
    <>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 gap-y-20"
        {...props}
      >
        {
          {
            ...renders,
            loading: Array.from({ length: renders.loading.props.length }).map(
              (_, index) =>
                cloneElement(renders.loading, { key: `loading-card-${index}` }),
            ),
            view:
              data &&
              data?.products.map((source) =>
                cloneElement(renders.view, { ...source, key: source.id }),
              ),
          }[renderState]
        }
      </section>
    </>
  )
}

export default Grid
