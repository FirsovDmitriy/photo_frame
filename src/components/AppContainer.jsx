import { Container } from '@chakra-ui/react'

const AppContainer = ({ children, ...props }) => {
  return (
    <Container maxW='1400' { ...props }>
      { children }
    </Container>
  )
}

export default AppContainer