import CategoriesAccordion from '@/components/ui/SideMenu/Categories'
import FriendsSideMenuAccordion from '@/components/ui/SideMenu/Friends'
import { Accordion, Box, useColorModeValue } from '@chakra-ui/react'

export default function SideMenuContainer() {
  const bg = useColorModeValue('white', '#202020')

  return (
    <>
      <Box borderRadius="sm" bg={bg} minW="200px" maxW="300px" boxShadow="xs">
        <Accordion defaultIndex={[0]} allowMultiple>
          <CategoriesAccordion />
          <FriendsSideMenuAccordion />
        </Accordion>
      </Box>
    </>
  )
}
