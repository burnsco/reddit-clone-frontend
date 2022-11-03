import { useCategoriesQuery } from '@/generated/graphql'
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsArrowDown, BsArrowLeft } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'

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
  const NavigationDisplay = () => (
    <Menu closeOnSelect={true} matchWidth>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            mr={4}
            flex="0 1 328px"
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
            <MenuList minWidth="240px" opacity="0.7" bg={bg}>
              {data.categories.map((item, i) => (
                <MenuItem
                  as={Link}
                  href={`/r/${item.name}`}
                  value={item.name}
                  key={`subreddit-center-menu-${item.id}-${i}`}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          )}
        </>
      )}
    </Menu>
  )
  if (!loading) {
    return <NavigationDisplay />
  }
  return null
}
