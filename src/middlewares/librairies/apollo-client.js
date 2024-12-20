// Nodes
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const STRAPI_ENDPOINT = "https://api.buriedsignals.com" // "http://127.0.0.1:1337" // 
const STRAPI_GRAPHQL_ENDPOINT = "/graphql-g6dw7nypzj"
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
      uri: `${STRAPI_ENDPOINT}${STRAPI_GRAPHQL_ENDPOINT}`,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache'
      },
      query: {
        fetchPolicy: 'no-cache'
      },
      mutate: {
        fetchPolicy: 'no-cache'
      },
    },
  })
}
