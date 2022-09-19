// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_PROJECTS = gql`
  query QueryPostsProjects {
    entries(collection: "projects") {
      data {
        ... on Entry_Projects_Project {
          id
          categories {
            title
          }
          description
          image {
            ... on Asset_Assets {
              alt
              permalink
            }
          }
          slug
          source_author
          source_title
          source_url
          title
        }
      }
    }
  }
`