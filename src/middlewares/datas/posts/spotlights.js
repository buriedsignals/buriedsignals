// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_SPOTLIGHTS = gql`
  query QueryPostsSpotlights {
    spotlightsPosts(sort: "publishedAt:desc", pagination: { limit: 99999999 }) {
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
          Geography {
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
          Geography {
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

export const QUERY_POSTS_SPOTLIGHTS_LATEST = gql`
  query QueryPostsSpotlights($limit: Int) {
    spotlightsPosts(sort: "publishedAt:desc", pagination: { limit: $limit }) {
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
          Geography {
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
  query QueryPostsSpotlights($week_start: DateTime, $week_end: DateTime) {
    spotlightsPosts(filters: { and: [ { publishedAt: { gte: $week_start } }, { publishedAt: { lte: $week_end } }] }, pagination: { limit: 99999999 }) {
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
          Geography {
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
  query QueryPostsSpotlights($month_start: DateTime, $month_end: DateTime) {
    spotlightsPosts(filters: { and: [ { publishedAt: { gte: $month_start } }, { publishedAt: { lte: $month_end } }] }, pagination: { limit: 99999999 }) {
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
          Geography {
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

export const CREATE_SPOTLIGHT_COMMENT = gql`
  mutation CreateCommentSpotlight($datas: CreateComment!) {
    createComment(input: $datas) {
      id
    }
  }
`

export const QUERY_SPOTLIGHT_COMMENTS = gql`
  query QuerySpotlightsComments($relation: String!) {
    findAllFlat(relation: $relation, sort: "createdAt:asc") {
      data {
        id
        content
        createdAt
        blocked
        threadOf {
          id
        }
        author {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_SPOTLIGHT_COMMENT = gql`
mutation UpdateSpotlightComment($datas: UpdateComment!) {
  updateComment(input: $datas) {
    id
  }
}
`

export const DELETE_SPOTLIGHT_COMMENT = gql`
mutation DeleteSpotlightComment($datas: RemoveComment!) {
  removeComment(input: $datas) {
    id
    removed
  }
}
`