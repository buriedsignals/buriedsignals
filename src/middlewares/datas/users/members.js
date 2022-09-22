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
        }
      }
    }
  }
`

// A faire login
export const CREATE_USER_MEMBER = gql`
  mutation CreateUserMember($data: Object) {
    user(data: $data) {
      name
      twitter_account
      email
      group {
        title
      }
      description
      bookmarked_spotlights {
        ... on Entry_Spotlights_Spotlight {
          id
          categories {
            title
          }
          awards {
            title
          }
          description
          image {
            ... on Asset_Assets {
              alt
              permalink
            }
          }
          likes
          slug
          source_author
          source_title
          source_url
          submited_by {
            avatar {
              permalink
            }
            name
            id
          }
          title
        }
      }
      bookmarked_insights {
        ... on Entry_Insights_Insight {
          id
          categories {
            title
          }
          content
          date
          description
          image {
            ... on Asset_Assets {
              alt
              permalink
            }
          }
          slug
          source_author
          source_title
          source_url
          title
        }
      }
    }
  }
`

// A faire edit
export const UPDATE_USER_MEMBER = gql`
  mutation UpdateUserMemberLiked($id: String, $liked: Boolean) {
    user(id: $id, data: { liked: $liked }) {
      liked
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
