// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_RESOURCES = ({ categories }) => gql`
    query QueryPostsResources${ categories ? `(${ categories ? "$categories: [String]" : "" })` : "" } {
      resourcesPosts(${ categories ? `filters: {${ categories ? " Categories: { Slug: { in: $categories } }" : "" } }, ` : "" }sort: "publishedAt:desc", pagination: { limit: 99999999 }) {
      data {
        id
        attributes {
          Title
          Slug
          Image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          Description
          Source_title
          Source_link
          Categories {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
        }
      }
    }
  }
`