import { Layout } from '@/components/ui/index'
import { Heading, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import { useMyPrivateMessagesQuery } from '../../../generated/graphql'

export default function UserPage() {
  const { data, loading } = useMyPrivateMessagesQuery()
  const bg = useColorModeValue('white', '#1A1A1B')

  if (loading)
    return <VisuallyHidden>Loading your private messages</VisuallyHidden>

  console.log(data)

  if (!loading && data && data.myPrivateMessages) {
    return (
      <Layout title="private messages">
        <Heading padding="5"> my private messages</Heading>
        {/* <Box bg={bg}>
        <Heading>User</Heading>
        <Text>Username: {data?.me?.username} </Text>
        <Text>Email: {data?.me?.email}</Text>
        <Text>About Me: {data?.me?.about}</Text>
        {data && data?.me?.avatar ? (
          <Avatar src={data?.me.avatar} />
        ) : (
          <Text>No Avatar Yet</Text>
        )}
      </Box> */}
      </Layout>
    )
  }
  return null
}
