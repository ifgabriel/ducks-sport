import { ReactNode } from "react"

interface ComponentProps {
  text?: ReactNode
}

const Text = ({ text }: ComponentProps) => (
  <span>{text}</span>
)

export default Text
