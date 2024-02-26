// Nodes
import { gql } from '@apollo/client'

export const QUERY_USERS_SUPPORTER = gql`
  query QueryUsersSupporter {
    usersPermissionsUsers(filters: { Show_in_membership: { eq: true } }, sort: "Ordering_date:desc", pagination: { limit: 99999999 }) {
      data {
        id
        attributes {
          username
          Slug
          email
          Show_in_membership
          Show_in_directory
          Description
          Image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          Portfolio_link
          Behance_account
          Twitter_account
          Instagram_account
          Expertises {
            data {
              id
              attributes {
                Title
              }
            }
          }
        }
      }
    }
  }
`