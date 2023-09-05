// Middlewares
import { STRAPI_ENDPOINT, getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_RESOURCES, QUERY_POSTS_RESOURCES_LITE } from "@/middlewares/datas/posts/resources"
import { maxPageSize, parseCategoriesResources, parseMetaPagination, parsePostsResources } from '../utils'
// Nodes
import axios from 'axios'
import qs from 'qs';

export async function getPostsResources(query) {
  let filters = {}
  if (query.category) {
    const categories = [].concat(query.category)
    if (categories.length > 0) {
      filters = {
        "Categories": {
          "Slug": {
            $in: categories,
          }
        }
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
  const responseResources = await axios.get(`${ STRAPI_ENDPOINT }/api/resources-posts?${ params }`)
  if (!responseResources) return null
  const posts = parsePostsResources(responseResources.data.data)
  const meta = parseMetaPagination(responseResources.data.meta.pagination)
  // ---
  params = qs.stringify({
    populate: '*',
    sort: "publishedAt:desc",
    pagination: {
      limit: 99999999
    }
  }, { encodeValuesOnly: true });
  const responseResourcesCategories = await axios.get(`${ STRAPI_ENDPOINT }/api/resources-categories?${ params }`)
  if (!responseResourcesCategories) return null
  const categories = parseCategoriesResources(responseResourcesCategories.data.data)
  return {
    posts: posts,
    meta: meta,
    categories: categories
  }
}

export async function _old_getPostsResources(query) {
  const apolloClient = getApolloClient()
  const variables = {}
  if (query.category) {
    variables.categories = [].concat(query.category)
  }
  let postsLite = null
  // if (query.category) {
    const responseResourcesLite = await apolloClient.query({
      query: QUERY_POSTS_RESOURCES_LITE({
        categories: query.category || null
      }),
      variables: variables
    })
    if (!responseResourcesLite) return null
    postsLite = responseResourcesLite.data.resourcesPosts.data
  // }
  variables.page = query.page ? parseInt(query.page) : 1
  let pageSize = Math.floor(maxPostsByPage / maxPostsBySectionByPage) * maxPostsBySectionByPage
  const responseResources = await apolloClient.query({
    query: QUERY_POSTS_RESOURCES({
      categories: query.category || null,
      page: query.page || 1,
      pageSize: pageSize
    }),
    variables: variables
  })
  if (!responseResources) return null
  let posts = responseResources.data.resourcesPosts.data
  // if (postsLite) {
    variables.totalPosts = postsLite.length - 1
    variables.posts = postsLite
  // } else {
  //   variables.totalPosts = responseResources.data.resourcesPosts.meta.pagination.total
  // }
  return parsePostsResources(posts, variables)
}