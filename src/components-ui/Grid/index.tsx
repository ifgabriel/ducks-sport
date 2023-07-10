import { useQuery } from '@tanstack/react-query'
import { ReactElement, cloneElement } from 'react'

import { Product } from '../../domain/usecase'
import { Api, buildUrl, handleRenderState } from '../../utils'


interface ComponentProps {
  case?: string,
  url: string,
  queryParams: Record<string, string>,
  children: ReactElement[],
}

const useFetch = ({ url = '', queryParams = {} }) => useQuery(
  ['fetch-grid', url, queryParams], () => {
    const path = buildUrl({ route: url, queryParams })

    return Api.get<string, Product[]>(path).then(({ data }) => data)
  },
)

const Grid = ({ url, queryParams, children, ...props }: ComponentProps) => {
  const { data, isFetched } = useFetch({ url, queryParams })

  const components = children.map((child) => child.props.children[0])

  const renders = components.reduce((acc, current) => ({ ...acc, [current.props.case]: current }), {})
  const renderState = handleRenderState(isFetched, data, !data?.length)
  return (
    <>
      <section className='grid md:grid-cols-5 sm:grid-cols-2 gap-12 gap-y-20 py-6' {...props}>
        {{
          ...renders,
          loading: (
            Array.from({ length: renders.loading.props.length }).map((_, index) => (
              cloneElement(renders.loading, { key: `loading-card-${index}` })
            ))
          ),
          view: data && data?.map((source: any) => cloneElement(renders.view, { ...source, key: source.id })),
        }[renderState]}
      </section>
    </>
  )
}

export default Grid
