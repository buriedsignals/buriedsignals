// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_SUPPORTERS = gql`
  query QueryPageSupporters {
    pages(filters: { Slug: { eq: "supporters" } }) {
      data {
        attributes {
          Title
          Slug
          Description
          Dynamic_content {
            ... on ComponentListIncludesListIncludes {
              Title
              Items {
                Text
                Soon
              }
            }
          }
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
