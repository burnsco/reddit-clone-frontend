import { NextChakraLink } from '@/components/common/index'
import { useMyFriendsQuery } from '@/generated/graphql'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  Badge,
  Box,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ImSpinner } from 'react-icons/im'

export default function FriendsSideMenuAccordion() {
  const bg = useColorModeValue('white', '#202020')
  const router = useRouter()
  const color = useColorModeValue('gray.700', 'gray.300')
  const hover = useColorModeValue('black', 'white')

  const linkbg = useColorModeValue('#ebedf0', '#3661ed')

  const { data, loading, error } = useMyFriendsQuery()

  const FriendsCount = () => {
    if (
      data?.me?.friends &&
      data?.me?.friends &&
      data?.me?.friends.length > 0
    ) {
      const count = data.me.friends.length
      return (
        <Badge ml={1} colorScheme="orange">
          {count}
        </Badge>
      )
    }
    return null
  }

  if (error) return <Alert>Error loading Subreddits</Alert>

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" fontWeight="semibold" textAlign="left">
            FRIENDS <FriendsCount />
          </Box>
          {!loading ? <AccordionIcon /> : <ImSpinner />}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List mt={2} spacing={3}>
          {data && data?.me?.friends ? (
            <>
              {data.me.friends.map((friend) => {
                return (
                  <ListItem key={`friends-list-${friend.id}`}>
                    <NextChakraLink
                      p={1}
                      fontWeight="400"
                      color={color}
                      href="/user/[username]"
                      as={`/user/${friend.username}`}
                    >
                      <Badge
                        mr={2}
                        colorScheme={friend.online ? 'green' : 'red'}
                      >
                        {friend.online ? 'online' : 'offline'}
                      </Badge>

                      {friend.username}
                    </NextChakraLink>
                  </ListItem>
                )
              })}
            </>
          ) : (
            <ListItem>you have no friends yet 😛 </ListItem>
          )}
        </List>
      </AccordionPanel>
    </AccordionItem>
  )
}
