import { FacebookIcon, InstagramIcon, MessageSquareIcon } from "lucide-react"
import { ReactElement } from "react"

interface SocialProps {
    link: string,
    label: string,
    icon: ReactElement
}

const SocialButton = ({ link, label, icon }: SocialProps) => (
    <a href={link} target="_blank" className="bg-gray-50 flex p-2 justify-center items-center rounded-full text-zinc-800 hover:bg-gray-50/60">
        {icon}
        <span className="sr-only">{label}</span>
    </a>
)

const social: SocialProps[] = [
    {
        link: 'https://www.facebook.com/DucksSports/',
        label: 'Página do Facebook',
        icon: <FacebookIcon size={20} />
    },
    {
        link: 'https://www.instagram.com/duckssportsoficial/',
        label: 'Página do Instagram',
        icon: <InstagramIcon size={20} />
    },
    {
        link: 'https://api.whatsapp.com/send?phone=553438231315',
        label: 'Conversa no Whatsapp',
        icon: <MessageSquareIcon  size={20} />
    },
]

const Footer = () => (
    <footer className="bottom-0 bg-white mt-24">
        <hr className="border-zinc-100"/>
        <div className="mx-auto w-full max-w-screen-xl">
            <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                <span className="text-md text-zinc-800 sm:text-center">© 2023 Ducks Sports. Todos os direitos reservados.
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                    {social.map((item) => (
                        <SocialButton key={item.label} {...item} />
                    ))}
                </div>
            </div>
        </div>
    </footer>

)

export default Footer
