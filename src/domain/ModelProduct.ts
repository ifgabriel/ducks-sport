export interface ModelProduct {
  id: string
  name: string
  price: string
  status: 'NEW' | 'RECOMMENDED'
  imagesUrl: string[],
  installmentPrice: {
    price: number
    installments: number
  },
  sizes: number[],
  description: string,
}
