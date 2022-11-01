import { useCategoriesQuery } from '@/generated/graphql'
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BsArrowDown, BsArrowLeft } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'

export default function ChatMenu() {
  const router = useRouter()

  const { loading, data } = useCategoriesQuery()

  const bg = useColorModeValue('white', '#202020')

  const renderPath = () => {
    if (router && router.pathname) {
      if (router.pathname === '/') {
        return 'Home'
      } else if (!router.query.category) {
        return `${router.asPath}`
      } else {
        return `${router.query.category}`
      }
    }
    return 'Home'
  }

  const ChatMenuDisplay = () => (
    <Popover>
      <PopoverTrigger>
        <Button w="full">Trigger</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent w="100vw" h="60vh">
          <PopoverArrow />
          <PopoverHeader>list of categories</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>chat body</PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )

  const NavigationDisplay = () => (
    <Flex w="full" border="2px solid blue">
      <Menu closeOnSelect={true} matchWidth>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              fontSize="sm"
              textAlign="left"
              w="full"
              leftIcon={<FaHome />}
              rightIcon={isOpen ? <BsArrowDown /> : <BsArrowLeft />}
              variant="outline"
            >
              {renderPath()}
            </MenuButton>
            {data && data.categories && (
              <MenuList minH="50vh" minWidth="240px" opacity="0.7" bg={bg}>
                {data.categories.map((item, i) => (
                  <MenuItem
                    value={item.name}
                    key={`subreddit-center-menu-${item.id}-${i}`}
                    onClick={() => router.push(`/r/${item.name}`)}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            )}
          </>
        )}
      </Menu>
    </Flex>
  )

  if (!loading) {
    return <ChatMenuDisplay />
  }
  return null
}
