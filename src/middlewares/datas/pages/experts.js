// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_EXPERTS = gql`
  query QueryPageExperts {
    pages(filters: { Slug: { eq: "experts" } }) {
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
