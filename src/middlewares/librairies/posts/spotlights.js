// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_SPOTLIGHTS, QUERY_POST_SPOTLIGHT, QUERY_POSTS_SPOTLIGHTS_LATEST, QUERY_POSTS_SPOTLIGHTS_WEEK, QUERY_POSTS_SPOTLIGHTS_MONTH, CREATE_POST_SPOTLIGHT, UPDATE_POST_SPOTLIGHT_LIKES, UPDATE_POST_SPOTLIGHT_AWARDS, CREATE_SPOTLIGHT_COMMENT, QUERY_SPOTLIGHT_COMMENTS, DELETE_SPOTLIGHT_COMMENT, UPDATE_SPOTLIGHT_COMMENT, UPDATE_POST_SPOTLIGHT_METRICS_VALUE, QUERY_POST_SPOTLIGHT_ARCHIVE, QUERY_POSTS_SPOTLIGHTS_ARCHIVES, UPDATE_POST_SPOTLIGHT_VOTES, QUERY_POSTS_SPOTLIGHTS_LITE, CREATE_POST_SPOTLIGHT_ARCHIVE } from "@/middlewares/datas/posts/spotlights"
// Scripts
import { parsePostsSpotlights, parsePostSpotlight, createImage, parseComments, parseArchivesSpotlights, parseArchiveSpotlight, createFile } from '../utils'
import { getDecile, transformToSlug } from '@/scripts/utils'
// Modules
import axios from 'axios'
// import { CronJob } from 'cron'

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
  const responseSpotlightsLite = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS_LITE({
      categories: query.category || null,
      award: query.award || null,
      geography: query.geography || null
    }),
    variables: variables
  })
  if (!responseSpotlightsLite) return null
  let postsLite = responseSpotlightsLite.data.spotlightsPosts.data
  variables.page = query.page ? parseInt(query.page) : 1
  const responseSpotlights = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS({
      categories: query.category || null,
      award: query.award || null,
      geography: query.geography || null,
      page: query.page || 1
    }),
    variables: variables
  })
  if (!responseSpotlights) return null
  let posts = responseSpotlights.data.spotlightsPosts.data
  variables.totalPosts = postsLite.length - 1
  posts = parsePostsSpotlights(posts, variables)
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
  return parsePostsSpotlights(posts, { page: 1 })
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
    query: QUERY_POSTS_SPOTLIGHTS({
      categories: null,
      award: null,
      geography: null,
      page: 1
    }),
    variables: { categories: null, award: null, geography: null }
  })
  if (!response) return null
  let posts = response.data.spotlightsPosts.data
  posts = parsePostsSpotlights(posts, { page: 1 })
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

export async function updatePostSpotlightVotes(id, votes) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_POST_SPOTLIGHT_VOTES,
    variables: { id, votes }
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

