import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import { ChakraProvider } from '@chakra-ui/react'

import BeagleService from './beagle/beagle-service'

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <ChakraProvider>
        <BeagleRemoteView route='/home.json' />
      </ChakraProvider>
    </BeagleProvider>
  )
}

export default App
