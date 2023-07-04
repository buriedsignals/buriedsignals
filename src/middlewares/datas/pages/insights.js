// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_INSIGHTS = gql`
  query QueryPageInsights {
    pages(filters: { Slug: { eq: "insights" } }) {
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
