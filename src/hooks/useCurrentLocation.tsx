import { useReactiveVar } from '@apollo/client'
import { useRouter } from 'next/router'
import { selectedCategoryId, selectedCategoryName } from '../lib/apolloClient'

export const useCurrentCategoryIdAndName = () => {
  const router = useRouter()
  const currentCategoryId = useReactiveVar(selectedCategoryId)
  const currentCategoryName = useReactiveVar(selectedCategoryName)

  if (router.pathname === '/') {
    selectedCategoryName('general')
    selectedCategoryId('9d3461c6-3358-42a0-8461-ec272575bc4f')
  }

  selectedCategoryName(router.query.category as string)
  selectedCategoryId(router.query.id as string)

  return [currentCategoryName, currentCategoryId]
}
