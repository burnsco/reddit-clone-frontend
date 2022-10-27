import { useMyPrivateMessagesQuery } from '@/generated/graphql'
import { useLoggedInUser } from '@/hooks/useLoggedInUser'
import { Skeleton, Stack, Text, VisuallyHidden } from '@chakra-ui/react'
import Message from './PrivateMessage'

export default function UserMyPrivateMessages() {
  const [loggedInUser] = useLoggedInUser()
  const { data, loading } = useMyPrivateMessagesQuery()

  if (loading)
    return <VisuallyHidden>Loading your private messages</VisuallyHidden>

  console.log('user my private message')
  console.log(data)

  if (data && data.me?.privateMessages) {
    const { privateMessages } = data.me

    return (
      <Skeleton isLoaded={!loading}>
        <Stack>
          {privateMessages.map((message, index) => {
            const test = { message, loggedInUser }
            return <Message key={`message-${message.id}-${index}`} {...test} />
          })}
        </Stack>
      </Skeleton>
    )
  }

  return (
    <Stack>
      <Text>No messages yet 😊</Text>
    </Stack>
  )
}
