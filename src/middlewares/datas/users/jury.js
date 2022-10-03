// Nodes
import { gql } from '@apollo/client'

export const QUERY_USERS_JURY = gql`
  query QueryUsersJury {
    juries(sort: "Ordering_date:desc") {
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