// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { CREATE_POST_INSIGHT, QUERY_POSTS_INSIGHTS, QUERY_POSTS_INSIGHTS_LITE, QUERY_POST_INSIGHT, UPDATE_POST_INSIGHTS_LIKES } from "@/middlewares/datas/posts/insights"
import { parsePostsInsights, parsePostInsight, maxPostsByPage, maxPostsBySectionByPage } from '../utils'

export async function getPostsInsights(query) {
  const apolloClient = getApolloClient()
  const variables = {}
  if (query.category) {
    variables.categories = [].concat(query.category)
  }
  let postsLite = null
  // if (query.category) {
    const responseInsightsLite = await apolloClient.query({
      query: QUERY_POSTS_INSIGHTS_LITE({
        categories: query.category || null
      }),
      variables: variables
    })
    if (!responseInsightsLite) return null
    postsLite = responseInsightsLite.data.insightsPosts.data
  // }
  variables.page = query.page ? parseInt(query.page) : 1
  let pageSize = Math.floor(maxPostsByPage / maxPostsBySectionByPage) * maxPostsBySectionByPage
  const responseInsights = await apolloClient.query({
    query: QUERY_POSTS_INSIGHTS({
      categories: query.category || null,
      page: query.page || 1,
      pageSize: pageSize
    }),
    variables: variables
  })
  if (!responseInsights) return null
  let posts = responseInsights.data.insightsPosts.data
  // if (postsLite) {
    variables.totalPosts = postsLite.length - 1
    variables.posts = postsLite
  // } else {
  //   variables.totalPosts = responseInsights.data.insightsPosts.meta.pagination.total
  // }
  return parsePostsInsights(posts, variables)
  // const apolloClient = getApolloClient()
  // const variables = {}
  // if (query.category) {
  //   variables.categories = [].concat(query.category)
  // }
  // const response = await apolloClient.query({
  //   query: QUERY_POSTS_INSIGHTS({
  //     categories: query.category || null
  //   }),
  //   variables: variables
  // })
  // if (!response) return null
  // let posts = response.data.insightsPosts.data
  // return parsePostsInsights(posts, query)
}

export async function getPostsInsightsLite(query) {
  const apolloClient = getApolloClient()
  const variables = {}
  if (query.category) {
    variables.categories = [].concat(query.category)
  }
  let postsLite = null
  const responseInsightsLite = await apolloClient.query({
    query: QUERY_POSTS_INSIGHTS_LITE({
      categories: query.category || null
    }),
    variables: variables
  })
  if (!responseInsightsLite) return null
  postsLite = responseInsightsLite.data.insightsPosts.data
  return postsLite
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

