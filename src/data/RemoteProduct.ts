export interface RemoteProduct {
  id: string
  name: string
  price: string
  status: 'NEW' | 'RECOMMENDED'
  imageUrl: string
  installmentPrice: {
    price: number
    installments: number
  }
}
