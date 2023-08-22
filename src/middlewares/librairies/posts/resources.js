// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_RESOURCES, QUERY_POSTS_RESOURCES_LITE } from "@/middlewares/datas/posts/resources"
import { maxPostsByPage, maxPostsBySectionByPage, parsePostsResources } from '../utils'

export async function getPostsResources(query) {
  const apolloClient = getApolloClient()
  const variables = {}
  if (query.category) {
    variables.categories = [].concat(query.category)
  }
  let postsLite = null
  // if (query.category) {
    const responseRessourcesLite = await apolloClient.query({
      query: QUERY_POSTS_RESOURCES_LITE({
        categories: query.category || null
      }),
      variables: variables
    })
    if (!responseRessourcesLite) return null
    postsLite = responseRessourcesLite.data.resourcesPosts.data
  // }
  variables.page = query.page ? parseInt(query.page) : 1
  let pageSize = Math.floor(maxPostsByPage / maxPostsBySectionByPage) * maxPostsBySectionByPage
  const responseRessources = await apolloClient.query({
    query: QUERY_POSTS_RESOURCES({
      categories: query.category || null,
      page: query.page || 1,
      pageSize: pageSize
    }),
    variables: variables
  })
  if (!responseRessources) return null
  let posts = responseRessources.data.resourcesPosts.data
  // if (postsLite) {
    variables.totalPosts = postsLite.length - 1
    variables.posts = postsLite
  // } else {
  //   variables.totalPosts = responseRessources.data.resourcesPosts.meta.pagination.total
  // }
  return parsePostsResources(posts, variables)
}