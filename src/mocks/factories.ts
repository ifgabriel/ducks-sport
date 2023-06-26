import { Factory } from 'miragejs'

import { random } from './utils'

export const product = Factory.extend({
  name() {
    return ['Air Jordan 1 Retro High OG', 'TÊNIS FORUM 84 LOW CLASSIC', 'DONE'][random(2)]
  },
  status() {
    return ['RECOMMENDED', 'NEW'][random(2)]
  },
  price() {
    return [1599.99, 200.0, 500.99][random(3)]
  },
  brand() {
    return ['Nike', 'Adidas'][random(2)]
  },
  imageUrl() {
    return [
      'https://imgnike-a.akamaihd.net/768x768/02620551.jpg',
      'https://imgnike-a.akamaihd.net/768x768/02544315.jpg',
    ][random(2)]
  },
  installmentPrice: {
    price: 250.0,
    installments: 10,
  },
})
