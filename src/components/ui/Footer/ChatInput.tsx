import ChatField from '@/components/common/Forms/ChatField'
import { useCreateMessageMutation } from '@/generated/graphql'
import { selectedChatRoomId } from '@/lib/apolloClient'
import { useReactiveVar } from '@apollo/client'
import { Box, HStack, useColorModeValue, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'

export default function ChatInput() {
  const submitButtonColor = useColorModeValue('purple', 'blue')

  const selectedCategoryId = useReactiveVar(selectedChatRoomId)
  const [submitMessage] = useCreateMessageMutation()

  const handleSubmitMessage = async (values: any, actions: any) => {
    const response = await submitMessage({
      variables: {
        data: {
          categoryName: values.categoryName,
          content: values.content,
          categoryId: selectedCategoryId,
        },
      },
    })

    actions.resetForm()
    return response
  }

  return (
    <Box border="1px dotted blue" p="0">
      <Formik initialValues={{ content: '' }} onSubmit={handleSubmitMessage}>
        <Form>
          <VStack h="full" w="full">
            <HStack w="full">
              <ChatField
                label=""
                id="content"
                name="content"
                placeholder="chat here..."
              />
            </HStack>
          </VStack>
        </Form>
      </Formik>
    </Box>
  )
}
