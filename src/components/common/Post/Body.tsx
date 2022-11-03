import { useEditPostMutation } from '@/generated/graphql'
import {
  Box,
  chakra,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Link,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

type PostBodyType = {
  title?: string | null
  text?: string | null
  link?: string | null
  imageH?: number | null
  imageW?: number | null
  image?: string | null
  postId?: string
  categoryId?: string
}

const ChakraImage = chakra(Image)

export default function PostBody({
  title,
  text,
  postId,
  imageW,
  imageH,
  link,
  image,
  categoryId,
}: PostBodyType) {
  const [editPost, { loading: submittingEditedPost }] = useEditPostMutation()

  // #TODO optimize this so can use on title, text or link
  function EditItemControls({
    title,
    text,
    link,
    postId,
  }: Partial<PostBodyType>) {
    if (title || text || link) {
      if (postId && categoryId) {
        return (
          <Heading fontWeight="500" fontSize="xl" my={1} px={1}>
            <Editable
              defaultValue={title || 'Error'}
              submitOnBlur
              onSubmit={async (props) => {
                try {
                  const response = await editPost({
                    variables: {
                      data: {
                        title: props,
                        categoryId,
                        postId,
                      },
                    },
                  })
                } catch (error) {
                  console.log(error)
                }
              }}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Heading>
        )
      }
      return (
        <Heading fontWeight="500" fontSize="xl" p={1}>
          {title}
        </Heading>
      )
    }
    return null
  }

  const myLoader = ({ src, width, quality }: any) => {
    return `https://res.cloudinary.com/dmztdsduf/${src}?w=${width}&q=${
      quality || 50
    }`
  }

  return (
    <Stack flexGrow={2} width="100%">
      <Skeleton isLoaded={!submittingEditedPost}>
        <EditItemControls title={title} postId={postId} />
      </Skeleton>

      {image && imageW && imageH ? (
        <Box maxW="600px">
          <Image
            loader={myLoader}
            src={image}
            height={imageH}
            width={imageW}
            alt={`image-${title}`}
          />
        </Box>
      ) : null}

      {text ? (
        <Text p="2" fontSize="md" noOfLines={6}>
          {text}
        </Text>
      ) : null}

      {link ? (
        <Box mt={1}>
          <Link href={`${link}`}>{link}</Link>
        </Box>
      ) : null}
    </Stack>
  )
}
