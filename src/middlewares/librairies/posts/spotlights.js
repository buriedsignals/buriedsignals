// Middlewares
import { STRAPI_ENDPOINT, getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POST_SPOTLIGHT, CREATE_POST_SPOTLIGHT, UPDATE_POST_SPOTLIGHT_AWARDS, QUERY_POSTS_SPOTLIGHTS_LITE, QUERY_CATEGORIES_SPOTLIGHTS } from "@/middlewares/datas/posts/spotlights"
// Scripts
import { parsePostsSpotlights, parsePostSpotlight, createImage, parseCategoriesSpotlights, maxPageSize, parseMetaPagination } from '../utils'
import { transformToSlug } from '@/scripts/utils'
// Nodes
import axios from 'axios'
import qs from 'qs';

export let authorId = null

export async function getPostsSpotlights(query) {
  let filters = {}
  if (query.category) {
    const categories = [].concat(query.category)
    if (categories.length > 0) {
      filters["Categories"] = {
        "Slug": {
          $in: categories,
        }
      }
    }
  }
  if (query.award) {
    filters["Award"] = {
      "Slug": {
        $eq: query.award,
      }
    }
  }
  if (query.geography) {
    filters["Geography"] = {
      "Slug": {
        $eq: query.geography,
      }
    }
  }
  let params = qs.stringify({
    populate: '*',
    filters: filters,
    sort: "publishedAt:desc",
    pagination: {
      page: query.page ? parseInt(query.page) : 1,
      pageSize: maxPageSize
    }
  }, { encodeValuesOnly: true });
  const responseSpotlights = await axios.get(`${ STRAPI_ENDPOINT }/api/spotlights-posts?${ params }`)
  if (!responseSpotlights) return null
  const posts = parsePostsSpotlights(responseSpotlights.data.data)
  const meta = parseMetaPagination(responseSpotlights.data.meta.pagination)
  // ---
  params = qs.stringify({
    populate: '*',
    sort: "publishedAt:desc",
    pagination: {
      limit: 99999999
    }
  }, { encodeValuesOnly: true });
  const responseSpotlightsCategories = await axios.get(`${ STRAPI_ENDPOINT }/api/spotlights-categories?${ params }`)
  if (!responseSpotlightsCategories) return null
  const categories = parseCategoriesSpotlights(responseSpotlightsCategories.data.data)
  const responseSpotlightsAwards = await axios.get(`${ STRAPI_ENDPOINT }/api/spotlights-awards?${ params }`)
  if (!responseSpotlightsAwards) return null
  const awards = parseCategoriesSpotlights(responseSpotlightsAwards.data.data)
  const responseSpotlightsGeographies = await axios.get(`${ STRAPI_ENDPOINT }/api/spotlights-geographies?${ params }`)
  if (!responseSpotlightsGeographies) return null
  const geographies = parseCategoriesSpotlights(responseSpotlightsGeographies.data.data)
  return {
    posts: posts,
    meta: meta,
    categories: categories,
    awards: awards,
    geographies: geographies
  }
}

export async function getPostsSpotlightsLite(query) {
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
  let postsLite = null
  const responseSpotlightsLite = await apolloClient.query({
    query: QUERY_POSTS_SPOTLIGHTS_LITE({
      categories: query.category || null,
      award: query.award || null,
      geography: query.geography || null
    }),
    variables: variables
  })
  if (!responseSpotlightsLite) return null
  postsLite = responseSpotlightsLite.data.spotlightsPosts.data
  return postsLite
}

export async function getPostSpotlight(slug) {
  const apolloClient = getApolloClient()
  const responseSpotlight = await apolloClient.query({
    query: QUERY_POST_SPOTLIGHT,
    variables: { slug }
  })
  if (!responseSpotlight || !responseSpotlight.data.spotlightsPosts.data[0]) return null
  // const responseComments = await apolloClient.query({
  //   query: QUERY_SPOTLIGHT_COMMENTS,
  //   variables: { relation: `api::spotlights-post.spotlights-post:${responseSpotlight.data.spotlightsPosts.data[0].id}` }
  // })
  // if (!responseComments) return null
  // let commentsDatas = responseComments.data.findAllFlat.data
  // commentsDatas = parseComments(commentsDatas)
  let post = responseSpotlight.data.spotlightsPosts.data[0].attributes
  post = parsePostSpotlight(post)
  post.id = responseSpotlight.data.spotlightsPosts.data[0].id
  // post.comments = commentsDatas.comments
  // post.comments_length = commentsDatas.comments_length
  return post
}

export async function getPostsSpotlightsWeek() {
  const limit = 7
  let params = qs.stringify({
    populate: '*',
    sort: "publishedAt:desc",
    pagination: { 
      limit: limit 
    }
  }, { encodeValuesOnly: true });  
  const responseSpotlights = await axios.get(`${ STRAPI_ENDPOINT }/api/spotlights-posts?${ params }`)
  if (!responseSpotlights) return null
  const posts = parsePostsSpotlights(responseSpotlights.data.data)
  return posts
}

export async function getPostsSpotlightsMonth() {
  const limit = 4
  let filters = {}
  filters["Award"] = {
    "Slug": {
      $eq: "Week",
    }
  }
  let params = qs.stringify({
    populate: '*',
    filters: filters,
    sort: "publishedAt:desc",
    pagination: { 
      limit: limit 
    }
  }, { encodeValuesOnly: true });  
  const responseSpotlights = await axios.get(`${ STRAPI_ENDPOINT }/api/spotlights-posts?${ params }`)
  if (!responseSpotlights) return null
  const posts = parsePostsSpotlights(responseSpotlights.data.data)
  return posts
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

export async function getCategoriesSpotlights() {
  const apolloClient = getApolloClient()
  const responseSpotlight = await apolloClient.query({
    query: QUERY_CATEGORIES_SPOTLIGHTS
  })
  if (!responseSpotlight) return null
  const categories = responseSpotlight.data.spotlightsCategories.data
  return parseCategoriesSpotlights(categories)
}