import React, { useEffect, useState, useContext } from 'react'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import Context from '@/Context'

const SearchFormPopover = props => {
  const {
    clearRecentSearches,
    isVisible,
    setValue,
    recentSearches
  } = props

  const { handleSearchQuery } = useContext(Context)

  const handleRecentSearches = value => {
    setValue(value)
    handleSearchQuery(value)
  }

  return (
    <Box
      position="absolute"
      top="calc(100% + 8px)"
      left={0}
      zIndex={1}
      w="100%"
      p="20px"
      background="#373737"
      borderRadius={'md'}
      opacity={ isVisible ? 1 : 0 }
      pointerEvents={ isVisible ? 'all' : 'none' }
      transition='opacity 0.3s ease-in-out'
      onMouseDown={ event => event.preventDefault() }
    >
      <Flex flexDirection='column'>
        <Flex
          alignItems='center'
          gap='10px'
          mb='10px'
        >
          <Text color='#FFF'>
            Recent Searches
          </Text>
          <Button
            colorScheme='linkedin'
            variant='outline'
            _hover={{ background: 'rgba(144, 205, 244, 0.12)' }}
            onClick={ clearRecentSearches }
          >
            Clear
          </Button>
        </Flex>
        <HStack spacing="24px">
          {recentSearches.map(value => (
            <Button
              onClick={ () => handleRecentSearches(value) }
              variant="link"
              color='#FFF'
              key={value}
            >
              { value }
            </Button>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}

export default SearchFormPopover
