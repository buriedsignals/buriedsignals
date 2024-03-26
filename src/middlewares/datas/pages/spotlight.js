// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_SPOTLIGHT = gql`
  query QueryPageSpotlight {
    pages(filters: { Slug: { eq: "spotlight" } }) {
      data {
        attributes {
          Title
          Slug
        }
      }
    }
  }
`
