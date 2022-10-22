import { Accordion } from '@chakra-ui/react'
import SubredditsAccordion from './Subreddits'

export default function AuthorizedSideMenu() {
  return (
    <Accordion allowToggle>
      <SubredditsAccordion />
    </Accordion>
  )
}
