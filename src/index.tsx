import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.css'
import makeServer from './mocks'

makeServer()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
