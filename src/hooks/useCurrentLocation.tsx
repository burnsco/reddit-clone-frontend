import { useRouter } from 'next/router'

export const useCurrentLocation = () => {
  const router = useRouter()

  let currentLocationId

  currentLocationId = router.query.category as string

  console.log('router')
  console.log(router)

  if (router.asPath === '/') {
    currentLocationId = '76c53229-220c-443d-9f7f-c5209777977d'
  }

  return { currentLocationId }
}
