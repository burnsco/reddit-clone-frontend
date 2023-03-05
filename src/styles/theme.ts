import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: 'dark',
  styles: {
    global: (props: any) => ({
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
      },
    }),
  },
})

export default customTheme
