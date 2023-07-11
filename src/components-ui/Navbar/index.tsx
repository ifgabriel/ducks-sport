import Logo from './../../assets/logo.png'

interface MenuProps {
  label: string,
  categories: {
    label: string,
    options: {
      label: string,
      filter: string
    }[]
  }[]
}

const menus: MenuProps[] = [
  {
    label: 'Masculino',
    categories: [
      {
        label: 'Calçados',
        options: [
          {
            label: 'Tenis',
            filter: 'tenis'
          },
          {
            label: 'Casual',
            filter: 'botas'
          },
          {
            label: 'Corrida',
            filter: 'sapatenis'
          },
        ]
      },
      {
        label: 'Roupas',
        options: [
          {
            label: 'Shorts',
            filter: 'shorts'
          },
          {
            label: 'Camisetas',
            filter: 'camisetas'
          },
        ]
      }
    ]
  },
  {
    label: 'Feminino',
    categories: [
      {
        label: 'Calçados',
        options: [
          {
            label: 'Tenis',
            filter: 'tenis'
          },
        ]
      },
    ]
  },
  {
    label: 'Infatil',
    categories: [
      {
        label: 'Calçados',
        options: [
          {
            label: 'Tenis',
            filter: 'tenis'
          },
          {
            label: 'Botas',
            filter: 'botas'
          },
          {
            label: 'Sapatenis',
            filter: 'sapatenis'
          },
        ]
      },
      {
        label: 'Roupas',
        options: [
          {
            label: 'Shorts',
            filter: 'shorts'
          },
          {
            label: 'Camisetas',
            filter: 'camisetas'
          },
        ]
      }
    ]
  },
]

const Navbar = () => (
  <header className="bg-white">
    <div className="relative container mx-auto justify-center px-4 py-6 flex items-center ">
      <img src={Logo} width={160} alt="Ducks Sports" className='hidden sm:block absolute top-5 left-0' />
      <nav>
        <ul className="flex items-center justify-center font-semibold gap-3">
          {menus.map((menu) => (
            <li key={menu.label} className="sm:relative group px-3 py-2">
              <span className="text-zinc-950">{menu.label}</span>
              <div className="absolute top-10 right-10 left-10 sm:top-3 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 sm:min-w-[360px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div
                    className="sm:w-7 sm:h-7 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
                  </div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-9">
                      {menu.categories.map((category) => (
                        <div key={category.label}>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">{category.label}</p>
                          <ul className="mt-3 text-[15px]">
                            {category.options.map((option) => (
                              <li key={option.label}>
                                <a href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                  {option.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>

  </header>
)

export default Navbar