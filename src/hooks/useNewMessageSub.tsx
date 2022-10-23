import { useCategoryChatSubSubscription } from '@/generated/graphql'

function useNewChatMessageNotication(categoryId: string) {
  const { data } = useCategoryChatSubSubscription({ variables: { categoryId } })

  if (data?.newMessage) {
    return data?.newMessage
  }
  return null
}

export default useNewChatMessageNotication
