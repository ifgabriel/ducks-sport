import { useNavigate, useSearchParams } from 'react-router-dom'
import { Breadcrumb, Card, ExceptionState, Skeleton } from '../../components-ui'
import { useFetchProducts } from '../../services'
import { handleRenderState } from '../../utils'

const Navigation = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { data, called, loading } = useFetchProducts({
    name: searchParams.get('name') ?? '',
    gender: searchParams.get('gender') ?? '',
    subCategory: searchParams.get('subCategory') ?? '',
  })

  return (
    <section className="container mx-auto px-2">
      <Breadcrumb />
      {
        {
          view: !!data && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-12 gap-y-20">
              {data?.products.map((item) => (
                <Card
                  {...item}
                  key={item.id}
                  onPress={({ id }) => navigate(`/product/${id}`)}
                />
              ))}
            </div>
          ),
          empty: <ExceptionState
          title="Opps! Nenhum produto encontrato"
          description="Tente buscar por outra opção"
          type="empty"
        />,
          loading: (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 gap-y-20">
              {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton width="auto" height="400px" key={index} />
              ))}
            </div>
          ),
          error: (
            <ExceptionState
              title="Opps! Infelizmente tivemos um problema"
              description="Tente novamente mais tarde"
              type="error"
            />
          ),
        }[handleRenderState(called, loading, data, !data?.products?.length)]
      }
    </section>
  )
}

export default Navigation
