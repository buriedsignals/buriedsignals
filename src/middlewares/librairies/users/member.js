// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_USERS_MEMBERS, QUERY_USER_MEMBER, QUERY_EXPERTISES_MEMBERS, REGISTER_USER_MEMBER, UPDATE_USER_MEMBER, UPDATE_USER_MEMBER_LIKED_SPOTLIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_SPOTLIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_INSIGHTS, UPDATE_USER_MEMBER_BOOKMARKED_RESOURCES, LOGIN_USER_MEMBER, FORGOT_PASSWORD_USER_MEMBER, RESET_PASSWORD_USER_MEMBER, UPDATE_USER_MEMBER_VOTED_SPOTLIGHTS } from "@/middlewares/datas/users/members"
import { parseUsersDirectory, parseUserMember, parseExpertisesMembers } from '../utils'
import { transformToSlug } from '@/scripts/utils'

export async function getUsersDirectory(query) {
  // const apolloClient = getApolloClient()
  // const response = await apolloClient.query({
  //   query: QUERY_USERS_MEMBERS,
  // })
  // if (!response) return null
  // let posts = response.data.usersPermissionsUsers.data
  // return parseUsersDirectory(posts)
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_USERS_MEMBERS,
  })
  if (!response) return null
  let posts = response.data.usersPermissionsUsers.data
  const variables = {}
  variables.page = query.page ? parseInt(query.page) : 1
  return parseUsersDirectory(posts, variables)
}

export async function getUserMember(slug) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_USER_MEMBER,
    variables: { slug }
  })
  if (!response) return null
  let post = {...response.data.usersPermissionsUsers.data[0].attributes}
  const expertises = await getExpertisesMembers()
  post = parseUserMember(post, expertises)
  post.id = response.data.usersPermissionsUsers.data[0].id
  return post
}


export async function getExpertisesMembers() {
  const apolloClient = getApolloClient()
  const responseSpotlight = await apolloClient.query({
    query: QUERY_EXPERTISES_MEMBERS
  })
  if (!responseSpotlight) return null
  const expertises = responseSpotlight.data.userExpertises.data
  return parseExpertisesMembers(expertises)
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
  const expertises = await getExpertisesMembers()
  user = parseUserMember(user, expertises)
  user.id = responseUser.data.usersPermissionsUsers.data[0].id
  user.jwt = responseLogin.data.login.jwt
  return user
}

export async function forgotPasswordUserMember(email) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: FORGOT_PASSWORD_USER_MEMBER,
    variables: { email }
  })
  if (!response) return null
  return response.data.forgotPassword
}

export async function resetPasswordUserMember(password, passwordConfirmation, code) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: RESET_PASSWORD_USER_MEMBER,
    variables: { password, passwordConfirmation, code }
  })
  if (!response) return null
  return response
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
  const expertises = await getExpertisesMembers()
  post = parseUserMember(post, expertises)
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

export async function updateUserMemberVotedSpotlights(memberId, postIds) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPDATE_USER_MEMBER_VOTED_SPOTLIGHTS,
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
