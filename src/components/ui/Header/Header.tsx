import { ThemedContainer } from '@/components/common/ThemedContainer'
import { useMeQuery } from '@/generated/graphql'
import useNewUserNotification from '@/hooks/useNewUserNotify'
import {
  Badge,
  Box,
  chakra,
  Flex,
  IconButton,
  Skeleton,
  Text,
  useColorMode,
  useColorModeValue,
  useSafeLayoutEffect,
  useToast,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FaMoon, FaSun } from 'react-icons/fa'
import UnAuthenticatedHeader from './UnAuthenticated'

const AuthenticatedHeader = dynamic(() => import('./Authenticated'))

export default function Header() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const { data, loading } = useMeQuery()

  const toast = useToast()
  const newUser = useNewUserNotification()

  const headerBG = useColorModeValue('white', '#202020')
  const headerShadow = useColorModeValue('md', 'dark-lg')
  const colorScheme = useColorModeValue('green', 'orange')

  useSafeLayoutEffect(() => {
    if (newUser) {
      console.log(newUser)
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
        height="3.5rem"
        maxW="1400px"
        bg={headerBG}
        boxShadow={headerShadow}
        width="full"
      >
        <Flex
          border="2px solid white"
          w="100%"
          h="100%"
          align="center"
          justify="space-around"
        >
          {data?.me ? <AuthenticatedHeader /> : <UnAuthenticatedHeader />}
          <Box border="2px solid red" px="2">
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </Box>
        </Flex>
      </chakra.nav>
    </Skeleton>
  )
}
