import { IconButton, Icon } from '@chakra-ui/react'
import { GrFavorite } from 'react-icons/gr'

const FavoriteButton = ({ ...props }) => {
  return (
    <IconButton { ...props }>
      <Icon as={GrFavorite} />
    </IconButton>
  )
}

export default FavoriteButton
