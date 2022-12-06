// Nodes
import { gql } from '@apollo/client'

export const QUERY_USERS_JURY = gql`
  query QueryUsersJury {
    juries(sort: "Ordering_date:desc", pagination: { limit: 99999999 }) {
      data {
        attributes {
          Name
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
        }
      }
    }
  }
`