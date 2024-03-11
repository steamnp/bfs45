import React from 'react'
import ReactDOM from 'react-dom/client'
import App_new from './App_new.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App_new />
  </React.StrictMode>
)