export async function updateSpotlightComment(datasDelete, datasCreate, post) {
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

export async function updateMetricsSpotlights() {
  const apolloClient = getApolloClient()
  const responseSpotlights = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS_LITE({ categories: null, award: null, geography: null }),
  })
  if (!responseSpotlights) return null
  /*
    Metrics_effectiveness_votes
    Metrics_effectiveness_value
    Metrics_virality_backlinks
    Metrics_virality_value
  */
  let posts = responseSpotlights.data.spotlightsPosts.data
  const backlinks = []
  posts.forEach(post => {
    post = post.attributes
    if (post.Metrics_virality_backlinks) {
      backlinks.push(post.Metrics_virality_backlinks)
    }
    post.Metrics_effectiveness_votes = post.Metrics_effectiveness_votes ? post.Metrics_effectiveness_votes.split(',') : []

  })
  const responses = []
  posts.forEach(async post => {
    const postID = post.id
    post = post.attributes
    let metrics_effectiveness_value = post.Metrics_effectiveness_votes.length != 0 ? post.Metrics_effectiveness_votes.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue), 0) / post.Metrics_effectiveness_votes.length : null
    metrics_effectiveness_value = metrics_effectiveness_value && Math.round(metrics_effectiveness_value * 100) / 100
    const old_metrics_effectiveness_value = post.Metrics_effectiveness_value

    const metrics_virality_value = post.Metrics_virality_backlinks ? getDecile(post.Metrics_virality_backlinks, backlinks) : null
    const old_metrics_virality_value = post.Metrics_virality_value

    if (old_metrics_virality_value !== metrics_virality_value || old_metrics_effectiveness_value !== metrics_effectiveness_value) {
      const response = await apolloClient.mutate({
        errorPolicy: 'all',
        mutation: UPDATE_POST_SPOTLIGHT_METRICS_VALUE,
        variables: { id: postID, metricsEffectivenessValue: metrics_effectiveness_value, metricsViralityValue: metrics_virality_value }
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

export async function createArchiveSpotlight(id, title, slug, link_source) {
  // Récupérer le fichier wacz
  const username = "remy.benjamin.dumas%40gmail.com"
  const password = "L!dqgKWVIwH4v)VU"
  const oid = "9177b288-2706-4fc5-b8b8-cc9ee1490e95"
  const responseLogin = await axios.post(
    'https://beta.browsertrix.cloud/api/auth/jwt/login',
    `grant_type=&username=${ username }&password=${ password }&scope=&client_id=&client_secret=`,
    {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
  if (!responseLogin) return null
  const token = responseLogin.data.access_token
  const responseBrowsertrix = await axios.post(
    `https://beta.browsertrix.cloud/api/orgs/${ oid }/crawlconfigs/`,
    {
      'runNow': true,
      'config': {
        'seeds': [
          {
            'url': link_source
          }
        ]
      },
      'name': title
    },
    {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${ token }`,
        'Content-Type': 'application/json'
      }
    }
  )
  if (!responseBrowsertrix) return null
  const archiveId = responseBrowsertrix.data.run_now_job
  let schedule = await axios.post(
    'https://api.mergent.co/v2/schedules',
    {
      'cron': '* * * * *',
      'request': {
        'url': 'https://www.buriedsignals.com/api/post-update-spotlights-archive-cron-3k4qt81hmr',
        'body': `${ archiveId }`
      }
    },
    {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer BFSawcbm6LFDoA0yzyqX',
        'Content-Type': 'application/json'
      }
    }
  )
  schedule = await axios.patch(
    `https://api.mergent.co/v2/schedules/${ schedule.data.id }`,
    {
      'cron': '* * * * *',
      'request': {
        'url': 'https://www.buriedsignals.com/api/post-update-spotlights-archive-cron-3k4qt81hmr',
        'body': `${ archiveId },${ schedule.data.id }`
      }
    },
    {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer BFSawcbm6LFDoA0yzyqX',
        'Content-Type': 'application/json'
      }
    }
  )
  return {}
}
export async function createArchiveSpotlightCron(archiveId, scheduleId) {
  const username = "remy.benjamin.dumas%40gmail.com"
  const password = "L!dqgKWVIwH4v)VU"
  const oid = "9177b288-2706-4fc5-b8b8-cc9ee1490e95"
  const responseLogin = await axios.post(
    'https://beta.browsertrix.cloud/api/auth/jwt/login',
    `grant_type=&username=${ username }&password=${ password }&scope=&client_id=&client_secret=`,
    {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
  if (!responseLogin) return null
  const token = responseLogin.data.access_token
  const responseArchive = await axios.get(
    `https://beta.browsertrix.cloud/api/orgs/${ oid }/crawls/${ archiveId }/replay.json`, {
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${ token }`,
    }
  })
  if (responseArchive.data && responseArchive.data.resources[0]) {
    const responseCron = await axios.delete(
      `https://api.mergent.co/v2/schedules/${ scheduleId }`,
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer BFSawcbm6LFDoA0yzyqX',
          'Content-Type': 'application/json'
        }
      }
    )
    if (responseArchive.data.state != "complete") return 
    urlFile = responseArchive.data.resources[0].path
    const currentDate = new Date();
    const publishedAt = currentDate.toISOString()
    const data = {
      Title: title, 
      Slug: slug, 
      File_wacz: await createFile(urlFile, `wacz-${ slug }`), 
      Spotlight: id, 
      publishedAt: publishedAt
    }
    console.log("data", data)
    const apolloClient = getApolloClient()
    const responseSpotlightArchive = await apolloClient.query({
      query: CREATE_POST_SPOTLIGHT_ARCHIVE,
      variables: { data }
    })
    if (!responseSpotlightArchive) return null
  }
  return {}
}
