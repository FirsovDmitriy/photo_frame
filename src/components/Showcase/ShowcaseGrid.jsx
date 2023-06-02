import React from 'react'
import { Grid, Box, Flex } from '@chakra-ui/react'
import AppContainer from '@/components/AppContainer'

const ShowcaseGrid = ({ children }) => {
  return (
    <Box py={'100px'}>
      <AppContainer
        height="100%"
        px={{
          base: 0,
          md: '16px'
        }}
      >
        <Flex
          flexDirection={{
            base: 'column',
            md: 'row' 
          }}
          flexWrap='wrap'
          justifyContent='space-evenly'
          gap={5}
        >
         { children }
        </Flex>
      </AppContainer>
    </Box>
  )
}

export default ShowcaseGrid