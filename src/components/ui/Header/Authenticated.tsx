import { NextChakraLink } from '@/components/common'
import Logo from '@/components/common/Logo'
import { useLogoutMutation } from '@/generated/graphql'
import { useLoggedInUser } from '@/hooks/useLoggedInUser'
import {
  Avatar,
  Box,
  ButtonGroup,
  chakra,
  Flex,
  HStack,
  IconButton,
  LinkBox,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import CreateCategoryDropDown from '../../common/CreateCategoryDropDown'
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
    <HStack px="4" border="2px solid red">
      <LinkBox
        data-testid="nav-logo"
        letterSpacing="wide"
        fontWeight="bold"
        fontFamily="Kanit"
        aria-label="Home Page Link"
      >
        <HStack>
          <chakra.span>SOCIAL</chakra.span>

          <Logo />
        </HStack>
      </LinkBox>
    </HStack>
  </NextChakraLink>
)

function HeaderIconsSection() {
  const router = useRouter()
  const [loggedInUser] = useLoggedInUser()
  const bg = useColorModeValue('white', '#202020')

  const [logout, { client }] = useLogoutMutation()
  return (
    <Box border="2px solid purple">
      <ButtonGroup>
        <DynamicChatRoomDrawer />
        <CreateCategoryDropDown />
        <DynamicCreateCategoryDrawer />
        <DynamicAddFriendDrawer />
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
          <MenuGroup title={loggedInUser?.username} color="lightsteelblue">
            <MenuDivider />
            <MenuItem onClick={() => router.push('/user')}>
              <FaUserCircle />
              <Box ml="2">Profile</Box>
            </MenuItem>
            <MenuItem onClick={() => router.push('/user/account')}>
              <MdSettings />
              <Box ml="2">Account</Box>
            </MenuItem>
            <MenuItem onClick={() => router.push('/user/account')}>
              <MdSettings />
              <Box ml="2">Friends</Box>
            </MenuItem>
            <MenuItem onClick={() => router.push('/user/messages')}>
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
    <Flex
      w="100%"
      h="100%"
      px="4"
      align="center"
      justify="space-around"
      border="2px solid pink"
    >
      <NavbarLogoSection />
      <NavigationMenu />
      <HeaderIconsSection />
    </Flex>
  )
}
