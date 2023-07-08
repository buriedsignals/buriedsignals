// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_RESOURCES, QUERY_POSTS_RESOURCES_LITE } from "@/middlewares/datas/posts/resources"
import { parsePostsResources } from '../utils'

export async function getPostsResources(query) {
  const apolloClient = getApolloClient()
  const variables = {}
  if (query.category) {
    variables.categories = [].concat(query.category)
  }
  const responseRessourcesLite = await apolloClient.query({
    query: QUERY_POSTS_RESOURCES_LITE({
      categories: query.category || null
    }),
    variables: variables
  })
  if (!responseRessourcesLite) return null
  let postsLite = responseRessourcesLite.data.resourcesPosts.data
  variables.page = query.page ? parseInt(query.page) : 1
  const responseRessources = await apolloClient.query({
    query: QUERY_POSTS_RESOURCES({
      categories: query.category || null,
      page: query.page || 1
    }),
    variables: variables
  })
  if (!responseRessources) return null
  let posts = responseRessources.data.resourcesPosts.data
  variables.totalPosts = postsLite.length - 1
  return parsePostsResources(posts, variables)
}