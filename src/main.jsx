import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ContextDataProvider from './context/ContextDataProvider.jsx'


createRoot(document.getElementById('root')).render(

  <ContextDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextDataProvider>


)
