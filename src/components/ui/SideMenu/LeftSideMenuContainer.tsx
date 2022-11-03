import {
  Flex,
  Input,
  List,
  ListItem,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

export default function LeftSideMenuContainer() {
  const bg = useColorModeValue('white', '#202020')

  return (
    <Flex
      id="chat-container"
      dir="row"
      pos="fixed"
      maxHeight="calc(100vh - 4.2rem);"
    >
      <VStack
        id="chat-display-container"
        borderRadius="sm"
        bg={bg}
        minW="256px"
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
