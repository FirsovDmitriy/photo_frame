import { useState, useContext, useEffect } from 'react'
import {
  FormControl,
  FormErrorMessage,
  Input,
  Box,
  IconButton
} from '@chakra-ui/react'
import { TbSearch } from 'react-icons/tb'
import Context from '@/Context'

const SearchForm = () => {
  const [value, setValue] = useState('')
  const [timer, setTimer] = useState(false)
  const context = useContext(Context)

  const handleSearch = () => {
    if(timer != false) {
      clearTimeout(timer)
    }
    setTimer(setTimeout(() => {
      context.search(value)
    }, 800))
  }

  useEffect(() => {
    handleSearch()
  }, [value])

  return (
    <FormControl maxW='790px'>
      <Box position='relative'>
        <Input
          type="text"
          w='100%'
          pl='40px'
          placeholder='Search'
          value={ value }
          onChange={ event => setValue(event.target.value) }
          autoComplete='off'
        />
        <IconButton
          variant='ghost'
          position='absolute'
          left={0}
          h={'100%'}
          _hover={{ backgroundColor: 'transparent' }}
        >
          <TbSearch />
        </IconButton>
      </Box>
    </FormControl>
  )
}

export default SearchForm
