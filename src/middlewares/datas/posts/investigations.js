// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_INVESTIGATIONS_LITE = gql`
  query QueryPostsInvestigations {
    investigationsPosts {
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

export const QUERY_POSTS_INVESTIGATIONS = gql`
  query QueryPostsInvestigations {
    investigationsPosts {
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