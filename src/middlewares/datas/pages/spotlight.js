// Nodes
import { gql } from '@apollo/client'

export const QUERY_PAGE_SPOTLIGHT = gql`
  query QueryPageSpotlight {
    pages(filters: { Slug: { eq: "spotlight" } }) {
      data {
        attributes {
          Title
          Slug
          Dynamic_content {
            ... on ComponentMetricsMetrics {
              Title_effectiveness
              Description_effectiveness_information
              Description_effectiveness_vote
              Title_virality
              Description_virality_information
            }
          }
        }
      }
    }
  }
`
