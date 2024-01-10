import {
  ApolloClient,
  from,
  HttpLink,
  makeVar,
  NormalizedCacheObject,
  ReactiveVar,
  split,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import { useMemo } from 'react'
import { cacheOptions } from './cache'

export const loggedInUserId: ReactiveVar<string> = makeVar<string>('')
export const selectedCategoryId: ReactiveVar<string> = makeVar<string>('')
export const selectedCategoryName: ReactiveVar<string> = makeVar<string>('')

let apolloClient: ApolloClient<NormalizedCacheObject>

const ssrMode = typeof window === 'undefined'

function createApolloClient() {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    credentials: 'include',
  })

  if (ssrMode) {
    return new ApolloClient({
      connectToDevTools: true,
      ssrMode,
      link: httpLink,
      cache: cacheOptions,
    })
  }

  const wsLink = new GraphQLWsLink(
    createClient({
      url: `${process.env.NEXT_PUBLIC_API_WS}`,
      connectionParams: {
        Authorization: window.localStorage.getItem('userId'),
      },
    })
  )

  const splitLink = typeof window
    ? split(
        ({ query }) => {
          const operations = getMainDefinition(query)
          return (
            operations.kind === 'OperationDefinition' &&
            operations.operation === 'subscription'
          )
        },
        wsLink,
        httpLink
      )
    : httpLink

  return new ApolloClient({
    ssrMode,
    link: from([errorLink, splitLink]),
    cache: cacheOptions,
  })
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
