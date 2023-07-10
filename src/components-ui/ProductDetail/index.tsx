import { useQuery } from "@tanstack/react-query";

import { DetailProduct } from "../../domain/usecase";
import { Api, handleRenderState } from "../../utils";
import buildUrl from "../../utils/buildUrl";
import ExceptionState from "../ExceptionState";
import Skeleton from "../Skeleton";

interface ComponentProps {
  url: string,
  params: Record<string, string>,
}

const useFetch = ({ url, params = {} }: any) => useQuery(
  ['fetch-detail-product', params], () => {
    const path = buildUrl({ route: url, params })

    return Api.get<string, DetailProduct>(path).then(({ data }) => data)
  },
)

const ProductDetail = ({ url, params }: ComponentProps) => {
  const { data, isFetched } = useFetch({ url, params })

  return (
    <>
      {{
        view: !!data && (
          <section className="py-36">
            <div className="flex gap-8 flex-wrap">
              <div className="flex sm:flex-row md:flex-col gap-5 overflow-auto">
                {data.imagesUrl?.map((image, index) => (
                  <img key={`image-detail-product-${index}`} width='74px' height='74px' src={image} className="rounded" />
                ))}
              </div>
              <img src={data.imageUrl} className="max-w-md rounded-md object-contain" />
              <div className="flex flex-col gap-2">
                <span className="text-zinc-950 text-6xl font-medium">
                  {data.name}
                </span>
                <span className="text-zinc-500 text-3xl font-medium uppercase">
                  {data.brand}
                </span>
                <div className="mt-8">
                  <p className="text-3xl text-zinc-950">R${data.price}</p>
                  {!!data.installmentPrice && (
                    <span className="text-lg text-zinc-950">
                      {data.installmentPrice.installments} x R$ {data.installmentPrice.price}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  {data.sizes?.map((size) => (
                    <div key={size} className="px-3 p-2 border border-zinc-950 rounded">
                      <span className="text-zinc-950">{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="h-px my-8 bg-gray-100 border-0" />

            <div>
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
            </div>
          </section>
        ),
        empty: '',
        loading: <Skeleton width="100%" height="600px" />,
        error: <ExceptionState title="Opps! Infelizmente tivemos um problema" description="Tente novamente mais tarde" type="ERROR" />,
      }[handleRenderState(isFetched, data)]}
    </>
  )
}


export default ProductDetail;
