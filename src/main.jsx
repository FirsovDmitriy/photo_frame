import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/assets/style/index.css'

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: "Georgia, serif"
  },
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.querySelector('#root')).render(
  <ChakraProvider theme={ theme }>
    <QueryClientProvider client={ queryClient }>
      <App />
    </QueryClientProvider>
  </ChakraProvider>,
)
