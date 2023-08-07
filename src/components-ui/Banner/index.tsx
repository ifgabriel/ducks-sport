import { handleRenderState } from '../../utils'
import { useFetchAsset } from '../../services'
import { Link } from 'react-router-dom'
import Skeleton from '../Skeleton'
import { RemoteAsset } from '../../data'

interface BannerProps {
  imageId: string
}

const Banner = ({ imageId }: BannerProps) => {
  const { data, called, loading } = useFetchAsset({ id: imageId })

  const Image = (image: RemoteAsset) => (
    <img
      src={image?.url}
      alt={image?.alt}
      height="300px"
      className="object-cover w-full h-auto my-24 rounded"
    />
  )

  return (
    <>
      {
        {
          view: !!data && (
            <>
              {data.asset?.to ? (
                <Link to={data.asset.to}></Link>
              ) : (
                <Image {...data?.asset} />
              )}
            </>
          ),
          loading: <Skeleton width="auto" height="300px" />,
          error: '',
          empty: '',
        }[handleRenderState(called, loading, data)]
      }
    </>
  )
}

export default Banner
