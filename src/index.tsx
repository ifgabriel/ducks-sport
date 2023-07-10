import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.css'
import makeServer from './mocks'

makeServer()


export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript.',
}

ReactDOM.render(
  <React.StrictMode>
    <main className='bg-gray-50 font-sans text-gray-100'>
      <App />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)
