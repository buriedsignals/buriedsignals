// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_STUDIO = gql`
  query QueryPageStudio {
    pages(filters: { Slug: { eq: "studio" } }) {
      data {
        attributes {
          Title
          Slug
          Dynamic_content {
            ... on ComponentBodyBody {
              Content
            }
            ... on ComponentEmbedVideoEmbedVideo {
              Link
            }
            ... on ComponentIllustrationIllustration {
              Image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
