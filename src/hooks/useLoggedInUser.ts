import { useMeQuery } from '@/generated/graphql'
import { useMemo } from 'react'
import { loggedInUserId } from '../lib/apolloClient'

export const useLoggedInUser = () => {
  const { data, loading } = useMeQuery()

  const loggedInUser = useMemo(() => data?.me, [data])

  console.log('loggedInUserHook')
  console.log(loggedInUser)

  if (loggedInUser) {
    loggedInUserId(loggedInUser.id)
    window.localStorage.setItem('userId', loggedInUser.id)
  }

  return [loggedInUser, loading]
}
