import { CommentQuery, useAddFriendRequestMutation } from '@/generated/graphql'
import { useLoggedInUser } from '@/hooks/useLoggedInUser'
import { timeDifferenceForDate } from '@/utils/index'
import { gql } from '@apollo/client'
import {
  Box,
  Button,
  Flex,
  IconButton,
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
import { useState } from 'react'
import { BsLightning, BsLightningFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { IoAddCircle } from 'react-icons/io5'
import { MdEmail, MdMessage } from 'react-icons/md'
import { OfflineCircle, OnlineCircle } from '../OnlineOffline'

export default function CommentPage(props: CommentQuery) {
  const [loggedInUser] = useLoggedInUser()
  const [addFriendRequest, { loading }] = useAddFriendRequestMutation()

  const bg = useColorModeValue('white', '#202020')
  const stackColor = useColorModeValue('gray.600', 'gray.400')
  const router = useRouter()
  const huh = useColorModeValue('darkblue', 'lightblue')
  const votebg = useColorModeValue('gray.50', '#313131')

  const [liked, setLiked] = useState(false)

  const { comment } = props
  const commentId = comment?.id
  const createdBy = comment?.createdBy?.username
  const isOnline = comment?.createdBy?.online
  const updatedTime = Number(comment?.updatedAt)

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
          <IconButton
            onClick={() => setLiked(!liked)}
            variant="ghost"
            color="current"
            aria-label="UpVote"
            icon={
              !liked ? (
                <BsLightning size="2em" />
              ) : (
                <BsLightningFill size="2em" />
              )
            }
          />
        </Flex>
      </Box>

      {/* Comment Details Container (HEADER) */}
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
            Comment by
            <Menu>
              <Button ml={2} size="xs" variant="outline" as={MenuButton}>
                {createdBy}
                {isOnline ? <OnlineCircle /> : <OfflineCircle />}
              </Button>

              <MenuList opacity="0.7" bg={bg}>
                <MenuGroup color="lightsteelblue">
                  <MenuItem
                    onClick={() =>
                      router.push(`/user/${comment?.createdBy.username}`)
                    }
                  >
                    <FaUserCircle />
                    <Box ml={3}>Profile</Box>
                  </MenuItem>
                  <MenuDivider />
                </MenuGroup>
                <MenuItem
                  onClick={async () => {
                    let response
                    try {
                      response = await addFriendRequest({
                        variables: {
                          data: {
                            username: comment?.createdBy.username,
                          },
                        },
                        update(cache, { data }) {
                          if (loggedInUser) {
                            cache.modify({
                              id: cache.identify(loggedInUser),
                              fields: {
                                friends(existingFriends = []) {
                                  const newFriendRef = cache.writeFragment({
                                    data: data?.addFriendRequest.me,
                                    fragment: gql`
                                      fragment NewFriend on User {
                                        id
                                        username
                                        online
                                      }
                                    `,
                                  })
                                  return [newFriendRef, ...existingFriends]
                                },
                              },
                            })
                          }
                          throw new Error(
                            'Something went wrong adding a friend'
                          )
                        },
                      })
                    } catch (ex: any) {
                      console.log(ex)
                    }
                  }}
                >
                  <IoAddCircle />
                  <Box ml={3}>Add to Friends</Box>
                </MenuItem>
                <MenuItem>
                  <MdEmail />
                  <Box ml={3}>Message</Box>
                </MenuItem>
                <MenuItem>
                  <MdMessage />
                  <Box ml={3}>Chat</Box>
                </MenuItem>
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
        {/* Comment Body Container (Text) */}
        <Box p={1}>
          <Text>{comment?.body}</Text>
        </Box>
      </Box>
    </Flex>
  )
}
