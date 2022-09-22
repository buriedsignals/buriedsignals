// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_SPOTLIGHTS = gql`
  query QueryPostsSpotlights {
    spotlightsPosts {
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
          Source_link
          Categories {
            data {
              attributes {
                Title
              }
            }
          }
          Award {
            data {
              attributes {
                Title
              }
            }
          }
          Likes
          Submited_by {
            data {
              attributes {
                Name
                Image {
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
      }
    }
  }
`

export const QUERY_POST_SPOTLIGHT = gql`
  query QueryPostSpotlight($slug: String) {
    spotlightsPosts(filters: { Slug: { eq: $slug } }) {
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
          Source_link
          Categories {
            data {
              attributes {
                Title
              }
            }
          }
          Award {
            data {
              attributes {
                Title
              }
            }
          }
          Likes
          Submited_by {
            data {
              attributes {
                Name
                Image {
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
      }
    }
  }
`

export const QUERY_POSTS_SPOTLIGHTS_WEEK = gql`
  query QueryPostsSpotlights($week_start: String, $week_end: String) {
    spotlightsPosts(filters: { and: [ { publishedAt: { gte: $week_start } }, { publishedAt: { lte: $week_end } }] }) {
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
          Source_link
          Categories {
            data {
              attributes {
                Title
              }
            }
          }
          Award {
            data {
              attributes {
                Title
              }
            }
          }
          Likes
          Submited_by {
            data {
              attributes {
                Name
                Image {
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
      }
    }
  }
`

export const QUERY_POSTS_SPOTLIGHTS_MONTH = gql`
  query QueryPostsSpotlights($month_start: String, $month_end: String) {
    spotlightsPosts(filters: { and: [ { publishedAt: { gte: $month_start } }, { publishedAt: { lte: $month_end } }] }) {
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
          Source_link
          Categories {
            data {
              attributes {
                Title
              }
            }
          }
          Award {
            data {
              attributes {
                Title
              }
            }
          }
          Likes
          Submited_by {
            data {
              attributes {
                Name
                Image {
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
      }
    }
  }
`

export const CREATE_POST_SPOTLIGHT = gql`
  mutation CreatePostSpotlight($data: SpotlightsPostInput!) {
    createSpotlightsPost(data: $data) {
      data {
        id
      }
    }
  }
`

export const UPDATE_POST_SPOTLIGHT_LIKES = gql`
  mutation MutationPostSpotlightLikes($id: ID!, $likes: Int) {
    updateSpotlightsPost(id: $id, data: { Likes: $likes }) {
      data {
        id
      }
    }
  }
`

export const UPDATE_POST_SPOTLIGHT_AWARDS = gql`
  mutation MutationPostSpotlightAwards($id: ID!, $awardId: Id) {
    updateSpotlightsPost(id: $id, data: { Award: $awardId }) {
      data {
        id
      }
    }
  }
`