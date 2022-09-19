// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_ABOUT_US = gql`
  query QueryPageNotice {
    entry(collection: "pages", slug: "about-us") {
      ... on Entry_Pages_PagesContent {
        title
        content
      }
    }
  }
`
