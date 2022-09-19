// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_STUDIO = gql`
  query QueryPageStudio {
    entry(collection: "pages", slug: "studio") {
      ... on Entry_Pages_PagesContent {
        title
        content
      }
    }
  }
`
