import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components-ui'
import { client } from './lib/hygraph-client'
import { Main, ProductDetail } from './pages'

const App = () => (
  <ApolloProvider client={client}>
    <Header />
      <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/product/:id'
          element={<ProductDetail />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ApolloProvider>
)

export default App
