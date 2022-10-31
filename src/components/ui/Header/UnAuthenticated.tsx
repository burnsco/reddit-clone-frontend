import LoginDrawer from '@/components/common/Drawers/Login'
import RegisterDrawer from '@/components/common/Drawers/Register'
import NavigationMenu from '@/components/common/NavigationMenu'
import { NavbarLogoSection } from '@/components/ui/Header/Authenticated'
import { Flex, Spacer, Stack } from '@chakra-ui/react'

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
      <NavbarLogoSection />
      <Spacer />
      <NavigationMenu />
      <Stack spacing={4} mr={2} direction="row">
        <RegisterDrawer />

        <LoginDrawer />
      </Stack>
    </Flex>
  )
}
