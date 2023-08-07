import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components-ui'
import { client } from './lib/hygraph-client'
import { Main, ProductDetail } from './pages'

const App = () => (
  <ApolloProvider client={client}>
    <main className="bg-slate-100/70 font-sans text-gray-400 gap-20 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  </ApolloProvider>
)

export default App
