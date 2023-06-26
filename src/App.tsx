import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import BeagleService from './beagle/beagle-service'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BeagleProvider value={BeagleService}>
        <ChakraProvider theme={theme}>
          <BeagleRemoteView route='/home.json' />
        </ChakraProvider>
      </BeagleProvider>
    </QueryClientProvider>

  )
}

export default App
