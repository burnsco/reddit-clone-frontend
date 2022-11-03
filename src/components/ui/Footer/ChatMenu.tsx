import ChatDisplaySub from '@/components/ui/Footer/ChatDisplaySub'
import { useCategoriesQuery } from '@/generated/graphql'
import { selectedChatRoomId, selectedChatRoomName } from '@/lib/apolloClient'
import { useReactiveVar } from '@apollo/client'
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsArrowDown, BsArrowLeft } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import ChatInput from './ChatInput'

export default function ChatMenu() {
  const [tabIndex, setTabIndex] = useState(0)
  const router = useRouter()

  const categories = ['test', 'going', 'after', 'others']

  const chatID = useReactiveVar(selectedChatRoomId)
  const chatName = useReactiveVar(selectedChatRoomName)

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

  console.log(tabIndex)
  selectedChatRoomName('react')

  const ChatMenuDisplay = () => (
    <Popover gutter={1} arrowPadding={1}>
      <PopoverTrigger>
        <Button w="full">Trigger</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent w="95vw" h="600px">
          <Tabs
            onChange={(e) => {
              console.log(e)
            }}
            h="100%"
          >
            <PopoverHeader>
              <TabList border="none">
                {categories.map((item, i) => (
                  <Tab key={`chat room tab-${item}`}>{item}</Tab>
                ))}
              </TabList>
            </PopoverHeader>
            <PopoverCloseButton />
            <TabPanels h="500px" w="full">
              <PopoverBody w="full" h="50%">
                <TabPanel w="full" h="50%">
                  <ChatDisplaySub />
                </TabPanel>
              </PopoverBody>
            </TabPanels>

            <PopoverFooter p="0">
              <ChatInput />
            </PopoverFooter>
          </Tabs>
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
