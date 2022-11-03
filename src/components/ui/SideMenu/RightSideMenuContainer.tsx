import {
  Avatar,
  Box,
  Code,
  Divider,
  Flex,
  Input,
  List,
  ListItem,
  Spacer,
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
      body: faker.random.words(5),
      createdAt: faker.datatype.datetime(),
    })
  }
  return messages
}

const messagesAmount = 20

export default function RightSideMenuContainer() {
  const [messages, setMessages] = useState(seedMessages(messagesAmount))
  const bg = useColorModeValue('white', '#202020')

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
      border="2px solid white"
      w="34rem"
      right={1}
      dir="row"
      h="auto"
      overflowY="auto"
      height="auto"
      bg="gray.800"
      maxHeight="calc(100vh - 4.2rem);"
    >
      <VStack id="chat-display-container" bg={bg} boxShadow="xs">
        <Flex h="calc(100vh - 4.3rem);">
          <List mt={2} spacing={4}>
            {messages.map((message: any) => (
              <ListItem key={message.id}>
                <Stack h="100%" direction="row">
                  <Avatar
                    size="xs"
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                    mr={3}
                  />
                  <Code>{message.username}</Code>
                  <Divider orientation="vertical" colorScheme="orange" />
                  <Box>{message.body}</Box>
                  <Spacer />
                  <Box>{new Date(message.createdAt).toLocaleTimeString()}</Box>
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
