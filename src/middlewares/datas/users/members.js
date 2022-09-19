// Nodes
import { gql } from '@apollo/client'

export const QUERY_USERS_MEMBERS = gql`
  query QueryUsersMembers {
    users {
      data {
        id
        group {
          title
        }
        name
      }
    }
  }
`

export const QUERY_USER_MEMBER = gql`
  query QueryUserMember($id: String) {
    user(id: $id) {
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

export const UPDATE_USER_MEMBER_LIKED = gql`
  mutation UpdateUserMemberLiked($id: String, $liked: Boolean) {
    user(id: $id, data: { liked: $liked }) {
      liked
    }
  }
`

export const UPDATE_USER_MEMBER_BOOKMARKED_SPOTLIGHTS = gql`
  mutation UpdateUserMemberBookmarkedSpotlights($id: String, $bookmarked_spotlights: Array) {
    user(id: $id, data: { bookmarked_spotlights: $bookmarked_spotlights }) {
      bookmarked_spotlights
    }
  }
`

export const UPDATE_USER_MEMBER_BOOKMARKED_INSIGHTS = gql`
  mutation UpdateUserMemberBookmarkedInsights($id: String, $bookmarked_insights: Array) {
    user(id: $id, data: { bookmarked_insights: $bookmarked_insights }) {
      bookmarked_insights
    }
  }
`