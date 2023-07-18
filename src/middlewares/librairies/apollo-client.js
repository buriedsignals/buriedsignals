// Nodes
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export let USER = {
  connected: false,
  id: null,
  slug: null,
  bookmarked: {
    insights: [],
    spotlights: [],
    resources: []
  },
  description: null,
  email: null,
  liked: {
    spotlights: []
  },
  name: null,
  slug: null,
  twitter_account: null
}
export const STRAPI_ENDPOINT = "http://127.0.0.1:1337" // "https://api.buriedsignals.com" // 
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
