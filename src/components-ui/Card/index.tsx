import { RemoteProduct } from '../../data'

interface ComponentProps extends RemoteProduct {
  onPress: ({ id }: Record<string, string>) => void
}

const Card = ({ id, images, name, brand, price, onPress }: ComponentProps) => (
  <button
    onClick={() => onPress?.({ id })}
    className="m-w-[224px] text-left gap-2"
  >
    <div className="p-4 bg-white rounded-3xl">
      <img src={images[0].url} alt={name} />
    </div>
    <div className="flex flex-col justify-between py-4 px-2 min-h-[164px]">
      <div>
        <p className="text-zinc-950 text-lg font-medium ">{name}</p>
        <p className="text-zinc-700">{brand.name}</p>
      </div>
      <div>
        <p className="text-zinc-950 text-xl ">R$ {price}</p>
      </div>
    </div>
  </button>
)

export default Card
