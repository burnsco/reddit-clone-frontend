import MessageUser from '@/components/common/MessageUser'
import { OfflineCircle, OnlineCircle } from '@/components/common/OnlineOffline'
import { useMyFriendsQuery } from '@/generated/graphql'
import {
  Avatar,
  Badge,
  Button,
  chakra,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Skeleton,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaUserFriends } from 'react-icons/fa'
import { ImSpinner } from 'react-icons/im'
import { useMyFriendRequestsQuery } from '../../../generated/graphql'

export default function Footer() {
  const bg = useColorModeValue('white', '#202020')

  const { data, loading, refetch } = useMyFriendsQuery({
    ssr: false,
  })

  const {
    data: requests,
    loading: loadingRequests,
    refetch: refetchRequests,
  } = useMyFriendRequestsQuery()

  const userHasFriends = data && data.me?.friends && data.me.friends.length > 0

  const FriendsCount = () => {
    if (data && data.me?.friends && data.me.friends.length > 0) {
      const onlineFriends = data.me.friends.map(
        (friend) => friend.online
      ).length

      return (
        <Badge mr={2} colorScheme="green">
          {onlineFriends}
        </Badge>
      )
    }
    return null
  }

  const FriendRequestsCount = () => {
    if (requests && requests.me && requests.me.friendRequests.length > 0) {
      const friendRequests = requests.me.friendRequests.map(
        (friend) => friend.online
      ).length

      return (
        <Badge mr={2} colorScheme="green">
          {friendRequests}
        </Badge>
      )
    }
    return null
  }

  const FriendsMenu = () => (
    <>
      {data?.me?.friends ? (
        <Menu>
          <MenuButton
            onClick={() => refetch()}
            as={Button}
            rightIcon={!loading ? <FaUserFriends /> : <ImSpinner />}
          >
            <FriendsCount />
            FRIENDS
          </MenuButton>
          <MenuList>
            {data.me.friends.map((user) => (
              <MenuItem key={`friend-${user.id}`}>
                <Avatar
                  size="xs"
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                  mr={3}
                />
                {user.username} {user && <MessageUser {...user} />}
                {user.online ? <OnlineCircle /> : <OfflineCircle />}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Heading>No Friends</Heading>
      )}
    </>
  )

  console.log('FOOTER _ FRIEND _ REQUESTS')
  console.log(requests)

  const AcceptOrRejectButtons = () => (
    <HStack p="2" ml="4">
      <Badge
        as="button"
        onClick={() => {
          console.log('accept friend')
        }}
        colorScheme="green"
        mx="2"
      >
        Accept
      </Badge>
      <Badge
        onClick={() => {
          console.log('reject friend')
        }}
        as="button"
        colorScheme="red"
      >
        Reject
      </Badge>
    </HStack>
  )

  const FriendRequests = () => (
    <Skeleton isLoaded={!loadingRequests}>
      {requests?.me?.friendRequests ? (
        <Menu>
          <MenuButton
            onClick={() => refetchRequests()}
            as={Button}
            rightIcon={!loading ? '?' : <ImSpinner />}
          >
            <FriendRequestsCount />
            Requests
          </MenuButton>
          <MenuList p="1" width="200px">
            <HStack p="2" border="1px dotted red" w="full">
              {requests?.me?.friendRequests.map((user) => (
                <MenuGroup w="full" key={`friend-${user.id}`}>
                  <Avatar
                    size="xs"
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                    mr={3}
                  />
                  {user.username} {user && <AcceptOrRejectButtons />}
                  <MenuDivider />
                </MenuGroup>
              ))}
            </HStack>
          </MenuList>
        </Menu>
      ) : (
        <Heading>No Friends</Heading>
      )}
    </Skeleton>
  )

  const FooterContent = () => (
    <Flex w="100%" h="100%">
      <FriendRequests />
      <Spacer />
      <FriendsMenu />
    </Flex>
  )

  if (!userHasFriends) {
    return null
  } else {
    return (
      <chakra.footer
        pos="fixed"
        bottom="0"
        zIndex="1"
        bg={bg}
        left="0"
        right="0"
        width="full"
      >
        <chakra.div height="2.5rem" mx="auto" maxW="1200px" px={1}>
          <FooterContent />
        </chakra.div>
      </chakra.footer>
    )
  }
}
