import ChatField from '@/components/common/Forms/ChatField'
import { useCreateMessageMutation } from '@/generated/graphql'
import { useCurrentLocation } from '@/hooks/useCurrentLocation'
import { HStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'

export default function SideMenuChatInput() {
  const { currentLocation } = useCurrentLocation()
  const [submitMessage] = useCreateMessageMutation()

  const handleSubmitMessage = async (values: any, actions: any) => {
    const response = await submitMessage({
      variables: {
        data: {
          categoryName: currentLocation,
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
            autoComplete="off"
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
