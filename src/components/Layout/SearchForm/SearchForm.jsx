import React from 'react'
import { useState, useContext, useEffect } from 'react'
import {
  FormControl,
  FormErrorMessage,
  Input,
  Box,
  IconButton,
  Icon
} from '@chakra-ui/react'
import { TbSearch } from 'react-icons/tb'
import Context from '@/Context'
import SearchFormPopover from './SearchFormPopover'
import { LOCAL_STORAGE_KEY } from '@/utulities/constants'
import { CgClose } from 'react-icons/cg'

const SearchForm = () => {

  const getRecentSearches = () => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(localData) {
      return JSON.parse(localData)
    }

    return []
  }

  const [recentSearches, setRecentSearches] = useState(getRecentSearches)
  const [value, setValue] = useState('')
  const [isVisible, setVisible] = useState(false)

  const { searchQuery, handleSearchQuery } = useContext(Context)

  const handleSubmit = event => {
    event.preventDefault()
    if(value.length) {
      handleSearchQuery(value)
    }
    const isExist = recentSearches.includes(value)
    if(!isExist) {
      setRecentSearches([
        ...recentSearches,
        value
      ])
    }
  }

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(recentSearches)
    )
  }, [searchQuery])

  const clearRecentSearches = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    setRecentSearches([])
  }

  const handleFocus = () => setVisible(true)
  const handleBlur = () => setVisible(false)

  return (
    <React.Fragment>
      <FormControl as='form' maxW="790px" onSubmit={ handleSubmit }>
        <Box position='relative'>
          <Box position="relative">
            <Input
              type="text"
              w="100%"
              pl="40px"
              placeholder="Search"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onFocus={ handleFocus }
              onBlur={ handleBlur }
              autoComplete="off"
            />
            <IconButton
              variant="ghost"
              position="absolute"
              left={0}
              zIndex={1}
              h={'100%'}
              _hover={{ backgroundColor: 'transparent' }}
            >
              <Icon as={TbSearch} w='20px' h='20px' />
            </IconButton>
            <IconButton
              onClick={ () => setValue('') }
              variant="ghost"
              position='absolute'
              right={0}
              zIndex={1}
              h='100%'
              _hover={{ background: 'rgba(144, 205, 244, 0.12)' }}
            >
              <Icon as={CgClose} w='20px' h='20px' />
            </IconButton>
          </Box>
        </Box>
        <SearchFormPopover
          recentSearches={ recentSearches }
          isVisible={ isVisible }
          setValue={ setValue }
          clearRecentSearches={ clearRecentSearches }
          handleSubmit={ handleSubmit }
        />
      </FormControl>

      
    </React.Fragment>
  )
}

export default SearchForm
