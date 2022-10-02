// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_PROJECTS = gql`
  query QueryPostsProjects {
    projectsPosts(sort: "createdAt:desc", pagination: { limit: 99999999 }) {
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
          Source_author
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