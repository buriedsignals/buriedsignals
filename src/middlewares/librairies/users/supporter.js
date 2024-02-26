// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_USERS_SUPPORTER } from "@/middlewares/datas/users/supporter"
import { parseUsersSupporter } from '../utils'

export async function getUsersSupporter(query) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_USERS_SUPPORTER,
  })
  if (!response) return null
  let posts = response.data.usersPermissionsUsers.data
  return parseUsersSupporter(posts, query)
}
