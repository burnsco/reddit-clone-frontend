import { Header } from '@/components/ui/Header'
import ChatSideMenuWithSubs from '@/components/ui/SideMenu/ChatSideMenuWithSubs'
import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'

const Layout: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#1A1A1B" />
        <meta
          name="description"
          content="social media site without all the fat."
        />
      </Head>

      <Header />

      <Flex
        top="4em"
        w="full"
        id="main-body-container"
        flexWrap="nowrap"
        position="relative"
        overflow="hidden"
        height="100%"
        width="100%"
      >
        <Box
          p={2}
          maxH="92vh"
          w="100%"
          border="1px solid red"
          overflowY="scroll"
          as="main"
        >
          {children}
        </Box>

        <ChatSideMenuWithSubs />
      </Flex>
    </>
  )
}

export default Layout
