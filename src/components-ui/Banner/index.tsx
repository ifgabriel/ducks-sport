import { Link } from 'react-router-dom'

interface BannerProps {
    imageUrl: string,
    alt: string,
    url: string,
}

const Banner = ({ imageUrl, alt, url }: BannerProps) => (
    <Link target='_blank' to={url} >
        <img src={imageUrl} alt={alt} />
    </Link>
)

export default Banner