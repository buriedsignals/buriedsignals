// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_INVESTIGATIONS = gql`
  query QueryPageInvestigations {
    pages(filters: { Slug: { eq: "investigations" } }) {
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
