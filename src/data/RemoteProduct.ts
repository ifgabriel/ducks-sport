export interface RemoteProduct {
  id: string
  name: string
  price: string
  brand: string,
  status: 'NEW' | 'RECOMMENDED'
  imagesUrl: string[],
  installmentPrice: {
    price: number
    installments: number
  },
  sizes: number[],
  description: string,
}