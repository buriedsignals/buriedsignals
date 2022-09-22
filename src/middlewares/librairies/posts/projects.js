// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_POSTS_PROJECTS } from "@/middlewares/datas/posts/projects"
import { parsePostsProjects } from '../utils'

export async function getPostsProjects() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_POSTS_PROJECTS,
  })
  if (!response) return null
  let posts = response.data.projectsPosts.data
  return parsePostsProjects(posts)
}