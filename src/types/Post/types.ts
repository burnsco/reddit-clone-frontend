import { CreatePostInput } from '@/generated/graphql'

export const CreatePostInputType: CreatePostInput = {
  categoryId: '',
  categoryName: '',
  title: '',
  text: '',
  link: '',
  image: '',
  imageW: undefined,
  imageH: undefined,
}
