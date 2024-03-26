// Nodes
import { gql } from '@apollo/client'

export const QUERY_POSTS_SPOTLIGHTS_LITE = ({ categories, award, geography }) => gql`
  query QueryPostsSpotlights${ categories || award || geography ? `(${ categories ? "$categories: [String]" : "" }${ award ? `${ categories ? ", " : "" }$award: String` : "" }${ geography ? `${ categories || award ? ", " : "" }$geography: String` : "" })` : "" } {
    spotlightsPosts(${ categories || award || geography ? `filters: {${ categories ? " Categories: { Slug: { in: $categories } }" : "" }${ award ? `${ categories ? "," : "" } Award: { Slug: { eq: $award } }` : "" }${ geography ? `${ categories || award ? "," : "" } Geography: { Slug: { eq: $geography } }` : "" }}, ` : "" }sort: "publishedAt:desc", pagination: { limit: 99999999 }) {
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
        }
      }
    }
  }
`

export const QUERY_POSTS_SPOTLIGHTS = ({ categories, award, geography, page, pageSize }) => gql`
  query QueryPostsSpotlights${ categories || award || geography || page ? `(${ categories ? "$categories: [String]" : "" }${ award ? `${ categories ? ", " : "" }$award: String` : "" }${ geography ? `${ categories || award ? ", " : "" }$geography: String` : "" }${ page ? `${ categories || award || geography ? ", " : "" }$page: Int` : "" })` : "" } {
    spotlightsPosts(${ categories || award || geography ? `filters: {${ categories ? " Categories: { Slug: { in: $categories } }" : "" }${ award ? `${ categories ? "," : "" } Award: { Slug: { eq: $award } }` : "" }${ geography ? `${ categories || award ? "," : "" } Geography: { Slug: { eq: $geography } }` : "" }}, ` : "" }sort: "publishedAt:desc", pagination: { page: $page, pageSize: ${ pageSize } }) {
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
          Submited_by_external
          Submited_by {
            data {
              attributes {
                username
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
          Submited_by_external
          Submited_by {
            data {
              attributes {
                username
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
          Submited_by_external
          Submited_by {
            data {
              attributes {
                username
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
          Submited_by_external
          Submited_by {
            data {
              attributes {
                username
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

export const UPDATE_POST_SPOTLIGHT_AWARDS = gql`
  mutation MutationPostSpotlightAwards($id: ID!, $awardId: ID) {
    updateSpotlightsPost(id: $id, data: { Award: $awardId }) {
      data {
        id
      }
    }
  }
`

export const QUERY_CATEGORIES_SPOTLIGHTS = gql`
  query QueryCategoriesSpotlights {
    spotlightsCategories {
      data {
        id
        attributes {
          Title
        }
      }
    }
  }
`