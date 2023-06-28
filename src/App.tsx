import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import BeagleService from './beagle/beagle-service'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ config })
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BeagleProvider value={BeagleService}>
          <BeagleRemoteView route='/home.json' />
        </BeagleProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
