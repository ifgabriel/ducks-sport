import { Container as ContainerPrimitive } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { cloneElement } from 'react'
import { Api } from '../../utils/Api'
import buildUrl from '../../utils/buildUrl'
import styles from './styles.module.scss'

interface ComponentProps {
  url: string,
  params: any,
  dataSource: any,
  children: any,
}

const useFetchGrid = ({ url, params = {} }: any) => useQuery(
  ['fetch-grid', params], () => {
    const path = buildUrl({ route: url, queryParams: { name: params } })

    return Api.get<string, any[]>(path).then(({ data }) => data)
  },
)

const Grid = ({ url, params, dataSource, children, ...props }: ComponentProps) => {
  const { data, isFetched } = useFetchGrid({ url, params })

  const handleState = () => {
    if (isFetched && data && data?.length > 0) {
      return "view"
    }

    if (isFetched && data && data?.length === 0) {
      return "empty"
    }

    return 'loading'
  }

  const components: any[] = children.map((child: any) => child.props.children[0])

  const renders = components.reduce((acc, current) => ({ ...acc, [current.props.case]: current }), {})

  return (
    <ContainerPrimitive className={styles.Container} {...props} maxW='8xl'>
      {{
        ...renders,
        loading: Array.from({ length: renders.loading.props.length }).map((_, index) => cloneElement(renders.loading, { key: `loading-products-${index}` })),
        view: data && data?.map((source: any) => cloneElement(renders.view, {...source, key: source.id})),
      }[handleState()]}
    </ContainerPrimitive>
  )
}

export default Grid
