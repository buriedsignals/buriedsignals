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
  mutation UpdatePostSpotlightLikes($id: String, $likes: Int) {
    entry(collection: "spotlights", id: $id, data: { likes: $likes }) {
      likes
    }
  }
`

export const UPDATE_POST_SPOTLIGHT_AWARDS = gql`
  mutation UpdatePostSpotlightAwards($slug: String, $awards: Object) {
    entry(collection: "spotlights", slug: $slug, data: { awards: $awards }) {
      awards
    }
  }
`