import { useLogoutMutation } from '@/generated/graphql'
import { useLoggedInUser } from '@/hooks/useLoggedInUser'
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'

export default function HeaderIconsSection() {
  const router = useRouter()
  const [loggedInUser] = useLoggedInUser()
  const bg = useColorModeValue('white', '#202020')

  const [logout, { client }] = useLogoutMutation()
  return (
    <>
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
    </>
  )
}
