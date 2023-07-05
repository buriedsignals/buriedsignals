// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_SPOTLIGHTS = ({ categories, award, geography }) => gql`
  query QueryPostsSpotlights${ categories || award || geography ? `(${ categories ? "$categories: [String]" : "" }${ award ? `${ categories ? ", " : "" }$award: String` : "" }${ geography ? `${ categories || award ? ", " : "" }$geography: String` : "" })` : "" } {
    spotlightsPosts(${ categories || award || geography ? `filters: {${ categories ? " Categories: { Slug: { in: $categories } }" : "" }${ award ? `${ categories ? "," : "" } Award: { Slug: { eq: $award } }` : "" }${ geography ? `${ categories || award ? "," : "" } Geography: { Slug: { eq: $geography } }` : "" }}, ` : "" }sort: "publishedAt:desc", pagination: { limit: 99999999 }) {
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
                Slug
              }
            }
          }
          Award {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
          Geography {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
          Likes
          Submited_by_external
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
                Portfolio_link
              }
            }
          }
          Metrics_effectiveness_votes
          Metrics_virality_backlinks
          Archive {
            data {
              attributes {
                Slug
              }
            }
          }
        }
      }
    }
  }
`

export const QUERY_POSTS_SPOTLIGHTS_OLD = gql`
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
          Submited_by_external
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
                Portfolio_link
              }
            }
          }
          Metrics_virality_backlinks
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
          Submited_by_external
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
                Portfolio_link
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
          Archive {
            data {
              attributes {
                Slug
              }
            }
          }
          Metrics_effectiveness_votes
          Metrics_effectiveness_value
          Metrics_effectiveness_description_information
          Metrics_effectiveness_description_vote
          Metrics_virality_backlinks
          Metrics_virality_value
          Metrics_virality_description_information
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
          Submited_by_external
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
                Portfolio_link
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
          Submited_by_external
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
                Portfolio_link
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
          Submited_by_external
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
                Portfolio_link
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

export const UPDATE_POST_SPOTLIGHT_VOTES = gql`
  mutation MutationPostSpotlightVotes($id: ID!, $votes: String) {
    updateSpotlightsPost(id: $id, data: { Metrics_effectiveness_votes: $votes }) {
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

export const UPDATE_POST_SPOTLIGHT_METRICS_VALUE = gql`
mutation MutationPostSpotlightMetricsValue($id: ID!, $metricsEffectivenessValue: Float, $metricsViralityValue: Float) {
  updateSpotlightsPost(id: $id, data: { Metrics_effectiveness_value: $metricsEffectivenessValue, Metrics_virality_value: $metricsViralityValue }) {
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

export const QUERY_POSTS_SPOTLIGHTS_ARCHIVES = gql`
  query QueryPostsSpotlightsArchives {
    spotlightsArchives(sort: "publishedAt:desc", pagination: { limit: 99999999 }) {
      data {
        id
        attributes {
          Title
          Slug
          File_wacz {
            data {
              attributes {
                url
              }
            }
          }
          Spotlight {
            data {
              attributes {
                Title
              }
            }
          }
        }
      }
    }
  }
`


export const QUERY_POST_SPOTLIGHT_ARCHIVE = gql`
  query QueryPostSpotlightArchive($slug: String) {
    spotlightsArchives(filters: { Slug: { eq: $slug } }) {
      data {
        id
        attributes {
          Title
          Slug
          File_wacz {
            data {
              attributes {
                url
              }
            }
          }
          Spotlight {
            data {
              attributes {
                Image {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                Description
                Source_link
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
      }
    }
  }
`