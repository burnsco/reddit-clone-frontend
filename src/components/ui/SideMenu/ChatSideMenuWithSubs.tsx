import RightSideMenuContainer from '@/components/ui/SideMenu/RightSideMenuContainer'
import {
  CategoryChatSubDocument,
  useChatRoomMessagesQuery,
  useCurrentCategoryIdQuery,
} from '@/generated/graphql'
import { Alert } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function ChatSideMenuWithSubs(props: any) {
  const router = useRouter()

  // todo fix this up later, just trying to get a "main page" chat going
  console.log('use router chat menu')
  console.log(router)

  let selectedCategoryId = router.query.id as string

  const { data } = useCurrentCategoryIdQuery({
    variables: {
      name: selectedCategoryId,
    },
  })

  if (router.asPath === '/') {
    selectedCategoryId = '9d3461c6-3358-42a0-8461-ec272575bc4f'
  }

  selectedCategoryId = data?.category?.id as string

  console.log('SIDE MENU DISPLAY')
  console.log(selectedCategoryId)

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
