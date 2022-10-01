// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_RESOURCES = gql`
  query QueryPostsResources {
    resourcesPosts(sort: "updatedAt:desc", pagination: { limit: 99999999 }) {
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
              }
            }
          }
        }
      }
    }
  }
`