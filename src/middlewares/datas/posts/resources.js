// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_RESOURCES = gql`
  query QueryPostsResources {
    resourcesPosts {
      data {
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