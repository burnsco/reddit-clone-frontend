import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  useSystemColorMode: true,
  initialColorMode: 'dark',
  styles: {
    global: (props: any) => ({
      html: {
        width: '100vw',
        height: '100%',
      },
      body: {
        overflow: 'hidden',
        width: '100vw',
        minHeight: '100vh',
      },
    }),
  },
})

export default customTheme
