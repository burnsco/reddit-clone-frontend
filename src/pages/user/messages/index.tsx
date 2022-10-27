import { Container } from '@/components/common'
import UserMyPrivateMessages from '@/components/common/User/myPrivateMessages'
import { Layout } from '@/components/ui'

import { useMyPrivateMessagesQuery } from '@/generated/graphql'
import { Heading, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'

export default function UserPrivateMessagesPage() {
  const { data, loading } = useMyPrivateMessagesQuery()
  const bg = useColorModeValue('white', '#1A1A1B')

  if (loading)
    return <VisuallyHidden>Loading your private messages</VisuallyHidden>

  console.log(data)

  return (
    <Layout title="My Profile">
      <Container>
        <Heading>private messages</Heading>
        <UserMyPrivateMessages />
      </Container>
    </Layout>
  )
}
