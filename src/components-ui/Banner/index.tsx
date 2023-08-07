import { ErrorComponentParams } from '@zup-it/beagle-react'
import { FC } from 'react'

const CustomErrorComponent: FC<ErrorComponentParams> = ({ retry }) => {
  return (
    <>
      <p>AAAAAAAAAAAAAAAAA</p>
      <button onClick={retry}>Retry</button>
    </>
  )
}

export default CustomErrorComponent
