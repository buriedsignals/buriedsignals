// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_USERS_MEMBERS, QUERY_USER_MEMBER, REGISTER_USER_MEMBER, UPDATE_USER_MEMBER, UPDATE_USER_MEMBER_LIKED_SPOTLIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_SPOTLIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_INSIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_RESOURCES, LOGIN_USER_MEMBER } from "@/middlewares/datas/users/members"
import { parseUsersMembers, parseUserMember } from '../utils'
import { transformToSlug } from '@/scripts/utils'

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

export async function createUserMember(datasRegister, datasUpdateUser) {
  const apolloClient = getApolloClient()
  const responseRegister = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: REGISTER_USER_MEMBER,
    variables: { datas: datasRegister }
  })
  if (!responseRegister) return null
  const responseUpdateUser = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_USER_MEMBER,
    variables: { id: responseRegister.data.register.user.id, datas: datasUpdateUser }
  })
  if (!responseUpdateUser) return null
  return responseUpdateUser
}

export async function loginUserMember(datas) {
  const apolloClient = getApolloClient()
  const responseLogin = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: LOGIN_USER_MEMBER,
    variables: { datas }
  })
  if (!responseLogin) return null
  const responseUser = await apolloClient.query({
    query: QUERY_USER_MEMBER,
    variables: { slug: transformToSlug(responseLogin.data.login.user.username) }
  })
  if (!responseUser) return null
  let user = {...responseUser.data.usersPermissionsUsers.data[0].attributes}
  user = parseUserMember(user)
  user.id = responseUser.data.usersPermissionsUsers.data[0].id
  user.jwt = responseLogin.data.login.jwt
  return user
}

export async function updateUserMember(id, datas) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_USER_MEMBER,
    variables: { id, datas }
  })
  if (!response) return null
  let post = {...response.data.updateUsersPermissionsUser.data.attributes}
  post = parseUserMember(post)
  post.id = response.data.updateUsersPermissionsUser.data.id
  return post
}

export async function updateUserMemberLikedSpotlights(memberId, postIds) {
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
