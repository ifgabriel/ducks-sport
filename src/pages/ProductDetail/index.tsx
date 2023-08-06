import { MoveLeftIcon } from "lucide-react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ExceptionState, Skeleton } from "../../components-ui"
import useFetchProduct from "../../services/useFetchProduct"
import { handleRenderState } from "../../utils"

const ProductDetail = () => {
    const { id } = useParams()
    const { data, called } = useFetchProduct(id!)
    const [currentImage, setCurrentImage] = useState(data?.images[0].url)

    return (
        <section className='container mx-auto'>
            {{
                view: !!data && (
                    <section>
                        <Link to="/" className="mb-8 flex gap-2 text-zinc-900"><MoveLeftIcon />Voltar</Link>
                        <div className="flex gap-8 flex-wrap">
                            <div className="flex sm:flex-row md:flex-col gap-5 overflow-auto">
                                {data.images?.map((image, index) => (
                                    <img onClick={() => setCurrentImage(image.url)} key={`image-detail-product-${index}`} width='74px' height='74px' src={image.url} className="rounded" />
                                ))}
                            </div>
                            <div className="overflow-hidden">
                                <img src={currentImage ?? data.images[0].url} className="max-w-md rounded-md object-contain" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-zinc-950 text-6xl font-medium">
                                    {data.name}
                                </span>
                                <span className="text-zinc-500 text-3xl font-medium uppercase">
                                    {data.brand.name}
                                </span>
                                <div className="mt-8">
                                    <p className="text-3xl text-zinc-950">R${data.price}</p>
                                </div>
                            </div>
                        </div>
                        <hr className="h-px my-8 bg-gray-100 border-0" />
                        {/*    <div>
                            <div>
                                <span>
                                    {data.description}
                                </span>
                            </div>
                            <hr className="h-px my-8 bg-gray-100 border-0" />
                            <div>
                                <span>
                                    Product Details
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            Material:
                                        </span>{' '}
                                        {data.material}
                                    </li>
                                    <li>
                                        <span>
                                            Genero:
                                        </span>{' '}
                                        {data.gender}
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </section>
                ),
                empty: '',
                loading: (
                    <section>
                        <div className="flex gap-8 flex-wrap">
                            <div className="flex sm:flex-row md:flex-col gap-5 overflow-auto">
                                <Skeleton width="74px" height="74px" />
                                <Skeleton width="74px" height="74px" />
                                <Skeleton width="74px" height="74px" />
                                <Skeleton width="74px" height="74px" />
                                <Skeleton width="74px" height="74px" />
                            </div>
                            <Skeleton width="448px" height="448px" />
                            <div className="flex flex-col gap-2">
                                <span className="text-zinc-950 text-6xl font-medium">
                                    <Skeleton width="500px" height="36px" />
                                </span>
                                <span className="text-zinc-500 text-3xl font-medium uppercase">
                                    <Skeleton width="150px" height="26px" />
                                </span>
                                <div className="mt-8">
                                    <Skeleton width="150px" height="50px" />
                                </div>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Skeleton width="42px" height="42px" />
                                    <Skeleton width="42px" height="42px" />
                                    <Skeleton width="42px" height="42px" />
                                    <Skeleton width="42px" height="42px" />
                                </div>
                            </div>
                        </div>
                        <hr className="h-px my-8 bg-gray-100 border-0" />
                        <div>
                            <Skeleton width="100%" height="200px" />
                            <hr className="h-px my-8 bg-gray-100 border-0" />
                            <Skeleton width="400px" height="300px" />
                        </div>
                    </section>
                ),
                error: <ExceptionState title="Opps! Infelizmente tivemos um problema" description="Tente novamente mais tarde" type="ERROR" />,
            }[handleRenderState(called, data)]}
        </section>
    )
}


export default ProductDetail