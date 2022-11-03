import { Header } from '@/components/ui/Header'
import LeftSideMenuContainer from '@/components/ui/SideMenu/LeftSideMenuContainer'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import RightSideMenuContainer from '../SideMenu/RightSideMenuContainer'

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

      <Flex
        id="site-container"
        flexDirection="column"
        height="100%"
        position="relative"
        width="100%"
      >
        <Header />
        <Flex
          border="2px solid red"
          id="main-body-container"
          top="4rem"
          flexWrap="nowrap"
          position="relative"
          overflow="hidden"
          height="100%"
        >
          <LeftSideMenuContainer />
          {children}
          <RightSideMenuContainer />
        </Flex>
      </Flex>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
