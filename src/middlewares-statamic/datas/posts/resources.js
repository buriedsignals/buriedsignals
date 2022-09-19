// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_RESOURCES = gql`
  query QueryPostsResources {
    entries(collection: "resources") {
      data {
        ... on Entry_Resources_Resource {
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