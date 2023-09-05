// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_DIRECTORY = gql`
  query QueryPageDirectory {
    pages(filters: { Slug: { eq: "directory" } }) {
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
