import { Container as ContainerPrimitive } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { cloneElement } from 'react'

import { Api } from '../../utils/Api'
import buildUrl from '../../utils/buildUrl'

import styles from './styles.module.scss'

interface ComponentProps {
  url: string,
  queryParams: any,
  dataSource: any,
  children: any,
}

const useFetch = ({ url, queryParams = {} }: any) => useQuery(
  ['fetch-grid', queryParams], () => {
    const path = buildUrl({ route: url, queryParams: { name: queryParams } })

    return Api.get<string, any[]>(path).then(({ data }) => data)
  },
)

const Grid = ({ url, queryParams, dataSource, children, ...props }: ComponentProps) => {
  const { data, isFetched, isError } = useFetch({ url, queryParams })

  const handleState = () => {
    console.log('error', isFetched, data, isError)

    if (isFetched && data === undefined) {
      return "error"
    }

    if (isFetched && data && data.length === 0) {
      return "empty"
    }
    
    if (isFetched && data && data.length > 0) {
      return "view"
    }


    return 'loading'
  }

  const components: any[] = children.map((child: any) => child.props.children[0])

  const renders = components.reduce((acc, current) => ({ ...acc, [current.props.case]: current }), {})

  console.log(handleState())

  return (
    <ContainerPrimitive className={styles.Container} {...props} maxW='8xl'>
      {{
        ...renders,
        loading: (
          Array.from({ length: renders.loading.props.length }).map((_, index) => (
            cloneElement(renders.loading, { key: `loading-card-${index}` })
          ))
        ),
        view: data && data?.map((source: any) => cloneElement(renders.view, { ...source, key: source.id })),
      }[handleState()]}
    </ContainerPrimitive>
  )
}

export default Grid
