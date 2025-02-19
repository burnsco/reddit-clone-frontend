import { useMemo } from 'react'
import { useMeQuery } from '../generated/graphql'
import { loggedInUserId } from '../lib/apolloClient'

export const useLoggedInUser = () => {
  const { data } = useMeQuery()

  const loggedInUser = useMemo(() => data?.me, [data])

  if (loggedInUser) {
    loggedInUserId(loggedInUser.id)
    window.localStorage.setItem('userId', loggedInUser.id)
  }

  return [loggedInUser]
}
