import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components-ui'
import { client } from './lib/hygraph-client'
import { Main, ProductDetail } from './pages'

const App = () => (
  <ApolloProvider client={client}>
    <main className="bg-slate-100/70 font-sans text-gray-400 gap-24 grid grid-rows-[72px_1fr_101px] min-h-screen">
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
