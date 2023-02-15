import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppRouter } from './box-router/AppRouter'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
