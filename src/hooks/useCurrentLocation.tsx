import { useRouter } from 'next/router'

export const useCurrentLocation = () => {
  const router = useRouter()

  let currentLocation

  currentLocation = router.query.category as string

  console.log('router')
  console.log(router)

  if (router.asPath === '/') {
    currentLocation = 'main'
  }

  return { currentLocation }
}
