import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initI18n } from './i18n'
import App from './App.jsx'

async function bootstrap() {
  try {
    await initI18n()
  } catch (error) {
    console.error('Failed to initialize i18n', error)
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

bootstrap()
