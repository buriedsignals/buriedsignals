// Nodes
import { gql } from '@apollo/client'

export const QUERY_USERS_MEMBERS = gql`
  query QueryUsersMembers {
    usersPermissionsUsers {
      data {
        id
        attributes {
          Slug
        }
      }
    }
  }
`

export const QUERY_USER_MEMBER = gql`
  query QueryUsersMember($slug: String) {
    usersPermissionsUsers(filters: { Slug: { eq: $slug } }) {
      data {
        id
        attributes {
          username
          Slug
          Twitter_account
          email
          Description
          Bookmarked_spotlights {
            data {
              id
              attributes {
                Title
                Slug
                Image {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                Description
                Source_author
                Source_link
                Categories {
                  data {
                    attributes {
                      Title
                    }
                  }
                }
                Award {
                  data {
                    attributes {
                      Title
                    }
                  }
                }
                Likes
                Submited_by_external
                Submited_by {
                  data {
                    attributes {
                      Name
                      Image {
                        data {
                          attributes {
                            alternativeText
                            url
                          }
                        }
                      }
                      Portfolio_link
                    }
                  }
                }
              }
            }
          }
          Bookmarked_insights {
            data {
              id
              attributes {
                Title
                Slug
                Image {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                Description
                Source_author
                Source_title
                Source_link
                Categories {
                  data {
                    attributes {
                      Title
                    }
                  }
                }
                updatedAt
                Dynamic_content {
                  ... on ComponentBodyBody {
                    Content
                  }
                  ... on ComponentIllustrationIllustration {
                    Image {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                  ... on ComponentEmbedVideoEmbedVideo {
                    Link
                  }
                }
              }
            }
          }
          Bookmarked_resources {
            data {
              id
              attributes {
                Title
                Slug
                Image {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                Description
                Source_title
                Source_link
                Categories {
                  data {
                    attributes {
                      Title
                    }
                  }
                }
              }
            }
          }
          Liked_spotlights {
            data {
              id
            }
          }
          Voted_effectiveness_spotlights {
            data {
              id
            }
          }
        }
      }
    }
  }
`

export const CREATE_USER_MEMBER = gql`
  mutation CreateUserMember($datas: UsersPermissionsUserInput!) {
    createUsersPermissionsUser(data: $datas) {
      data {
        id
        attributes {
          username
          Slug
          Twitter_account
          email
          Description
            Bookmarked_spotlights {
              data {
                id
                attributes {
                  Title
                  Slug
                  Image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  Description
                  Source_author
                  Source_link
                  Categories {
                    data {
                      attributes {
                        Title
                      }
                    }
                  }
                  Award {
                    data {
                      attributes {
                        Title
                      }
                    }
                  }
                  Likes
                  Submited_by_external
                  Submited_by {
                    data {
                      attributes {
                        Name
                        Image {
                          data {
                            attributes {
                              alternativeText
                              url
                            }
                          }
                        }
                        Portfolio_link
                      }
                    }
                  }
                }
              }
            }
            Bookmarked_insights {
              data {
                id
                attributes {
                  Title
                  Slug
                  Image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  Description
                  Source_author
                  Source_title
                  Source_link
                  Categories {
                    data {
                      attributes {
                        Title
                      }
                    }
                  }
                  updatedAt
                  Dynamic_content {
                    ... on ComponentBodyBody {
                      Content
                    }
                    ... on ComponentIllustrationIllustration {
                      Image {
                        data {
                          attributes {
                            url
                            alternativeText
                          }
                        }
                      }
                    }
                    ... on ComponentEmbedVideoEmbedVideo {
                      Link
                    }
                  }
                }
              }
            }
            Bookmarked_resources {
              data {
                id
                attributes {
                  Title
                  Slug
                  Image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  Description
                  Source_title
                  Source_link
                  Categories {
                    data {
                      attributes {
                        Title
                      }
                    }
                  }
                }
              }
            }
            Liked_spotlights {
              data {
                id
              }
            }
            Voted_effectiveness_spotlights {
              data {
                id
              }
            }
        }
      }
    }
  }
`

export const REGISTER_USER_MEMBER = gql`
  mutation RegisterUserMember($datas: UsersPermissionsRegisterInput!) {
    register(input: $datas) {
      user {
        id
        username
      }
    }
  }
`

