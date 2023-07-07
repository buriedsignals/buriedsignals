// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { CREATE_POST_INSIGHT, QUERY_POSTS_INSIGHTS, QUERY_POST_INSIGHT, UPDATE_POST_INSIGHTS_LIKES } from "@/middlewares/datas/posts/insights"
import { parsePostsInsights, parsePostInsight } from '../utils'

export async function getPostsInsights(query) {
  const apolloClient = getApolloClient()
  const variables = {}
  if (query.category) {
    variables.categories = [].concat(query.category)
  }
  const response = await apolloClient.query({
    query: QUERY_POSTS_INSIGHTS({
      categories: query.category || null
    }),
    variables: variables
  })
  if (!response) return null
  let posts = response.data.insightsPosts.data
  return parsePostsInsights(posts, query)
}

export async function getPostInsight(slug) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POST_INSIGHT,
    variables: { slug }
  })
  if (!response) return null
  let post = response.data.insightsPosts.data[0].attributes
  post = parsePostInsight(post)
  post.id = response.data.insightsPosts.data[0].id
  return post
}

export async function createPostInsight(slug, data) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    mutation: CREATE_POST_INSIGHT,
    variables: { slug, data }
  })
  if (!response) return null
  return response
}

export async function updatePostInsightLikes(slug, likes) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    mutation: UPDATE_POST_INSIGHTS_LIKES,
    variables: { slug, likes }
  })
  if (!response) return null
  return response
}

