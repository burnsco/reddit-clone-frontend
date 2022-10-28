import LoginDrawer from '@/components/common/Drawers/Login'
import RegisterDrawer from '@/components/common/Drawers/Register'
import Logo from '@/components/common/Logo'
import NavigationMenu from '@/components/common/NavigationMenu'
import { Flex, Spacer, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

function LogoSection() {
  const router = useRouter()

  return (
    <Flex
      aria-label="Home Header Link"
      align="center"
      h="full"
      p="3"
      flexGrow={1}
      display={{ base: 'flex' }}
    >
      <Flex cursor="pointer" align="center" onClick={() => router.push('/')}>
        <Logo />
      </Flex>
    </Flex>
  )
}

export default function UnAuthenticatedHeader() {
  return (
    <Flex
      w="100%"
      h="100%"
      px="4"
      align="center"
      justify="space-around"
      border="2px solid green"
    >
      <LogoSection />
      <Spacer />
      <NavigationMenu />
      <Stack spacing={4} mr={2} direction="row">
        <RegisterDrawer />

        <LoginDrawer />
      </Stack>
    </Flex>
  )
}
