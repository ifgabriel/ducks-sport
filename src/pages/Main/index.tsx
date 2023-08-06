import { BeagleProvider, BeagleRemoteView } from "@zup-it/beagle-react"
import { useLocation, useNavigate } from "react-router-dom"
import BeagleService from '../../beagle/beagle-service'
import { Breadcrumb, Card, ExceptionState, Skeleton } from "../../components-ui"
import { useFetchPages, useFetchProducts } from "../../services"
import { handleRenderState } from "../../utils"

const Main = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);

    const { data, isFetched } = useFetchProducts()
    
    const { data: pages } = useFetchPages()

    if (!searchParams.toString()) return (
        <BeagleProvider value={BeagleService}>
            {pages?.map((page) => (
                <BeagleRemoteView key={page.name} route='/home.json' />
            ))}
        </BeagleProvider>
    )

    return (
        <section className='container mx-auto'>
            <Breadcrumb />
            {{
                view: !!data && (
                    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 gap-y-20'>
                        {data?.map((item) => <Card {...item} key={item.id} onPress={({ id }) => navigate(`/product/${id}`)} />)}
                    </section>
                ),
                empty: '',
                loading: Array.from({ length: 10 }).map((_, index) => <Skeleton width='400px' height='400px' key={index} />),
                error: <ExceptionState title="Opps! Infelizmente tivemos um problema" description="Tente novamente mais tarde" type="ERROR" />,
            }[handleRenderState(isFetched, data)]}
        </section >
    )
}


export default Main