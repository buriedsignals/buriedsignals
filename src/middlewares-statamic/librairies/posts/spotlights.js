// Middlewares
import { getApolloClient } from '@/middlewares-statamic/librairies/apollo-client'
import { QUERY_POSTS_SPOTLIGHTS, QUERY_POST_SPOTLIGHT, CREATE_POST_SPOTLIGHT, UPDATE_POST_SPOTLIGHT_LIKES, UPDATE_POST_SPOTLIGHT_AWARDS } from "@/middlewares-statamic/datas/posts/spotlights"
import { parsePostsSpotlights, parsePostSpotlight } from '../utils'

export async function getPostsSpotlights() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS,
  })
  if (!response) return null
  let posts = response.data.entries.data
  return parsePostsSpotlights(posts)
}

export async function getPostSpotlight(slug) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POST_SPOTLIGHT,
    variables: { slug }
  })
  if (!response) return null
  let post = response.data.entry
  return parsePostSpotlight(post)
}

export async function createPostSpotlight(slug, data) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    mutation: CREATE_POST_SPOTLIGHT,
    variables: { slug, data }
  })
  if (!response) return null
  return response
}

export async function updatePostSpotlightLikes(id, likes) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutation({
    mutation: UPDATE_POST_SPOTLIGHT_LIKES,
    variables: { id, likes }
  })
  if (!response) return null
  return response
}

export async function updatePostSpotlightAwards(slug, awards) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    mutation: UPDATE_POST_SPOTLIGHT_AWARDS,
    variables: { slug, awards }
  })
  if (!response) return null
  return response
}
