// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_SPOTLIGHTS = gql`
  query QueryPostsSpotlights {
    entries(collection: "spotlights") {
      data {
        ... on Entry_Spotlights_Spotlight {
          id
          categories {
            title
          }
          awards {
            title
          }
          description
          image {
            ... on Asset_Assets {
              alt
              permalink
            }
          }
          likes
          slug
          source_author
          source_title
          source_url
          submited_by {
            avatar {
              permalink
            }
            name
            id
          }
          title
        }
      }
    }
  }
`

export const QUERY_POST_SPOTLIGHT = gql`
  query QueryPostSpotlight($slug: String) {
    entry(collection: "spotlights", slug: $slug) {
      ... on Entry_Spotlights_Spotlight {
        id
        categories {
          title
        }
        awards {
          title
        }
        description
        image {
          ... on Asset_Assets {
            alt
            permalink
          }
        }
        likes
        slug
        source_author
        source_title
        source_url
        submited_by {
          avatar {
            permalink
          }
          name
          id
        }
        title
      }
    }
  }
`

export const CREATE_POST_SPOTLIGHT = gql`
  mutation CreatePostSpotlight($slug: String, $data: Object) {
    entry(collection: "spotlights", slug: $slug, data: $data) {
      ... on Entry_Spotlights_Spotlight {
        id
        categories {
          title
        }
        awards {
          title
        }
        description
        image {
          ... on Asset_Assets {
            alt
            permalink
          }
        }
        likes
        slug
        source_author
        source_title
        source_url
        submited_by {
          avatar {
            permalink
          }
          name
          id
        }
        title
      }
    }
  }
`

export const UPDATE_POST_SPOTLIGHT_LIKES = gql`
mutation {
  updatePage(id: 1, data: { spotlights_categories: ["3"] } ) {
    data {
      attributes {
        Title
        Slug
        spotlights_categories {
          data {
            id
            attributes {
              Title
            }
          }
        }
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
        }
      }
    }
  }
}
`

export const UPDATE_POST_SPOTLIGHT_AWARDS = gql`
mutation {
  updatePage(id: 1, data: { spotlights_categories: ["2"] } ) {
    data {
      attributes {
        Title
        Slug
        spotlights_categories {
          data {
            id
            attributes {
              Title
            }
          }
        }
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
        }
      }
    }
  }
}
`