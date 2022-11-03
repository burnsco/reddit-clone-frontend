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
      px={[2, 4, 6]}
      align="center"
      justify="space-around"
    >
      <NavbarLogoSection />
      <Spacer />
      <Flex flexGrow={2} justify="center" border="2px solid red">
        <NavigationMenu />
      </Flex>
      <Stack spacing={4} mr={2} direction="row">
        <RegisterDrawer />
        <LoginDrawer />
      </Stack>
    </Flex>
  )
}
