import {
  Box,
  Code,
  Divider,
  Flex,
  Input,
  List,
  ListItem,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import { useEffect, useRef, useState } from 'react'

function seedMessages(amount: number) {
  const messages = []
  for (let i = 0; i <= amount; i++) {
    messages.push({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      body: faker.random.words(12),
      createdAt: faker.datatype.datetime(),
    })
  }
  return messages
}

const messagesAmount = 20
const newMessagesInterval = 5

export default function RightSideMenuContainer() {
  const [messages, setMessages] = useState(seedMessages(messagesAmount))
  const bg = useColorModeValue('white', '#0e0e10')

  console.log('MESSAEGS TEST')
  console.log(messages)

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <Flex
      id="right-side-container"
      pos="fixed"
      border="2px dashed white"
      w="34rem"
      right={1}
      dir="row"
      h="auto"
      boxSizing="content-box"
      height="auto"
      bg="gray.800"
      maxHeight="calc(100vh - 4.2rem);"
    >
      <VStack
        id="chat-display-container"
        bg={bg}
        boxShadow="xs"
        h="calc(100vh - 4.5rem);"
      >
        <Flex border="1px dotted red" overflowY="auto">
          <List mt={2} spacing={4}>
            {messages.map((message: any) => (
              <ListItem key={message.id}>
                <Stack direction="row">
                  <Code>{message.username}</Code>
                  <Divider orientation="vertical" colorScheme="orange" />
                  <Box>{message.body}</Box>
                </Stack>
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Flex>
        <Flex w="full" id="chat-input-container">
          <Input />
        </Flex>
      </VStack>
    </Flex>
  )
}