export const LOGIN_USER_MEMBER = gql`
  mutation LoginUserMember($datas: UsersPermissionsLoginInput!) {
    login(input: $datas) {
      jwt
      user {
        username
      }
    }
  }
`

export const FORGOT_PASSWORD_USER_MEMBER = gql`
mutation ForgotPasswordUserMember($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
`

export const RESET_PASSWORD_USER_MEMBER = gql`
mutation ResetPasswordUserMember($password: String!, $passwordConfirmation: String!, $code: String!) {
  resetPassword(password: $password, passwordConfirmation: $passwordConfirmation, code: $code) {
    jwt
    user {
      username
    }
  }
}
`

export const UPDATE_USER_MEMBER = gql`
  mutation UpdateUserMember($id: ID!, $datas: UsersPermissionsUserInput!) {
    updateUsersPermissionsUser(id: $id, data: $datas) {
      data {
        id
        attributes {
          username
          Slug
          Twitter_account
          email
          Description
            Bookmarked_spotlights {
              data {
                id
                attributes {
                  Title
                  Slug
                  Image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  Description
                  Source_author
                  Source_link
                  Categories {
                    data {
                      attributes {
                        Title
                      }
                    }
                  }
                  Award {
                    data {
                      attributes {
                        Title
                      }
                    }
                  }
                  Likes
                  Submited_by_external
                  Submited_by {
                    data {
                      attributes {
                        Name
                        Image {
                          data {
                            attributes {
                              alternativeText
                              url
                            }
                          }
                        }
                        Portfolio_link
                      }
                    }
                  }
                }
              }
            }
            Bookmarked_insights {
              data {
                id
                attributes {
                  Title
                  Slug
                  Image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  Description
                  Source_author
                  Source_title
                  Source_link
                  Categories {
                    data {
                      attributes {
                        Title
                      }
                    }
                  }
                  updatedAt
                  Dynamic_content {
                    ... on ComponentBodyBody {
                      Content
                    }
                    ... on ComponentIllustrationIllustration {
                      Image {
                        data {
                          attributes {
                            url
                            alternativeText
                          }
                        }
                      }
                    }
                    ... on ComponentEmbedVideoEmbedVideo {
                      Link
                    }
                  }
                }
              }
            }
            Bookmarked_resources {
              data {
                id
                attributes {
                  Title
                  Slug
                  Image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  Description
                  Source_title
                  Source_link
                  Categories {
                    data {
                      attributes {
                        Title
                      }
                    }
                  }
                }
              }
            }
            Liked_spotlights {
              data {
                id
              }
            }
            Voted_effectiveness_spotlights {
              data {
                id
              }
            }
        }
      }
    }
  }
`

export const UPDATE_USER_MEMBER_LIKED_SPOTLIGHTS = gql`
  mutation UpdateUserMemberLikedSpotlights($memberId: ID!, $postIds: [Id]) {
    updateUsersPermissionsUser(id: $memberId, data: { Liked_spotlights: $postIds }) {
      data {
        id
      }
    }
  }
`

export const UPDATE_USER_MEMBER_VOTED_SPOTLIGHTS = gql`
  mutation UpdateUserMemberVotedSpotlights($memberId: ID!, $postIds: [Id]) {
    updateUsersPermissionsUser(id: $memberId, data: { Voted_effectiveness_spotlights: $postIds }) {
      data {
        id
      }
    }
  }
`

export const UPDATE_USER_MEMBER_BOOKMARKED_SPOTLIGHTS = gql`
  mutation UpdateUserMemberBookmarkedSpotlights($memberId: ID!, $postIds: [Id]) {
    updateUsersPermissionsUser(id: $memberId, data: { Bookmarked_spotlights: $postIds }) {
      data {
        id
      }
    }
  }
`

export const UPDATE_USER_MEMBER_BOOKMARKED_INSIGHTS = gql`
  mutation UpdateUserMemberBookmarkedInsights($memberId: ID!, $postIds: [Id]) {
    updateUsersPermissionsUser(id: $memberId, data: { Bookmarked_insights: $postIds }) {
      data {
        id
      }
    }
  }
`

export const UPDATE_USER_MEMBER_BOOKMARKED_RESOURCES = gql`
  mutation UpdateUserMemberBookmarkedResources($memberId: ID!, $postIds: [Id]) {
    updateUsersPermissionsUser(id: $memberId, data: { Bookmarked_resources: $postIds }) {
      data {
        id
      }
    }
  }
`
