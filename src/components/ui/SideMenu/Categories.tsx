import { NextChakraLink } from '@/components/common/index'
import { useCategoriesQuery } from '@/generated/graphql'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  Badge,
  Box,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ImSpinner } from 'react-icons/im'

export default function SubredditsAccordion() {
  const bg = useColorModeValue('white', '#202020')
  const router = useRouter()
  const color = useColorModeValue('gray.700', 'gray.300')
  const hover = useColorModeValue('black', 'white')

  const linkbg = useColorModeValue('#ebedf0', '#3661ed')

  const { category } = router.query

  const { data, loading, error } = useCategoriesQuery()

  const CategoriesCount = () => {
    if (data && data.categories && data.categories.length > 0) {
      const count = data.categories.length
      return (
        <Badge ml={1} colorScheme="orange">
          {count}
        </Badge>
      )
    }
    return null
  }

  if (error) return <Alert>Error loading categories</Alert>

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" fontWeight="semibold" textAlign="left">
            CATEGORIES <CategoriesCount />
          </Box>
          {!loading ? <AccordionIcon /> : <ImSpinner />}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List mt={2} spacing={3}>
          {data && data.categories ? (
            <>
              {data.categories.map((category) => {
                return (
                  <ListItem key={`category-list-${category.id}`}>
                    <NextChakraLink
                      p={1}
                      fontWeight="500"
                      color={color}
                      _hover={{
                        marginLeft: 1,
                      }}
                      href="/r/[category]"
                      as={`/r/${category.name}`}
                    >
                      {category.name}
                    </NextChakraLink>
                  </ListItem>
                )
              })}
            </>
          ) : (
            <ListItem>no categories created 👎</ListItem>
          )}
        </List>
      </AccordionPanel>
    </AccordionItem>
  )
}
