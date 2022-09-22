// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_USERS_MEMBERS, QUERY_USER_MEMBER, UPDATE_USER_MEMBER_LIKED_SPOTLIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_SPOTLIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_INSIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_RESOURCES } from "@/middlewares/datas/users/members"
import { parseUsersMembers, parseUserMember } from '../utils'

export async function getUsersMembers() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_USERS_MEMBERS,
  })
  if (!response) return null
  let posts = response.data.usersPermissionsUsers.data
  return parseUsersMembers(posts)
}

export async function getUserMember(slug) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_USER_MEMBER,
    variables: { slug }
  })
  if (!response) return null
  let post = {...response.data.usersPermissionsUsers.data[0].attributes}
  post = parseUserMember(post)
  post.id = response.data.usersPermissionsUsers.data[0].id
  return post
}

export async function UpdateUserMemberLikedSpotlights(memberId, postIds) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_USER_MEMBER_LIKED_SPOTLIGHTS,
    variables: { memberId, postIds }
  })
  if (!response) return null
  return response
}

export async function updateUserMemberBookmarkedSpotlights(memberId, postIds) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_USER_MEMBER_BOOKMARKED_SPOTLIGHTS,
    variables: { memberId, postIds }
  })
  if (!response) return null
  return response
}

export async function updateUserMemberBookmarkedInsights(memberId, postIds) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_USER_MEMBER_BOOKMARKED_INSIGHTS,
    variables: { memberId, postIds }
  })
  if (!response) return null
  return response
}

export async function updateUserMemberBookmarkedResources(memberId, postIds) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_USER_MEMBER_BOOKMARKED_RESOURCES,
    variables: { memberId, postIds }
  })
  if (!response) return null
  return response
}
