import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { LightingProvider } from './context/LightingContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LightingProvider>
      <App />
    </LightingProvider>
  </StrictMode>,
)
