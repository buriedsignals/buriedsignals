// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_RESOURCES_LITE = ({ categories }) => gql`
    query QueryPostsResources${ categories ? `(${ categories ? "$categories: [String]" : "" })` : "" } {
      resourcesPosts(${ categories ? `filters: {${ categories ? " Categories: { Slug: { in: $categories } }" : "" } }, ` : "" }sort: "publishedAt:desc", pagination: { limit: 99999999 }) {
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

export const QUERY_POSTS_RESOURCES = ({ categories, page, pageSize }) => gql`
  query QueryPostsResources${ categories || page ? `(${ categories ? "$categories: [String]" : "" }${ page ? `${ categories ? ", " : "" }$page: Int` : "" })` : "" } {
    resourcesPosts(${ categories ? `filters: {${ categories ? " Categories: { Slug: { in: $categories } }" : "" } }, ` : "" }sort: "publishedAt:desc", pagination: { page: $page, pageSize: ${ pageSize } }) {
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
        }
      }
    }
  }
`