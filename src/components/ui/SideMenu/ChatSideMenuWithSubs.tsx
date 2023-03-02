import RightSideMenuContainer from '@/components/ui/SideMenu/RightSideMenuContainer'
import {
  CategoryChatSubDocument,
  useChatRoomMessagesQuery,
} from '@/generated/graphql'
import { Alert } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function ChatSideMenuWithSubs(props: any) {
  const router = useRouter()

  // todo fix this up later, just trying to get a "main page" chat going
  console.log('use router chat menu')
  console.log(router)

  let selectedCategoryId = router.query.category as string

  if (router.asPath === '/') {
    selectedCategoryId = 'edf64136-0e90-4014-b4d2-b83b54707a1c'
  }

  console.log('SIDE MENU DISPLAY')
  console.log(selectedCategoryId)

  const { subscribeToMore, ...result } = useChatRoomMessagesQuery({
    variables: { categoryId: selectedCategoryId },
  })

  console.log('SUBSCRIBE TO MORE')
  console.log(subscribeToMore)

  console.log('CHAT RIGHT SIDE BEFORE THE ACTUAL CONTAINER')
  console.log(result)

  if (!result.loading) {
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
