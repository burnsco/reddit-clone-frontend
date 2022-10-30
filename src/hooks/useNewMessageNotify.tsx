import { useNewUserSubscription } from '@/generated/graphql'

function useNewMessageNotification() {
  const { data } = useNewUserSubscription()

  if (data && data.newUser) {
    const user = data.newUser.username
    return user
  }
  return null
}

export default useNewMessageNotification
