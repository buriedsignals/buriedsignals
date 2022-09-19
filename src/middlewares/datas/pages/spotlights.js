// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_SPOTLIGHTS = gql`
  query QueryPageSpotlights {
    document(id: 1) {
      data {
        id
        attributes {
          title
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
