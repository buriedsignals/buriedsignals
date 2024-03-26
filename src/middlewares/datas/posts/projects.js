// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_PROJECTS_LITE = gql`
  query QueryPostsProjects {
    projectsPosts(sort: "Position:asc") {
      data {
        id
        attributes {
          Slug
          Source_author
          Source_link
        }
      }
    }
  }
`

export const QUERY_POSTS_PROJECTS = gql`
  query QueryPostsProjects {
    projectsPosts(sort: "Position:asc") {
      meta {
        pagination {
          total
        }
      }
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
        }
      }
    }
  }
`