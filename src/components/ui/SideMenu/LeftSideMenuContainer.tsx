import CategoriesAccordion from '@/components/ui/SideMenu/Categories'
import FriendsSideMenuAccordion from '@/components/ui/SideMenu/Friends'
import { Accordion, Box, useColorModeValue } from '@chakra-ui/react'

export default function LeftSideMenuContainer() {
  const bg = useColorModeValue('white', '#202020')

  return (
    <>
      <Box
        borderRadius="sm"
        bg={bg}
        h="full"
        w="24rem"
        boxShadow="xs"
        border="1px dotted pink"
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <CategoriesAccordion />
          <FriendsSideMenuAccordion />
        </Accordion>
      </Box>
    </>
  )
}
