import React from 'react'
import Header from '@/components/Layout/Header/Header'
import Showcase from '@/components/Showcase/Showcase'
import { Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <Box display='flex' flexDirection='column' minH='100vh'>
      <Header />
      <Box as='main' flex='auto' display='grid' justifyItems='stretch'>
        { children }
      </Box>
    </Box>
  )
}

export default Layout