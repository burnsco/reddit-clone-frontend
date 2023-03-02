import SideMenuChatInput from '@/components/ui/SideMenu/ChatInput'
import { Message } from '@/generated/graphql'
import {
  Box,
  Code,
  Flex,
  List,
  ListItem,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

export default function RightSideMenuContainer(props: any) {
  const { handleSubscription } = props
  const { data, loading } = props

  console.log('INSIDE THE RIGHT SIDE MENU CONTAINER')
  console.log(props)

  useEffect(() => {
    handleSubscription()
  })
  const bg = useColorModeValue('white', '#0e0e10')
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    scrollToBottom()
  }, [data])

  console.log('RightSideMenuContainer')
  console.log(data)

  if (!loading && data && data.messages) {
    return (
      <Flex
        id="right-side-container"
        pos="fixed"
        border="2px dashed white"
        w="21rem"
        right={1}
        dir="row"
        h="auto"
        boxSizing="content-box"
        height="auto"
        bg="gray.800"
        maxHeight="calc(100vh - 4.2rem);"
      >
        <VStack
          w="21rem"
          id="chat-display-container"
          bg={bg}
          boxShadow="xs"
          h="calc(100vh - 4.2rem);"
        >
          <Flex border="1px dotted red" h="full" w="full" overflowY="auto">
            <List mt={2} spacing={2}>
              {data.messages.map((message: Message) => {
                return (
                  <ListItem key={message.id}>
                    <Stack direction="row">
                      <Box>
                        <Code>{message.sentBy.username}</Code>
                      </Box>

                      <Box>{message.content}</Box>
                    </Stack>
                  </ListItem>
                )
              })}

              <div ref={messagesEndRef} />
            </List>
          </Flex>

          <SideMenuChatInput />
        </VStack>
      </Flex>
    )
  }
  return <div>loading...</div>
}
