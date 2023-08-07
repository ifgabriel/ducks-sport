import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <main className='bg-slate-100/70  font-sans text-gray-400'>
      <App />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)
