// Nodes
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export let USER = {
  connected: false,
  id: null,
  slug: null,
  bookmarked: {
    insights: null,
    spotlights: null,
    resources: null
  },
  description: null,
  email: null,
  liked: {
    spotlights: null
  },
  name: null,
  slug: null,
  twitter_account: null
  // connected: true,
  // id: 1,
  // slug: "eric-dupont",
  // bookmarked: {
  //   insights: [
  //     { slug: "can-you-recall-what-brings-you-joy" }
  //   ],
  //   spotlights: [
  //     { slug: "sunisa-lee-the-gymnast" }
  //   ],
  //   resources: [
  //     { slug: "sunisa-lee-the-gymnast" }
  //   ]
  // },
  // description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point.",
  // email: "ericdupont@gmail.com",
  // liked: {
  //   spotlights: ['sunisa-lee-the-gymnast']
  // },
  // name: "eric-dupont",
  // twitter_account: "@rcdpnt"
}
export const STRAPI_ENDPOINT = "http://localhost:1337"
const STRAPI_GRAPHQL_ENDPOINT = "/graphql"
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
  })
}
