import ChatField from '@/components/common/Forms/ChatField'
import { useCreateMessageMutation } from '@/generated/graphql'
import { selectedChatRoomId, selectedChatRoomName } from '@/lib/apolloClient'
import { useReactiveVar } from '@apollo/client'
import { HStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'

export default function SideMenuChatInput() {
  const selectedCategoryId = useReactiveVar(selectedChatRoomId)
  const chatName = useReactiveVar(selectedChatRoomName)
  const [submitMessage] = useCreateMessageMutation()

  const router = useRouter()
  const { category } = router.query

  let categoryName = category

  if (router.asPath === '/') {
    categoryName = 'general'
  }

  const handleSubmitMessage = async (values: any, actions: any) => {
    const response = await submitMessage({
      variables: {
        data: {
          categoryName: categoryName as string,
          content: values.content,
        },
      },
    })
    console.log('handle submit message')
    console.log(response)
    actions.resetForm()
    return response
  }

  return (
    <HStack w="full" border="2px solid white">
      <Formik initialValues={{ content: '' }} onSubmit={handleSubmitMessage}>
        <Form>
          <ChatField
            label=""
            id="content"
            name="content"
            placeholder="chat here..."
          />
        </Form>
      </Formik>
    </HStack>
  )
}
