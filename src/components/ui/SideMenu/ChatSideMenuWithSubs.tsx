import RightSideMenuContainer from '@/components/ui/SideMenu/RightSideMenuContainer'
import {
  CategoryChatSubDocument,
  useChatRoomMessagesQuery,
} from '@/generated/graphql'
import { selectedChatRoomId } from '@/lib/apolloClient'
import { useReactiveVar } from '@apollo/client'
import { Alert } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function ChatSideMenuWithSubs() {
  const router = useRouter()

  // todo fix this up later, just trying to get a "main page" chat going
  console.log('use router chat menu')
  console.log(router)

  let selectedCategoryId = useReactiveVar(selectedChatRoomId)

  if (router.asPath === '/') {
    selectedCategoryId = '9d3461c6-3358-42a0-8461-ec272575bc4f'
  }

  const { subscribeToMore, ...result } = useChatRoomMessagesQuery({
    variables: { categoryId: selectedCategoryId },
  })

  if (subscribeToMore !== undefined) {
    return (
      <RightSideMenuContainer
        {...result}
        handleSubscription={() =>
          subscribeToMore({
            document: CategoryChatSubDocument,
            variables: { categoryId: selectedCategoryId },
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
