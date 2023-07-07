// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_RESOURCES = gql`
  query QueryPageResources {
    pages(filters: { Slug: { eq: "resources" } }) {
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
