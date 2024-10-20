import React from 'react'
import ReactDOM from 'react-dom/client'
// Toaster is used to display the message for notification
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
)
