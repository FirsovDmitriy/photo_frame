import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  Tag,
  TagLabel,
  HStack,
  Icon,
  Flex
} from '@chakra-ui/react'
import { AiFillLike } from 'react-icons/ai'

const ShowcaseModal = ({ item, ...props }) => {
  return (
    <Modal { ...props }>
      <ModalOverlay cursor='zoom-out' />
      <ModalContent maxW='1200px' w='100%'>
        <ModalHeader
          justifyContent='flex-end'
          pt='30px'
        >
          <Flex alignItems='center' gap='5px'>
            <Icon as={AiFillLike} />
            <Text as='span'>
              { item.likes }
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton w='30px' h='30px' />
        <ModalBody>
          <Image
            h='580px'
            w='100%'
            objectFit='contain'
            src={ item.urls.regular }
            alt={ item.ali_description }
          />
          <Text fontSize='lg' my='40px'>
            { item.description }
          </Text>

          <HStack mb='20px'>
            {Object.hasOwn(item, 'tags') ? (
              item.tags.map(tag => (
                <Tag key={tag.title}>
                  <TagLabel> { tag.title } </TagLabel>
                </Tag>
              ))
            ) : null}
          </HStack>

        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ShowcaseModal
