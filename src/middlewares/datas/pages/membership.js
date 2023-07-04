// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_MEMBERSHIP = gql`
  query QueryPageMembership {
    pages(filters: { Slug: { eq: "membership" } }) {
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
