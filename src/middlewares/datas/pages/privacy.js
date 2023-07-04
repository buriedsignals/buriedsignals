// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_PRIVACY = gql`
  query QueryPagePrivacy {
    pages(filters: { Slug: { eq: "privacy" } }) {
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
          Meta_title
          Meta_description
          Meta_keywords
          Meta_image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`
