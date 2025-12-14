import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './Context/DataContext.jsx'
import { CartProvider } from './Context/CardContext.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
    <DataProvider>
      <CartProvider>
         <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
           <App />
         </ClerkProvider>
      </CartProvider>
    </DataProvider>
)

