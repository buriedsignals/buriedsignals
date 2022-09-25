// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_SPOTLIGHTS, QUERY_POST_SPOTLIGHT, QUERY_POSTS_SPOTLIGHTS_WEEK, QUERY_POSTS_SPOTLIGHTS_MONTH, CREATE_POST_SPOTLIGHT, UPDATE_POST_SPOTLIGHT_LIKES, UPDATE_POST_SPOTLIGHT_AWARDS, CREATE_SPOTLIGHT_COMMENT, QUERY_SPOTLIGHT_COMMENTS, DELETE_SPOTLIGHT_COMMENT, UPDATE_SPOTLIGHT_COMMENT } from "@/middlewares/datas/posts/spotlights"
import { parsePostsSpotlights, parsePostSpotlight, createImage, parseComments } from '../utils'

export let authorId = null

export async function getPostsSpotlights() {
  const apolloClient = getApolloClient()
  const responseSpotlights = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS,
  })
  if (!responseSpotlights) return null
  let posts = responseSpotlights.data.spotlightsPosts.data
  posts = parsePostsSpotlights(posts)
  for (let i = 0; i < posts.posts.length; i++) {
    const post = posts.posts[i]
    const responseComments = await apolloClient.query({
      query: QUERY_SPOTLIGHT_COMMENTS,
      variables: { relation: `api::spotlights-post.spotlights-post:${post.id}` }
    })
    if (!responseComments) return null
    let commentsDatas = responseComments.data.findAllFlat.data
    commentsDatas = parseComments(commentsDatas)
    post.comments = commentsDatas.comments
    post.comments_length = commentsDatas.comments_length
  }
  return posts
}

export async function getPostSpotlight(slug) {
  const apolloClient = getApolloClient()
  const responseSpotlight = await apolloClient.query({
    query: QUERY_POST_SPOTLIGHT,
    variables: { slug }
  })
  if (!responseSpotlight) return null
  const responseComments = await apolloClient.query({
    query: QUERY_SPOTLIGHT_COMMENTS,
    variables: { relation: `api::spotlights-post.spotlights-post:${responseSpotlight.data.spotlightsPosts.data[0].id}` }
  })
  if (!responseComments) return null
  let commentsDatas = responseComments.data.findAllFlat.data
  commentsDatas = parseComments(commentsDatas)
  let post = responseSpotlight.data.spotlightsPosts.data[0].attributes
  post = parsePostSpotlight(post)
  post.id = responseSpotlight.data.spotlightsPosts.data[0].id
  post.comments = commentsDatas.comments
  post.comments_length = commentsDatas.comments_length
  return post
}

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

export async function getPostsSpotlightsMonth() {
  const date = new Date()
  const month_end = date.toISOString()
  const month_start = new Date(date.setDate(date.getDate() - 31)).toISOString()
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS_MONTH,
    variables: { month_start, month_end }
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

export async function createSpotlightComment(datas) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: CREATE_SPOTLIGHT_COMMENT,
    variables: { datas }
  })
  if (!response) return null
  return response
}

export async function updateSpotlightComment(datasDelete, datasCreate) {
  const apolloClient = getApolloClient()
  const responseDelete = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: DELETE_SPOTLIGHT_COMMENT,
    variables: { datas: datasDelete }
  })
  if (!responseDelete) return null
  const responseCreate = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: CREATE_SPOTLIGHT_COMMENT,
    variables: { datas: datasCreate }
  })
  if (!responseCreate) return null
  return responseCreate
}

export async function deleteSpotlightComment(datas) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: DELETE_SPOTLIGHT_COMMENT,
    variables: { datas }
  })
  if (!response) return null
  return response
}
