import {
  Box,
  Flex,
  IconButton,
  Icon,
  Avatar,
  Text
} from '@chakra-ui/react'
import { GrFavorite } from 'react-icons/gr'
import { IoAddSharp } from 'react-icons/io5'
import { FiDownload } from 'react-icons/fi'

const ShowcaseCardOverlay = ({ user }) => {
  return (
    <Box
      position='absolute'
      top={0}
      left={0}
      display='grid'
      alignContent='space-between'
      padding='20px'
      w='100%'
      h='100%'
      backgroundColor='rgba(0, 0, 0, 0.5)'
      opacity={0}
      pointerEvents='none'
      transition='opacity 0.3s'
      _groupHover={{ opacity: 1, pointerEvents: 'all' }}
    >
      <Flex justifyContent='flex-end' gap='10px'>
        <IconButton>
          <Icon as={ GrFavorite } />
        </IconButton>
        <IconButton>
          <Icon as={ IoAddSharp } />
        </IconButton>
      </Flex>
      <Flex alignItems='center' justifyContent='space-between'>

        <Flex alignItems='center' color='#FFF'>
          <Avatar
            name=''
            src={ user.profile_image.medium }
            w='32px'
            h='32px'
          />
          <Text fontSize='sm' ml='10px'>
            { user.name }
          </Text>
        </Flex>

        <IconButton>
            <Icon w='20px' h='20px' as={ FiDownload } />
          </IconButton>
        </Flex>
    </Box>
  )
}

export default ShowcaseCardOverlay