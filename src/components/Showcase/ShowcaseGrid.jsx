import React from 'react'
import { Grid, Box } from '@chakra-ui/react'
import AppContainer from '@/components/AppContainer'

const ShowcaseGrid = ({ children }) => {
  return (
    <Box py={'100px'}>
      <AppContainer height="100%">
        <Grid
          position="relative"
          templateColumns={{
            base: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr'
          }}
          gridAutoRows="300px"
          gap={5}
          h="100%"
        >
         
         { children }

        </Grid>
      </AppContainer>
    </Box>
  )
}

export default ShowcaseGrid