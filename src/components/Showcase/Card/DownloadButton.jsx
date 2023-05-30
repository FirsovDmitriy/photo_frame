import { IconButton, Icon } from '@chakra-ui/react'
import { FiDownload } from 'react-icons/fi'

const DownloadButton = () => {
  return (
    <IconButton>
      <Icon w="20px" h="20px" as={FiDownload} />
    </IconButton>
  )
}

export default DownloadButton
