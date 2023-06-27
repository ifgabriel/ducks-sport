import { Factory } from "miragejs";

import { random } from "./utils";

export const product = Factory.extend({
  name() {
    return ["Air Jordan 1 Retro High OG", "TÊNIS FORUM 84 LOW CLASSIC", "DONE"][
      random(2)
    ];
  },
  status() {
    return ["RECOMMENDED", "NEW"][random(2)];
  },
  price() {
    return [1599.99, 200.0, 500.99][random(3)];
  },
  brand() {
    return ["Nike", "Adidas"][random(2)];
  },
  imagesUrl: [
    "https://imgnike-a.akamaihd.net/768x768/02620551.jpg",
    "https://imgnike-a.akamaihd.net/768x768/02544315.jpg",
  ],
  installmentPrice: {
    price: 250.0,
    installments: 10,
  },
  sizes: [37, 38, 39, 40, 41, 42, 43],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
});
