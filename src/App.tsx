import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BeagleService from './beagle/beagle-service'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <BeagleRemoteView route='/home.json' />,
  },
  {
    path: "/:id",
    element: <BeagleRemoteView route='/product-detail.json' />,
  },
])

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BeagleProvider value={BeagleService}>
      <RouterProvider router={router} />
    </BeagleProvider>
  </QueryClientProvider>
)

export default App
