import { IconButton, Icon } from '@chakra-ui/react'
import { IoAddSharp } from 'react-icons/io5'

const AddButton = ({ ...props }) => {
  return (
    <IconButton { ...props }>
      <Icon as={IoAddSharp} />
    </IconButton>
  )
}

export default AddButton
