import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import ShowcaseCardOverlay from './ShowcaseCardOverlay'
import ShowcaseModal from './ShowcaseModal'

const ShowcaseCard = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <React.Fragment>
      <Card
        className='showcase-card'
        onClick={ onOpen }
        role="group"
        position={'relative'}
        h={'100%'}
        cursor="zoom-in"
      >
        <CardBody p={0} overflow="hidden">
          <Image
            h="100%"
            w="100%"
            objectFit="cover"
            src={item.urls.regular}
            alt={ item.alt_description }
          />
        </CardBody>
        <ShowcaseCardOverlay user={ item.user } />
      </Card>

      <ShowcaseModal isOpen={isOpen} onClose={onClose} item={ item } />

    </React.Fragment>
  )
}

export default ShowcaseCard
