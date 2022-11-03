import ChatInput from '@/components/common/Drawers/Chat/ChatInput'
import { Message, useMeQuery } from '@/generated/graphql'
import {
  Box,
  Code,
  Divider,
  Flex,
  List,
  ListItem,
  Skeleton,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

export default function RightSideMenuContainer(props: any) {
  const { handleSubscription } = props
  const { data, loading } = props

  const { data: meData } = useMeQuery()

  useEffect(() => {
    handleSubscription()
  })

  const router = useRouter()

  const { category } = router.query

  const bg = useColorModeValue('white', '#0e0e10')

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [data])

  if (!loading && data && data.messages) {
    return (
      <Flex
        id="right-side-container"
        pos="fixed"
        border="2px dashed white"
        w="340px"
        right={1}
        dir="row"
        h="auto"
        boxSizing="content-box"
        height="auto"
        bg="gray.800"
        maxHeight="calc(100vh - 4.2rem);"
      >
        <Skeleton isLoaded={!loading}>
          <VStack
            id="chat-display-container"
            bg={bg}
            boxShadow="xs"
            h="calc(100vh - 4.2rem);"
          >
            <Flex border="1px dotted red" h="full" w="full" overflowY="auto">
              <List mt={2} spacing={4}>
                {data.messages.map((message: Message) => {
                  return (
                    <ListItem key={message.id}>
                      <Stack direction="row">
                        <Code>{message.sentBy.username}</Code>
                        <Divider orientation="vertical" colorScheme="orange" />
                        <Box>{message.content}</Box>
                      </Stack>
                    </ListItem>
                  )
                })}

                <div ref={messagesEndRef} />
              </List>
            </Flex>
            {/* <Flex
          dir="row"
          w="full"
          id="chat-input-container"
          border="2px solid red"
        >
          <Input size="lg" bg="#464649" />
          <Button>Hello</Button>
        </Flex> */}
            <ChatInput />
          </VStack>
        </Skeleton>
      </Flex>
    )
  }
}
