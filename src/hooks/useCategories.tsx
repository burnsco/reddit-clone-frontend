import { useMemo } from 'react'
import { useNumberOfCategoriesQuery } from '../generated/graphql'

export const useNumberOfCategories = () => {
  const { data } = useNumberOfCategoriesQuery()

  const numberOfCategories = useMemo(
    () => data && data.numberOfCategories && data.numberOfCategories.count,
    [data]
  )

  console.log('numberOfCategoriesHook')
  console.log(numberOfCategories)

  if (numberOfCategories !== undefined && numberOfCategories !== null)
    return numberOfCategories

  return null
}
