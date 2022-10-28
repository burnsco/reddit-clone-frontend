import { InputField } from '@/components/common/index'
import { useSendPrivateMessageMutation } from '@/generated/graphql'
import CreateCommentSchema from '@/types/Comment/schemas'
import { sleep } from '@/utils/sleepy'
import { Box, Button, useColorModeValue, useToast } from '@chakra-ui/react'
import { Form, Formik } from 'formik'

export default function SendPrivateMessageForm() {
  const buttomScheme = useColorModeValue('purple', 'orange')
  const bg = useColorModeValue('white', '#202020')
  const hoverBc = useColorModeValue('gray.200', 'gray.600')
  const toast = useToast()

  const [sendMessage, { loading, error }] = useSendPrivateMessageMutation()

  return (
    <Box
      bg={bg}
      borderWidth="1px"
      rounded="md"
      p={3}
      _hover={{
        boxShadow: 'lg',
        borderWidth: '1px',
        borderColor: hoverBc,
      }}
    >
      <Formik
        initialValues={{ body: '', userId: '' }}
        validationSchema={CreateCommentSchema}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(false)
          sleep(1000)
          const response = await sendMessage({
            variables: {
              data: {
                body: values.body,
                userId: values.userId,
              },
            },
          })
          if (!response.errors) {
            toast({
              id: `${response.data?.sendPrivateMessage}-toast`,
              title: 'Your comment was posted successfully.',
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
            actions.resetForm()
          }
        }}
      >
        {(formik) => (
          <Form>
            <InputField id="body" name="body" label="" textarea />
            <Button
              borderTopLeftRadius="none"
              borderBottomLeftRadius="lg"
              mt={1}
              size="sm"
              colorScheme={buttomScheme}
              isLoading={loading || formik.isSubmitting}
              isDisabled={loading || formik.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      {error &&
        toast({
          id: 'error',
          title: 'An error occurred.',
          description: 'There was an error trying to submit your comment',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })}
    </Box>
  )
}
