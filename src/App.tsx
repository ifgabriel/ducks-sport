import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import BeagleService from './beagle/beagle-service'
import { Footer } from './components-ui'

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

const FallbackElement = () => (
  <div className="text-center py-3 px-2">
    <h1
      className=""
    >
      404
    </h1>
    <span >
      Page Not Found
    </span>
    <span>
      The page you're looking for does not seem to exist
    </span>

    <Link
      to='/'
      className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Go to Home
    </Link>
  </div>
)

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BeagleProvider value={BeagleService}>
      <RouterProvider router={router} fallbackElement={<FallbackElement />} />
      <Footer />
    </BeagleProvider>
  </QueryClientProvider>
)

export default App
