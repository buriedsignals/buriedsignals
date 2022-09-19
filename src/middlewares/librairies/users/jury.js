// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_USERS_JURY } from "@/middlewares/datas/users/jury"
import { parseUsersJury } from '../utils'

export async function getUsersJury() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_USERS_JURY,
  })
  if (!response) return null
  let posts = response.data.users.data
  return parseUsersJury(posts)
}
