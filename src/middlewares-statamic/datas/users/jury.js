// Nodes
import { gql } from '@apollo/client'

export const QUERY_USERS_JURY = gql`
  query QueryUsersJury {
    users {
      data {
        avatar {
          ... on Asset_Assets {
            alt
            permalink
          }
        }
        description
        email
        name
        group {
          title
        }
        twitter_account
      }
    }
  }
`