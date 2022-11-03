import { useMyFriendsQuery } from '@/generated/graphql'
import { useMemo } from 'react'

export const useMyFriends = () => {
  const { data } = useMyFriendsQuery()

  const MyFriends = useMemo(() => data?.me?.friends, [data])

  return [MyFriends]
}
