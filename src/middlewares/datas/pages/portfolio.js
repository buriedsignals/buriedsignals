// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_PORTFOLIO = gql`
  query QueryPagePortfolio {
    pages(filters: { Slug: { eq: "portfolio" } }) {
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
