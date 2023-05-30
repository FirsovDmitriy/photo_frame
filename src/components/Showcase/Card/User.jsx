import { Flex, Avatar, Text, useMediaQuery } from '@chakra-ui/react'

const User = ({ user }) => {
  const [isTouch] = useMediaQuery('(any-hover: none)')

  return (
    <Flex alignItems="center">
      <Avatar
        name=""
        src={user.profile_image.medium}
        w="32px"
        h="32px"
      />
      <Text
        fontSize="sm"
        ml="10px"
        color={isTouch ? '#000' : '#FFF'}
      >
        { user.name }
      </Text>
    </Flex>
  )
}

export default User
