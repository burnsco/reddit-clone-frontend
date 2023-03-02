import { ThemedContainer } from '@/components/common/ThemedContainer'
import { useLoggedInUser } from '@/hooks/useLoggedInUser'
import useNewUserNotification from '@/hooks/useNewUserNotify'
import {
  Badge,
  chakra,
  Flex,
  Skeleton,
  Text,
  useColorModeValue,
  useSafeLayoutEffect,
  useToast,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import UnAuthenticatedHeader from './UnAuthenticated'

const AuthenticatedHeader = dynamic(() => import('./Authenticated'))

export default function Header() {
  const [loggedInUser, loading] = useLoggedInUser()

  const toast = useToast()
  const newUser = useNewUserNotification()

  const headerBG = useColorModeValue('white', '#18181b')
  const headerShadow = useColorModeValue('md', 'dark-lg')
  const colorScheme = useColorModeValue('green', 'orange')

  useSafeLayoutEffect(() => {
    if (newUser) {
      toast({
        position: 'bottom-left',
        render: () => (
          <ThemedContainer p={4}>
            <Badge colorScheme={colorScheme} variant="solid" p={1}>
              {newUser}
            </Badge>{' '}
            <Text as="em" color="gray.50">
              Has just joined the community!
            </Text>
          </ThemedContainer>
        ),
      })
    }
  }, [newUser])

  return (
    <Skeleton isLoaded={!loading}>
      <chakra.nav
        pos="fixed"
        zIndex="1000"
        height="4rem"
        maxW="1600px"
        bg={headerBG}
        boxShadow={headerShadow}
        width="full"
      >
        <Flex
          id="container"
          px="4"
          border="1px dotted orange"
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
        >
          {loggedInUser ? <AuthenticatedHeader /> : <UnAuthenticatedHeader />}
        </Flex>
      </chakra.nav>
    </Skeleton>
  )
}
