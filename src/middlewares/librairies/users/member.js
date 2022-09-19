// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_USERS_MEMBERS, QUERY_USER_MEMBER } from "@/middlewares/datas/users/members"
import { parseUsersMembers, parseUserMember } from '../utils'

export async function getUsersMembers() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_USERS_MEMBERS,
  })
  if (!response) return null
  let posts = response.data.users.data
  return parseUsersMembers(posts)
}

export async function getUserMember(id) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_USER_MEMBER,
    variables: { id }
  })
  if (!response) return null
  let posts = response.data.user
  return parseUserMember(posts)
}
