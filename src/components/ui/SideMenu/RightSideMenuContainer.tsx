import {
  Flex,
  Input,
  List,
  ListItem,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

export default function RightSideMenuContainer() {
  const bg = useColorModeValue('white', '#202020')

  return (
    <Flex
      pos="fixed"
      border="2px solid red"
      w="22vw"
      right={0}
      id="chat-container"
      dir="row"
      maxHeight="calc(100vh - 4.2rem);"
    >
      <VStack
        id="chat-display-container"
        borderRadius="sm"
        bg={bg}
        minW="340px"
        boxShadow="xs"
      >
        <Flex h="calc(100vh - 4.3rem);" w="full">
          <List>
            <ListItem>Hey</ListItem>
          </List>
        </Flex>
        <Flex w="full" id="chat-input-container">
          <Input />
        </Flex>
      </VStack>
    </Flex>
  )
}
