// Middlewares
import { getApolloClient } from '@/middlewares-statamic/librairies/apollo-client'
import { QUERY_POSTS_RESOURCES } from "@/middlewares-statamic/datas/posts/resources"
import { parsePostsResources } from '../utils'

export async function getPostsResources() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_RESOURCES,
  })
  if (!response) return null
  let posts = response.data.entries.data
  return parsePostsResources(posts)
}