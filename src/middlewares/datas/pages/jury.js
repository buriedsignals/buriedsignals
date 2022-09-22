// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_JURY = gql`
  query QueryPageJury {
    pages(filters: { Slug: { eq: "jury" } }) {
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
