// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_INSIGHTS = gql`
  query QueryPageInsights {
    entry(collection: "pages", slug: "insights") {
      ... on Entry_Pages_PagesSimple {
        title
        description
      }
    }
  }
`
