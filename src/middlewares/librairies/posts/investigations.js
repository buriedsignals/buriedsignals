// Middlewares
import { STRAPI_ENDPOINT, getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_INVESTIGATIONS_LITE } from "@/middlewares/datas/posts/investigations"
// Scripts
import { parsePostsInvestigations, maxPageSize, parseMetaPagination } from '../utils'
// Nodes
import axios from 'axios'
import qs from 'qs';

export async function getPostsInvestigations(query) {
  let params = qs.stringify({
    populate: '*',
    sort: "publishedAt:desc",
    pagination: {
      page: query.page ? parseInt(query.page) : 1,
      pageSize: maxPageSize
    }
  }, { encodeValuesOnly: true });
  const responseInvestigations = await axios.get(`${ STRAPI_ENDPOINT }/api/investigations-posts?${ params }`)
  if (!responseInvestigations) return null
  const posts = parsePostsInvestigations(responseInvestigations.data.data)
  const meta = parseMetaPagination(responseInvestigations.data.meta.pagination)
  // ---
  return {
    posts: posts,
    meta: meta
  }
}

export async function getPostsInvestigationsLite(query) {
  const apolloClient = getApolloClient()
  let postsLite = null
  const responseInvestigationsLite = await apolloClient.query({
    query: QUERY_POSTS_INVESTIGATIONS_LITE
  })
  if (!responseInvestigationsLite) return null
  postsLite = responseInvestigationsLite.data.investigationsPosts.data
  return postsLite
}