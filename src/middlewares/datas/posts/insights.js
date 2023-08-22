// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_INSIGHTS_LITE = ({ categories }) => gql`
  query QueryPostsInsights${ categories ? `(${ categories ? "$categories: [String]" : "" })` : "" } {
    insightsPosts(${ categories ? `filters: {${ categories ? " Categories: { Slug: { in: $categories } }" : "" } }, ` : "" }sort: "publishedAt:desc", pagination: { limit: 99999999 }) {
      data {
        id
        attributes {
          Slug
          Categories {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
        }
      }
    }
  }
`

export const QUERY_POSTS_INSIGHTS = ({ categories, page, pageSize }) => gql`
  query QueryPostsInsights${ categories || page ? `(${ categories ? "$categories: [String]" : "" }${ page ? `${ categories ? ", " : "" }$page: Int` : "" })` : "" } {
    insightsPosts(${ categories ? `filters: {${ categories ? " Categories: { Slug: { in: $categories } }" : "" } }, ` : "" }sort: "publishedAt:desc", pagination: { page: $page, pageSize: ${ pageSize } }) {
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
          Source_title
          Source_link
          Categories {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
          updatedAt
          Dynamic_content {
            ... on ComponentBodyBody {
              Content
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
            ... on ComponentEmbedVideoEmbedVideo {
              Link
            }
          }
        }
      }
    }
  }
`

export const QUERY_POST_INSIGHT = gql`
  query QueryPostInsight($slug: String) {
    insightsPosts(filters: { Slug: { eq: $slug } }) {
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
          Source_title
          Source_link
          Categories {
            data {
              attributes {
                Title
              }
            }
          }
          updatedAt
          Dynamic_content {
            ... on ComponentBodyBody {
              Content
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
            ... on ComponentEmbedVideoEmbedVideo {
              Link
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