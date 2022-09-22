// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_SPOTLIGHTS = gql`
  query QueryPageSpotlights {
    pages(filters: { Slug: { eq: "spotlights" } }) {
      data {
        attributes {
          Title
          Slug
          Description
        }
      }
    }
  }
`
