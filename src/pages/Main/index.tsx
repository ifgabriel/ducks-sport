import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import BeagleService from '../../beagle/beagle-service'
import { Breadcrumb, Card, ExceptionState, Skeleton } from '../../components-ui'
import { useFetchProducts } from '../../services'
import { handleRenderState } from '../../utils'

const Main = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { data, called } = useFetchProducts({
    name: searchParams.get('name') ?? '',
    gender: searchParams.get('gender') ?? '',
    subCategory: searchParams.get('subCategory') ?? '',
  })

  if (!searchParams.toString())
    return (
      <BeagleProvider value={BeagleService}>
        <BeagleRemoteView route="/home.json" />
      </BeagleProvider>
    )

  return (
    <section className="container mx-auto">
      <Breadcrumb />
      {
        {
          view: !!data && (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 gap-y-20">
              {data?.products.map((item) => (
                <Card
                  {...item}
                  key={item.id}
                  onPress={({ id }) => navigate(`/product/${id}`)}
                />
              ))}
            </section>
          ),
          empty: '',
          loading: Array.from({ length: 10 }).map((_, index) => (
            <Skeleton width="400px" height="400px" key={index} />
          )),
          error: (
            <ExceptionState
              title="Opps! Infelizmente tivemos um problema"
              description="Tente novamente mais tarde"
              type="ERROR"
            />
          ),
        }[handleRenderState(called, data)]
      }
    </section>
  )
}

export default Main
