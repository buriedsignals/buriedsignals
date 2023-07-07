// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_RESOURCES } from "@/middlewares/datas/posts/resources"
import { parsePostsResources } from '../utils'

export async function getPostsResources(query) {
  const apolloClient = getApolloClient()
  const variables = {}
  if (query.category) {
    variables.categories = [].concat(query.category)
  }
  const response = await apolloClient.query({
    query: QUERY_POSTS_RESOURCES({
      categories: query.category || null
    }),
    variables: variables
  })
  if (!response) return null
  let posts = response.data.resourcesPosts.data
  return parsePostsResources(posts, query)
}