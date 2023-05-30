import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Box,
  Flex,
  useMediaQuery
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import ShowcaseModal from '../ShowcaseModal'
import FavoriteButton from './FavoriteButton'
import AddButton from './AddButton'
import DownloadButton from './DownloadButton'
import User from './User'

const ShowcaseCard = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isTouch] = useMediaQuery('(any-hover: none)')

  return (
    <React.Fragment>
      <Card
        onClick={onOpen}
        role="group"
        position={'relative'}
        h={'100%'}
        cursor="zoom-in"
      >
        {isTouch ? (
          <CardHeader>
            <User user={item.user} />
          </CardHeader>
        ) : null}
        <CardBody p={0} overflow="hidden">
          <Image
            h="100%"
            w="100%"
            objectFit="cover"
            src={item.urls.regular}
            alt={item.alt_description}
          />
        </CardBody>
        {isTouch ? (
          <CardFooter padding="14px" justifyContent="space-between">
            <Flex gap="10px">
              <FavoriteButton />
              <AddButton />
            </Flex>
            <DownloadButton />
          </CardFooter>
        ) : null}
        {isTouch ? null : (
          <Box
            position="absolute"
            top={0}
            left={0}
            display="grid"
            alignContent="space-between"
            padding="20px"
            w="100%"
            h="100%"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            opacity={0}
            pointerEvents="none"
            transition="opacity 0.3s"
            _groupHover={{ opacity: 1, pointerEvents: 'all' }}
          >
            <Flex justifyContent="flex-end" gap="10px">
              <FavoriteButton />
              <AddButton />
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <User user={item.user} />
              <DownloadButton />
            </Flex>
          </Box>
        )}
      </Card>

      <ShowcaseModal isOpen={isOpen} onClose={onClose} item={item} />
    </React.Fragment>
  )
}

export default ShowcaseCard
