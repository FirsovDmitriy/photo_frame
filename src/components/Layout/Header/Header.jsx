import { Box, Flex, Link, Text } from '@chakra-ui/react'
import SearchForm from '@/components/Layout/SearchForm/SearchForm'
import Logo from './Logo'
import AppContainer from '@/components/AppContainer'

const Header = () => {
  return (
    <Box color={'#FFF'} bg={'#373737'} as='header'>
      <AppContainer>
          <Flex
            flexDirection={{
              base: 'column',
              lg: 'row'
            }}
            justifyContent={'space-between'}
            alignItems={{
              base: 'flex-start',
              lg: 'center'
            }}
            py={'20px'}
          >
            <Link
              margin={{
                base: '0 0 20px 0',
                lg: 0
              }}
            >
              <Flex alignItems='center' gap='5px' textTransform='uppercase'>
                <Text>Photo</Text>
                <Logo />
              </Flex>
            </Link>
            <SearchForm variant="standard" />
          </Flex>
        </AppContainer>
    </Box>
  )
}

export default Header
