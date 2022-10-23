import { useNewPrivateMessageSubscription } from '@/generated/graphql'

function useNewUserNotification() {
  const { data } = useNewPrivateMessageSubscription()

  if (data && data.newPrivateMessage) {
    const messageBody = data.newPrivateMessage.body
    return messageBody
  }
  return null
}

export default useNewUserNotification
