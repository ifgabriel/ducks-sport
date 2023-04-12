import { QueryClientProvider, QueryClient } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'

import BeagleService from './beagle/beagle-service'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BeagleProvider value={BeagleService}>
      <ChakraProvider>
        <BeagleRemoteView route='/home.json' />
      </ChakraProvider>
    </BeagleProvider>
  </QueryClientProvider>
)

export default App
