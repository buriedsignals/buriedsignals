// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_SPOTLIGHTS = gql`
  query QueryPageSpotlights {
    pages(filters: { Slug: { eq: "spotlights" } }) {
      data {
        attributes {
          Title
          Slug
          Description
          Meta_title
          Meta_description
          Meta_keywords
          Meta_image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`
