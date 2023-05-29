import { Spinner, Box } from '@chakra-ui/react'

const Preloader = () => {
  return (
    <Box
      position='absolute'
      top={0}
      left={0}
      display='grid'
      w='100%'
      h='100%'
      // backgroundColor='rgba(0, 0, 0, 0.6)'
    >
      <Spinner placeSelf='center' size='lg' />
    </Box>
  )
}

export default Preloader