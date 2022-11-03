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
      id="chat-container"
      border="2px dashed orange"
      dir="row"
      maxHeight="calc(100vh - 4.2rem);"
    >
      <VStack
        border="2px dotted white"
        id="chat-display-container"
        borderRadius="sm"
        bg={bg}
        minW="340px"
        boxShadow="xs"
      >
        <Flex border="2px solid red" h="calc(100vh - 4.3rem);" w="full">
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
