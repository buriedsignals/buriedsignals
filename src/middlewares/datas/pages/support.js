// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_SUPPORT = gql`
  query QueryPageSupport {
    pages(filters: { Slug: { eq: "support" } }) {
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
