import UserMenuIconAvatar from '@/components/common/UserMenuIconAvatar'
import { timeDifferenceForDate } from '@/utils/index'
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaUserCircle } from 'react-icons/fa'
import { OfflineCircle, OnlineCircle } from '../OnlineOffline'

export default function PrivateMessage(data: any) {
  const { message, loggedInUser } = data
  console.log(`logged in user`)
  console.log(loggedInUser)

  console.log('priv message')
  console.log(message)

  const bg = useColorModeValue('white', '#202020')
  const stackColor = useColorModeValue('gray.600', 'gray.400')
  const router = useRouter()
  const huh = useColorModeValue('darkblue', 'lightblue')
  const votebg = useColorModeValue('gray.50', '#313131')

  const createdBy = message?.sentBy?.username
  const isOnline = message?.sentBy?.online
  const updatedTime = Number(message?.updatedAt)

  return (
    <Flex bg={bg} minH="80px" width="100%">
      {/* Vote Box Container (Left Aside) */}
      <Box bg={votebg}>
        <Flex
          width="45px"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          p="2"
          height="100%"
        >
          <UserMenuIconAvatar />
        </Flex>
      </Box>

      {/* Message Details Container (HEADER) */}
      <Box
        p={2}
        ml="1"
        minH="80px"
        width="100%"
        display="flex"
        flexDir="column"
      >
        <Stack fontSize="xs" color={stackColor}>
          <Box textDecoration="none" mb={2}>
            Message sent by
            <Menu>
              <Button ml={2} size="xs" variant="outline" as={MenuButton}>
                {createdBy}
                {isOnline ? <OnlineCircle /> : <OfflineCircle />}
              </Button>

              <MenuList opacity="0.7" bg={bg}>
                <MenuGroup color="lightsteelblue">
                  <MenuItem
                    onClick={() =>
                      router.push(`/user/${message?.sentBy.username}`)
                    }
                  >
                    <FaUserCircle />
                    <Box ml={3}>Profile</Box>
                  </MenuItem>
                  <MenuDivider />
                </MenuGroup>
              </MenuList>
            </Menu>
            <Box
              display="inline"
              color={huh}
              ml="1"
              _hover={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            ></Box>
            <Box display="inline" ml="2">
              {timeDifferenceForDate(updatedTime)}
            </Box>
          </Box>
        </Stack>
        {/* Message Body Container (Text) */}
        <Box p={1}>
          <Text>{message?.body}</Text>
        </Box>
      </Box>
    </Flex>
  )
}
