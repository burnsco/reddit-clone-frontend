import { Layout } from '@/components/ui/index'
import { useMeQuery } from '@/generated/graphql'
import {
  Avatar,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'

export default function UserPage() {
  const { data, loading } = useMeQuery()
  const bg = useColorModeValue('white', '#1A1A1B')

  if (loading) return <VisuallyHidden>Loading your profile</VisuallyHidden>

  return (
    <Layout title="Me">
      <Container bg={bg}>
        <Heading>User</Heading>
        <Text>Username: {data?.me?.username} </Text>
        <Text>Email: {data?.me?.email}</Text>
        <Text>About Me: {data?.me?.about}</Text>
        {data && data?.me?.avatar ? (
          <Avatar src={data?.me.avatar} />
        ) : (
          <Text>No Avatar Yet</Text>
        )}
      </Container>
    </Layout>
  )
}
