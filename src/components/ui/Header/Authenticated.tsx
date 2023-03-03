import { NextChakraLink } from '@/components/common'
import AddFriendPopOver from '@/components/common/AddFriendPopOver'
import Logo from '@/components/common/Logo'
import { useLogoutMutation } from '@/generated/graphql'
import {
  Avatar,
  Box,
  ButtonGroup,
  chakra,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import NavigationMenu from './NavigationMenu'

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
    <HStack px="1" id="start">
      <HStack
        px="1"
        letterSpacing="wide"
        fontWeight="bold"
        fontFamily="Kanit"
        aria-label="Home Page Link"
      >
        <chakra.span
          fontSize="xl"
          display={{ base: 'none', sm: 'none', md: 'flex' }}
        >
          SOCIAL
        </chakra.span>
        <Logo />
      </HStack>
    </HStack>
  </NextChakraLink>
)

function HeaderUserMenu() {
  const router = useRouter()

  const bg = useColorModeValue('white', '#202020')

  const [logout, { client }] = useLogoutMutation()

  return (
    <Menu isLazy>
      <IconButton
        as={MenuButton}
        variant="ghost"
        aria-label="Create a Subreddit"
        icon={
          <Avatar
            size="sm"
            name="Ryan Florence"
            src={'https://bit.ly/ryan-florence'}
          />
        }
        size="md"
      />

      <MenuList m={0} opacity="0.7">
        <MenuGroup title={'user menu'}>
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
  )
}

function HeaderIconsSection() {
  return (
    <ButtonGroup spacing={[2, 4, 8]}>
      <DynamicCreatePostDrawer />
      <DynamicCreateCategoryDrawer />
      <AddFriendPopOver />
    </ButtonGroup>
  )
}

export default function AuthenticatedHeader() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  return (
    <>
      <NavbarLogoSection />
      <Flex flexGrow={2} justify="center" id="center">
        <NavigationMenu />
      </Flex>
      <HStack id="end">
        <HeaderIconsSection />
        <Flex px="2">
          <HeaderUserMenu />
          <Box px="1">
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </Box>
        </Flex>
      </HStack>
    </>
  )
}
