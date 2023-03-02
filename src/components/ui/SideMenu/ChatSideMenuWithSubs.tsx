import RightSideMenuContainer from '@/components/ui/SideMenu/RightSideMenuContainer'
import {
  CategoryChatSubDocument,
  useChatRoomMessagesQuery,
} from '@/generated/graphql'
import { useCurrentLocation } from '@/hooks/useCurrentLocation'
import { Alert } from '@chakra-ui/react'

export default function ChatSideMenuWithSubs() {
  const { currentLocationId } = useCurrentLocation()
  const { subscribeToMore, ...result } = useChatRoomMessagesQuery({
    variables: { categoryName: 'react' },
  })

  if (!result.loading) {
    return (
      <RightSideMenuContainer
        {...result}
        handleSubscription={() =>
          subscribeToMore({
            document: CategoryChatSubDocument,
            variables: { categoryName: 'react' },
            updateQuery: (prev: any, { subscriptionData }: any) => {
              if (!subscriptionData.data) return prev
              const newFeedItem = subscriptionData.data.newMessage
              return {
                ...prev,
                messages: [newFeedItem, { ...prev.messages }],
              }
            },
          })
        }
      />
    )
  }
  return <Alert>No Chat Yet</Alert>
}
