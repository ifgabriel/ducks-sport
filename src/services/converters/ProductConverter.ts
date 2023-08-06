import { RemoteProduct } from "../../data";
import { Product } from "../../domain/usecase";

const converter = (dto: RemoteProduct): Product => ({
    id: dto.id,
    name: dto.name,
    brand: dto.brand?.name ?? '',
    gender: dto.gender,
    price: dto.price,
    description: dto.description,
    images: dto.images.map((image) => image.url)
})

export default converter