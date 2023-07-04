// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_SPOTLIGHTS, QUERY_POST_SPOTLIGHT, QUERY_POSTS_SPOTLIGHTS_LATEST, QUERY_POSTS_SPOTLIGHTS_WEEK, QUERY_POSTS_SPOTLIGHTS_MONTH, CREATE_POST_SPOTLIGHT, UPDATE_POST_SPOTLIGHT_LIKES, UPDATE_POST_SPOTLIGHT_AWARDS, CREATE_SPOTLIGHT_COMMENT, QUERY_SPOTLIGHT_COMMENTS, DELETE_SPOTLIGHT_COMMENT, UPDATE_SPOTLIGHT_COMMENT, UPDATE_POST_SPOTLIGHT_METRICS_VIRALITY_VALUE, QUERY_POST_SPOTLIGHT_ARCHIVE, QUERY_POSTS_SPOTLIGHTS_ARCHIVES } from "@/middlewares/datas/posts/spotlights"
// Scripts
import { getDecile, transformToSlug, parsePostsSpotlights, parsePostSpotlight, createImage, parseComments, parseArchivesSpotlights, parseArchiveSpotlight } from '../utils'

export let authorId = null

export async function getPostsSpotlights(query) {
  const apolloClient = getApolloClient()
  const variables = {}
  if (query.category) {
    variables.categories = [].concat(query.category)
  }
  if (query.award) {
    variables.award = query.award
  }
  if (query.geography) {
    variables.geography = query.geography
  }
  const responseSpotlights = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS({
      categories: query.category || null,
      award: query.award || null,
      geography: query.geography || null
    }),
    variables: variables
  })
  if (!responseSpotlights) return null
  let posts = responseSpotlights.data.spotlightsPosts.data
  posts = parsePostsSpotlights(posts, query)

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
  // const date = new Date()
  // const week_end = date.toISOString()
  // const week_start = new Date(date.setDate(date.getDate() - 7)).toISOString()
  // const apolloClient = getApolloClient()
  // const response = await apolloClient.query({
  //   query: QUERY_POSTS_SPOTLIGHTS_WEEK,
  //   variables: { week_start, week_end }
  // })
  // if (!response) return null
  // let posts = response.data.spotlightsPosts.data
  // return parsePostsSpotlights(posts)
  const limit = 7
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS_LATEST,
    variables: { limit }
  })
  if (!response) return null
  let posts = response.data.spotlightsPosts.data
  return parsePostsSpotlights(posts)
}

export async function getPostsSpotlightsMonth() {
  // const date = new Date()
  // const month_end = date.toISOString()
  // const month_start = new Date(date.setDate(date.getDate() - 31)).toISOString()
  // const apolloClient = getApolloClient()
  // const response = await apolloClient.query({
  //   query: QUERY_POSTS_SPOTLIGHTS_MONTH,
  //   variables: { month_start, month_end }
  // })
  // if (!response) return null
  // let posts = response.data.spotlightsPosts.data
  // posts = parsePostsSpotlights(posts)
  // posts.posts = posts.posts.filter(post => post.awards == "Week")
  // return posts
  const limit = 4
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS
  })
  if (!response) return null
  let posts = response.data.spotlightsPosts.data
  posts = parsePostsSpotlights(posts)
  posts.posts = posts.posts.filter(post => post.awards == "Week")
  return posts.posts.slice(0, limit);
}

// Récupérer les ID des catégories + l'ID de la personne qui à soumis le spotlight
export async function createPostSpotlight(data) {
  data.Image = await createImage(data.Image, data.Title)
  data.publishedAt = null
  data.Slug = transformToSlug(data.Slug)
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

export async function updateViralityMetricsSpotlights() {
  /* 
    - Get all spotlights (id, metrics_virality_backlinks) 
    - Create array of all metrics_virality_backlinks
    - Create decentile function
    - For each spotlights
      - Get notation of the current metrics_virality_backlinks
      - Update the metrics_virality_value 
  */  
  const apolloClient = getApolloClient()
  const responseSpotlights = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS,
  })
  if (!responseSpotlights) return null
  let posts = responseSpotlights.data.spotlightsPosts.data
  posts = parsePostsSpotlights(posts)
  const backlinks = []
  posts.posts.forEach(post => {
    if (post.virality_backlinks) {
      backlinks.push(post.virality_backlinks)
    }
  })
  const responses = []
  posts.posts.forEach(async post => {
    if (post.virality_backlinks) {
      const metrics_virality_value = getDecile(post.virality_backlinks, backlinks)
      const response = await apolloClient.mutate({
        errorPolicy: 'all',
        mutation: UPDATE_POST_SPOTLIGHT_METRICS_VIRALITY_VALUE,
        variables: { id: post.id, metricsViralityValue: metrics_virality_value }
      })
      responses.push(response)
      if (!response) return null
    }
  })
  return responses
}


export async function getPostsSpotlightsArchives(query) {
  const apolloClient = getApolloClient()
  const responseSpotlightsArchives = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS_ARCHIVES
  })
  if (!responseSpotlightsArchives) return null
  let posts = responseSpotlightsArchives.data.spotlightsArchives.data
  posts = parseArchivesSpotlights(posts, query)
  return posts
}


export async function getPostSpotlightArchive(slug) {
  const apolloClient = getApolloClient()
  const responseSpotlightArchive = await apolloClient.query({
    query: QUERY_POST_SPOTLIGHT_ARCHIVE,
    variables: { slug }
  })
  if (!responseSpotlightArchive) return null
  const post = responseSpotlightArchive.data.spotlightsArchives.data[0].attributes
  return parseArchiveSpotlight(post)
}
