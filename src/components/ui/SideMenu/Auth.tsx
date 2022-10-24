import { Accordion } from '@chakra-ui/react'
import SubredditsAccordion from './Categories'

export default function AuthorizedSideMenu() {
  return (
    <Accordion allowToggle>
      <SubredditsAccordion />
    </Accordion>
  )
}
