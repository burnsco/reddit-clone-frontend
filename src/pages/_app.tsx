import { ChakraWrapper } from '@/components/common'
import { useApollo } from '@/lib/apolloClient'
import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo(pageProps)
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <ApolloProvider client={apolloClient}>
        <ChakraWrapper>{getLayout(<Component {...pageProps} />)}</ChakraWrapper>
      </ApolloProvider>
    </>
  )
}
