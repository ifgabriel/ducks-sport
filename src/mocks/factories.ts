import { Factory } from "miragejs";
import { images, mainImages } from './images';
import { random } from "./utils";

const status = ['RECOMMENDED', 'EMPHASIS', 'NEW']
const brands = ['Nike', 'Mizuno', 'Acis', 'Olympikus']
const prices = [599.99, 499.99, 354.54, 225.55]
const sizes = [[38, 39, 40, 41], [39, 40, 41, 42]]
const names = [
  'Tênis Venture Runner',
  'Tênis VS Pace 2.0',
  'Tênis Gel-Rebound',
  'Tênis Wave Laser',
  'Tênis Air Zoom Vapor Pro HC',
  'Tênis Gel Nimbus 25',
  'Tênis Gel Pacemaker 3',
  'Tênis Wave Prophecy 12',
  'Tênis Downshifter 12',
]
const genders = ['MALE', 'FEMALE']
const materials = ['Sintético', 'Poliéster', 'Engineered knit', 'Camurça']
const descriptions = [
  'Para garantir conforto e qualidade nas suas corridas diárias, aposte no Tênis Running Nike Downshifter 12! Indicado para quem está iniciando os treinos de running, caminhada e crossfit, o calçado desenvolvido em material leve e resistente, possui cabedal têxtil respirável, e bico mais fino, por isso compre um número acima do que costuma usar. O tênis Nike conta com faixa de ajuste no mediopé que, se usada em conjunto com sua amarração em cadarço, proporciona mais firmeza e suporte aos pés. Entressola em espuma macia e elevada, conferindo amortecimento e uma sensação suave em cada passada. Solado emborrachado para criar tração e dar aderência a calçadas, ruas e esteiras. O tênis feminino da Nike possui ainda logo Downshifter 12 na lingueta e o icônico Swoosh na lateral. Esse tênis de corrida dá continuidade à jornada da Nike pela sustentabilidade, em um design feito com pelo menos 20% de conteúdo reciclado por peso. Invista e torne seus treinos ainda melhores!',
  'Com drop de 10mm, o Tênis Asics Gel Pacemaker 3 Feminino traz em sua terceira versão conforto para uma corrida de impulso ou caminhadas rápidas. Esse tênis feminino é feito em material tecnológico, cabedal em tecido de tramas abertas para respirabilidade, forro acolchoado e suporte no calcanhar para proteção. A entressola oferece amortecimento macio e durável com as tecnologias Gel e Amplifoam, já o solado conta com a durabilidade da borracha Ahar. Dê o seu melhor e se desafie no esporte com esse tênis de corrida Asics! Adquira já o seu!',
  'O amortecimento macio do Tênis Asics Gel Nimbus 25 Feminino faz você sentir como se estivesse pisando nas nuvens. Foi recriado com novos materiais que proporcionam uma experiência de corrida única. O cabedal em engineered knit envolve seus pés confortavelmente além de garantir ventilação avançada. Ele foi atualizado com revestimento de malha para mais flexibilidade e abraça o tornozelo para o ajuste perfeito. A entressola vem com o melhor amortecimento que a série tem a oferecer até o momento. O amortecimento FF BLAST PLUS ECO deste tênis cria uma experiência mais macia, leve e com menos impacto no meio ambiente. O cabedal de malha engineered knit envolve os pés com uma sensação de maciez e respirabilidade Pelo menos 75 do principal material do cabedal é feito a partir de conteúdo reciclado para reduzir os resíduos e emissões de carbono Palmilha confeccionada com uma solução de tingimento que reduz o uso de água em 33 e a emissão de carbono em 45 , quando comparada às técnicas convencionais Tecnologia PureGEL garante absorção de impacto e uma sensação de passada mais macia O amortecimento FF BLAST PLUS ECO cria uma aterrissagem mais suave e um impulso mais responsivo Palmilha OrthoLite X-55 para mais conforto Solado AHARPLUS para mais durabilidade e ASICS LITE mais leve, forte e sustentável do que os solados de borracha convencionais',
]

export const product = Factory.extend({
  name() { 
    return names[random(names.length)] 
  },
  price() { 
    return prices[random(prices.length)] 
  },
  installmentPrice: {
    price: (prices[random(prices.length)] / 10).toFixed(2),
    installments: 10,
  },
  brand() { 
    return brands[random(brands.length)] 
  },
  sizes() { 
    return sizes[random(sizes.length)] 
  },
  imageUrl() { 
    return mainImages[random(mainImages.length)] 
  },
  imagesUrl() { 
    return images[random(images.length)] 
  },
  status() { 
    return status[random(status.length)] 
  },
  gender() { 
    return genders[random(genders.length)] 
  },
  material() { 
    return materials[random(materials.length)] 
  },
  description() { 
    return descriptions[random(descriptions.length)] 
  },
});
