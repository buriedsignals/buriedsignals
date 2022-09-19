// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_INSIGHTS = gql`
  query QueryPostsInsights {
    entries(collection: "insights") {
      data {
        ... on Entry_Insights_Insight {
          id
          categories {
            title
          }
          content
          date
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

export const QUERY_POST_INSIGHT = gql`
  query QueryPostInsight($slug: String) {
    entry(collection: "insights", slug: $slug) {
      ... on Entry_Insights_Insight {
        id
        categories {
          title
        }
        content
        date
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
`

export const CREATE_POST_INSIGHT = gql`
  mutation CreatePostInsight($slug: String, $data: Object) {
    entry(collection: "insights", slug: $slug, data: $data) {
      ... on Entry_Insights_Insight {
        id
        categories {
          title
        }
        content
        date
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
`

export const UPDATE_POST_INSIGHTS_LIKES = gql`
  mutation UpdatePostInsightsLikes($slug: String, $likes: Int) {
    entry(collection: "insights", slug: $slug, data: { likes: $likes }) {
      likes
    }
  }
`