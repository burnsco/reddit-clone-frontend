import { ChakraField } from '@/components/common/index'
import { useAddFriendRequestMutation } from '@/generated/graphql'
import { useLoggedInUser } from '@/hooks/useLoggedInUser'
import convertToErrorMap from '@/utils/toErrorMap'
import { gql } from '@apollo/client'
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useColorModeValue,
  useToast,
  VisuallyHidden,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { FaUserFriends } from 'react-icons/fa'

export default function AddFriendPopOver() {
  const [loggedInUser] = useLoggedInUser()

  const bg = useColorModeValue('whitesmoke', 'gray.900')
  const toast = useToast()
  const buttonColor = useColorModeValue('purple', 'blue')

  const [addFriendRequest, { loading }] = useAddFriendRequestMutation()

  const initialFocusRef = React.useRef<HTMLButtonElement | null>(null)

  if (loading) return <VisuallyHidden>loading/adding friend</VisuallyHidden>

  return (
    <>
      <Popover
        initialFocusRef={initialFocusRef}
        placement="bottom"
        closeOnBlur={true}
      >
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <HStack>
                <FaUserFriends size="1.5em" />
              </HStack>
            </PopoverTrigger>
            <PopoverContent bg={bg}>
              <PopoverHeader pt={4} fontWeight="bold" border="0">
                Add Friend
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <Formik
                initialValues={{ username: '' }}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(false)
                  let response
                  try {
                    response = await addFriendRequest({
                      variables: {
                        data: {
                          username: values.username,
                        },
                      },
                      update(cache, { data }) {
                        if (loggedInUser && !data?.addFriendRequest.errors) {
                          cache.modify({
                            id: cache.identify(loggedInUser),
                            fields: {
                              friends(existingFriends = []) {
                                const newFriendRef = cache.writeFragment({
                                  data: data?.addFriendRequest.me,
                                  fragment: gql`
                                    fragment NewFriendRequest on User {
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
                        return null
                      },
                    })
                  } catch (ex: any) {
                    console.log(ex)
                  }
                  if (response?.data?.addFriendRequest.errors) {
                    actions.setErrors(
                      convertToErrorMap(response.data.addFriendRequest.errors)
                    )
                  }
                  if (
                    response &&
                    response.data &&
                    response.data.addFriendRequest &&
                    response.data.addFriendRequest.me &&
                    response.data.addFriendRequest.friend
                  ) {
                    const { friend } = response.data.addFriendRequest
                    toast({
                      id: `user-${friend.username}-added`,
                      title: 'Success',
                      description: `User '${friend.username}' is now your friend `,
                      status: 'success',
                      duration: 9000,
                      isClosable: true,
                    })
                    actions.resetForm()
                    onClose()
                  }
                }}
              >
                {({ isSubmitting }) => {
                  return (
                    <Form>
                      <PopoverBody>
                        <ChakraField
                          id="username"
                          name="username"
                          label="Username: "
                        />
                      </PopoverBody>

                      <PopoverFooter
                        border="0"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                      >
                        <Box fontSize="sm">
                          {isSubmitting ? 'searching...' : null}
                        </Box>
                        <ButtonGroup size="sm">
                          <Button onClick={onClose} colorScheme="red">
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            isLoading={isSubmitting}
                            colorScheme={buttonColor}
                            ref={initialFocusRef}
                          >
                            Confirm
                          </Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </Form>
                  )
                }}
              </Formik>
            </PopoverContent>
          </>
        )}
      </Popover>
    </>
  )
}
