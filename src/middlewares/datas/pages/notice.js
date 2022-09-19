// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_NOTICE = gql`
  query QueryPageNotice {
    entry(collection: "pages", slug: "notice") {
      ... on Entry_Pages_PagesContent {
        title
        content
      }
    }
  }
`
