// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_PUBLICATION = gql`
  query QueryPageAboutUs {
    pages(filters: { Slug: { eq: "about-us" } }) {
      data {
        attributes {
          Title
          Slug
          Description
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
