// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_SPOTLIGHTS, QUERY_POST_SPOTLIGHT, QUERY_POSTS_SPOTLIGHTS_WEEK, QUERY_POSTS_SPOTLIGHTS_MONTH, CREATE_POST_SPOTLIGHT, UPDATE_POST_SPOTLIGHT_LIKES, UPDATE_POST_SPOTLIGHT_AWARDS } from "@/middlewares/datas/posts/spotlights"
import { parsePostsSpotlights, parsePostSpotlight, createImage } from '../utils'

export async function getPostsSpotlights() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS,
  })
  if (!response) return null
  let posts = response.data.spotlightsPosts.data
  return parsePostsSpotlights(posts)
}

export async function getPostSpotlight(slug) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POST_SPOTLIGHT,
    variables: { slug }
  })
  if (!response) return null
  let post = response.data.spotlightsPosts.data[0].attributes
  post = parsePostSpotlight(post)
  post.id = response.data.spotlightsPosts.data[0].id
  return post
}

// QUERY SPOTLIGHTS DE LA SEMAINE
export async function getPostsSpotlightsWeek() {
  const date = new Date()
  const week_end = date.toISOString()
  const week_start = new Date(date.setDate(date.getDate() - 7)).toISOString()
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS_WEEK,
    variables: { week_start, week_end }
  })
  if (!response) return null
  let posts = response.data.spotlightsPosts.data
  return parsePostsSpotlights(posts)
}

// QUERY SPOTLIGHTS DU MOIS
export async function getPostsSpotlightsMonth() {
  const date = new Date()
  const month_end = date.toISOString()
  const month_start = new Date(date.setDate(date.getDate() - 7)).toISOString()
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS_MONTH,
    variables: { week_start, week_end }
  })
  if (!response) return null
  let posts = response.data.spotlightsPosts.data
  return parsePostsSpotlights(posts)
}

// Récupérer les ID des catégories + l'ID de la personne qui à soumis le spotlight
export async function createPostSpotlight(data) {
  data.Image = await createImage(data.Image, data.Title)
  data.publishedAt = null
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: CREATE_POST_SPOTLIGHT,
    variables: { data }
  })
  if (!response) return null
  return response
}

export async function updatePostSpotlightLikes(id, likes) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_POST_SPOTLIGHT_LIKES,
    variables: { id, likes }
  })
  if (!response) return null
  return response
}

// Récupérer les ID des awards
export async function updatePostSpotlightAwards(id, awardId) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_POST_SPOTLIGHT_AWARDS,
    variables: { id, awardId }
  })
  if (!response) return null
  return response
}
