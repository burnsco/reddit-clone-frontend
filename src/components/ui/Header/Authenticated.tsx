import { NextChakraLink } from '@/components/common'
import AddFriendPopOver from '@/components/common/AddFriendPopOver'
import Logo from '@/components/common/Logo'
import { useLogoutMutation } from '@/generated/graphql'
import { useLoggedInUser } from '@/hooks/useLoggedInUser'
import {
  Avatar,
  Box,
  ButtonGroup,
  chakra,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import NavigationMenu from './NavigationMenu'

const DynamicChatRoomDrawer = dynamic(
  () => import('@/components/common/Drawers/Chat')
)

const DynamicCreateCategoryDrawer = dynamic(
  () => import('@/components/common/Drawers/CreateSubreddit')
)

const DynamicCreatePostDrawer = dynamic(
  () => import('@/components/common/Drawers/CreatePost')
)

const DynamicAddFriendDrawer = dynamic(
  () => import('@/components/common/Drawers/AddFriend')
)

export const NavbarLogoSection = () => (
  <NextChakraLink href="/" as={`/`}>
    <HStack px="1">
      <HStack
        px="1"
        letterSpacing="wide"
        fontWeight="bold"
        fontFamily="Kanit"
        aria-label="Home Page Link"
      >
        <chakra.span display={{ base: 'none', sm: 'none', md: 'flex' }}>
          SOCIAL
        </chakra.span>
        <Logo />
      </HStack>
    </HStack>
  </NextChakraLink>
)

function HeaderIconsSection() {
  const router = useRouter()
  const [loggedInUser] = useLoggedInUser()
  const bg = useColorModeValue('white', '#202020')

  const [logout, { client }] = useLogoutMutation()
  return (
    <Box border="1px dotted white">
      <ButtonGroup spacing={[2, 4, 8]}>
        <DynamicChatRoomDrawer />
        <DynamicCreatePostDrawer />
        <DynamicCreateCategoryDrawer />
        <AddFriendPopOver />
      </ButtonGroup>

      <Menu isLazy>
        <IconButton
          as={MenuButton}
          variant="ghost"
          aria-label="Create a Subreddit"
          icon={
            <Avatar
              size="xs"
              name="Ryan Florence"
              src={loggedInUser?.avatar || 'https://bit.ly/ryan-florence'}
            />
          }
          size="md"
        />

        <MenuList m={0} opacity="0.7" bg={bg}>
          <MenuGroup
            title={loggedInUser?.username || 'user menu'}
            color="lightsteelblue"
          >
            <MenuDivider />
            <MenuItem as={Link} href="/user/profile">
              <FaUserCircle />
              <Box ml="2">Profile</Box>
            </MenuItem>
            <MenuItem as={Link} href="/user/account">
              <MdSettings />
              <Box ml="2">Account</Box>
            </MenuItem>
            <MenuItem as={Link} href="/user/friends">
              <MdSettings />
              <Box ml="2">Friends</Box>
            </MenuItem>
            <MenuItem as={Link} href="/user/messagesa">
              <MdSettings />
              <Box ml="2">Messages</Box>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem
              onClick={async () => {
                await logout()
                await client.resetStore()
                await router.push('/')
              }}
            >
              <AiOutlineLogout />
              <Box ml="2">Logout</Box>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default function AuthenticatedHeader() {
  return (
    <>
      <NavbarLogoSection />
      <NavigationMenu />
      <HeaderIconsSection />
    </>
  )
}
