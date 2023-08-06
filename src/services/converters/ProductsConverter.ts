import { RemoteProduct } from "../../data";
import { Product } from "../../domain/usecase";

const converter = (dto: RemoteProduct[]): Product[] => (
    dto.map((product) => ({
        id: product.id,
        name: product.name,
        brand: product.brand?.name ?? '',
        gender: product.gender,
        price: product.price,
        description: product.description,
        images: product.images.map((image) => image.url)
    }))
)

export default converter