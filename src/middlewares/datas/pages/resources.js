// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_RESOURCES = gql`
  query QueryPageResources {
    entry(collection: "pages", slug: "resources") {
      ... on Entry_Pages_PagesSimple {
        title
        description
      }
    }
  }
`
