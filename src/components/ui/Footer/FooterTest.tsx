import {
  useMeQuery,
  useMyFriendsQuery,
  useMyPrivateMessagesQuery,
} from '@/generated/graphql'
import {
  Badge,
  Button,
  chakra,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaUserFriends } from 'react-icons/fa'
import { ImSpinner } from 'react-icons/im'

export default function FooterTest() {
  const bg = useColorModeValue('white', '#202020')

  const { data: me } = useMeQuery()

  const { data, loading, refetch } = useMyFriendsQuery({
    ssr: false,
  })

  console.log(data)

  const { data: messages, loading: loadingMessages } =
    useMyPrivateMessagesQuery()

  const userHasFriends = data && data?.me?.friends && data.me.friends.length > 0

  const FriendsCount = () => {
    if (data && data?.me?.friends && data.me?.friends.length > 0) {
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

  const FriendsMenu = () => (
    <>
      {data?.me?.friends.map((user) => (
        <Menu key={`user messages - ${user.username}`}>
          <MenuButton
            onClick={() => refetch()}
            as={Button}
            rightIcon={!loading ? <FaUserFriends /> : <ImSpinner />}
          >
            <FriendsCount />
            {user.username}
          </MenuButton>
          <MenuList></MenuList>
        </Menu>
      ))}
    </>
  )

  const FooterContent = () => (
    <Flex w="100%" h="100%">
      {data?.me?.friends ? <FriendsMenu /> : null}
    </Flex>
  )

  console.log(messages)

  console.log(me)

  // ok start from the basic functions we can do
  // lets try to re-create the chat function (rooms(categories) => chat messages)
  // so that it is friends ==> messages subscription

  const privateMessages = {
    bob: [
      {
        id: 1,
        createdAt: '13242',
        body: 'hello man',
        sentBy: 'bob',
        sentTo: 'corey',
      },
    ],
    susan: [],
    frank: [],
  }

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
