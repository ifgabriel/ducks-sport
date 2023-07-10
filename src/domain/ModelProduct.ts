export interface ModelProduct {
  id: string
  name: string
  price: string
  brand: string,
  status: 'NEW' | 'RECOMMENDED'
  imageUrl: string,
  installmentPrice: {
    price: number
    installments: number
  },
  gender: 'MALE' | 'FEMALE',
  material: string,
  sizes: number[],
  description: string,
}

export type ModelDetailProduct = ModelProduct & {
  imagesUrl: string[],
}