// Nodes
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const STATAMIC_GRAPHQL_ENDPOINT = "http://cyberspace-place.test/graphql"
let client = null

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient()
  }
  return client
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: STATAMIC_GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  })
}
