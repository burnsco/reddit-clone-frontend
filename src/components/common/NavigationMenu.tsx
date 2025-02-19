import { useCategoriesQuery } from '@/generated/graphql'
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BsArrowDown, BsArrowLeft } from 'react-icons/bs'
import { FaHome, FaSearch } from 'react-icons/fa'

export default function NavigationMenu() {
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

  const SearchNavigationTest = () => (
    <Flex flexGrow={2}>
      <InputGroup size="md" maxW="md">
        <Input placeholder="Search" variant="filled" />

        <IconButton
          variant="outline"
          color="#5e45a5"
          aria-label="Search Site"
          fontSize="20px"
          icon={<FaSearch />}
        />
      </InputGroup>
    </Flex>
  )

  const NavigationDisplay = () => (
    <Flex flexGrow={2} mr={1}>
      <Menu closeOnSelect={true} matchWidth>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              mr={4}
              maxW="280px"
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
              <MenuList
                maxHeight="calc(100vh - 4rem - (1rem + 4vh));"
                overflowY="auto"
                minWidth="240px"
                opacity="0.7"
                bg={bg}
              >
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
    return <NavigationDisplay />
  }
  return null
}
