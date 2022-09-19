// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_JURY = gql`
  query QueryPageJury {
    entry(collection: "pages", slug: "jury") {
      ... on Entry_Pages_PagesSimple {
        title
        description
      }
    }
  }
`
