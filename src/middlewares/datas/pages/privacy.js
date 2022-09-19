// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_PRIVACY = gql`
  query QueryPagePrivacy {
    entry(collection: "pages", slug: "privacy") {
      ... on Entry_Pages_PagesContent {
        title
        content
      }
    }
  }
`
