import NextChakraLink from '@/components/common/NextChakraLink'
import { Button, Flex, HStack } from '@chakra-ui/react'
import { RiMessage2Fill } from 'react-icons/ri'

type PostFooterType = {
  category?: string | null
  id?: string | null
  commentsCount?: number
}

export default function PostFooter({
  category,
  id,
  commentsCount,
}: PostFooterType) {
  return (
    <Flex width="100%" fontSize="sm" fontWeight="500" p={1}>
      <Button size="sm" p={1} variant="ghost" color="#818384" borderRadius={2}>
        <HStack>
          <RiMessage2Fill />
          <NextChakraLink
            _hover={{ textTransform: 'none' }}
            href="/r/[category]/[id]"
            as={`/r/${category}/${id}`}
          >
            {commentsCount} Comments
          </NextChakraLink>
        </HStack>
      </Button>
    </Flex>
  )
}
