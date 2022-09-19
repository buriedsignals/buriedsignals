// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_SPOTLIGHTS = gql`
  query QueryPageSpotlights {
    entry(collection: "pages", slug: "spotlights") {
      ... on Entry_Pages_PagesSimple {
        title
        description
      }
    }
  }
`
