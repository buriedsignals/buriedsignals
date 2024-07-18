// Middlewares
import { STRAPI_ENDPOINT, getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_PROJECTS_LITE } from "@/middlewares/datas/posts/projects"
// Scripts
import { parsePostsProjects, maxPageSize, parseMetaPagination } from '../utils'
// Nodes
import axios from 'axios'
import qs from 'qs';

export async function getPostsProjects(query) {
  let params = qs.stringify({
    populate: '*',
    sort: "Position:asc",
    pagination: {
      page: query.page ? parseInt(query.page) : 1,
      pageSize: maxPageSize
    }
  }, { encodeValuesOnly: true });
  const responseProjects = await axios.get(`${ STRAPI_ENDPOINT }/api/projects-posts?${ params }`)
  if (!responseProjects) return null
  const posts = parsePostsProjects(responseProjects.data.data)
  const meta = parseMetaPagination(responseProjects.data.meta.pagination)
  // ---
  return {
    posts: posts,
    meta: meta
  }
}

export async function getPostsProjectsLite(query) {
  const apolloClient = getApolloClient()
  let postsLite = null
  const responseProjectsLite = await apolloClient.query({
    query: QUERY_POSTS_PROJECTS_LITE
  })
  if (!responseProjectsLite) return null
  postsLite = responseProjectsLite.data.projectsPosts.data
  return postsLite
}