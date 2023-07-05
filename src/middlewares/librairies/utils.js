import { getUserCookies } from "@/scripts/utils";
import axios from "axios";
import FormData from "form-data";
import { USER, STRAPI_ENDPOINT } from "./apollo-client";
import { forEach } from "lodash";

export const maxPostsBySectionByPage = 6

export function parsePageSimple(datas) {
  return {
    title: datas.Title ? datas.Title : "",
    slug: datas.Slug ? datas.Slug : null,
    description: datas.Description ? datas.Description : "",
    meta: {
      title: datas.Meta_title ? datas.Meta_title : datas.Title ? `Buried Signals - ${ datas.Title }` : "",
      description: datas.Meta_description ? datas.Meta_description : datas.Description ? datas.Description : "",
      keywords: datas.Meta_keywords ? datas.Meta_keywords : "",
      image: datas.Meta_image ? datas.Meta_image.data ? getImage(datas.Meta_image) : null : null
    }
  }
}

export function parsePageFlexible(datas) {
  return {
    title: datas.Title ? datas.Title : "",
    slug: datas.Slug ? datas.Slug : null,
    description: datas.Description ? datas.Description : "",
    flexible_content: getDynamicContent(datas.Dynamic_content),
    meta: {
      title: datas.Meta_title ? datas.Meta_title : datas.Title ? `Buried Signals - ${ datas.Title }` : "",
      description: datas.Meta_description ? datas.Meta_description : datas.Description ? datas.Description : "",
      keywords: datas.Meta_keywords ? datas.Meta_keywords : "",
      image: datas.Meta_image ? datas.Meta_image.data ? getImage(datas.Meta_image) : null : null
    }
  }
}

export function parsePostsSpotlights(datas, query) {
  let posts = datas.map(data => {
    return { id: data.id, ...parsePostSpotlight(data.attributes) }
  });
  posts = pagination(query.page ? query.page : 1, maxPostsBySectionByPage, posts)
  const categories = getTaxonomiesPosts(datas, "Categories")
  const awards = getTaxonomiesPosts(datas, "Award")
  const geographies = getTaxonomiesPosts(datas, "Geography")
  return {
    posts: posts.posts,
    meta: posts.meta,
    categories: categories,
    awards: awards,
    geographies: geographies
  }
}

export function parsePostSpotlight(data) {
  return {
    awards: data.Award.data ? data.Award.data.attributes.Title : "",
    bookmarked: USER.bookmarked.spotlights ? USER.bookmarked.spotlights.filter(spotlight => spotlight.slug === data.Slug).length > 0 : false, // Get by user
    categories: data.Categories ? data.Categories.data.map(category => category.attributes.Title) : [],
    description: data.Description ? data.Description : "",
    image: getImage(data.Image),
    geography: data.Geography && data.Geography.data ? data.Geography.data.attributes.Title : "",
    likes: data.Likes ? data.Likes : 0,
    liked: USER.liked.spotlights ? USER.liked.spotlights.filter(spotlight => spotlight === data.Slug).length > 0 : false, // Get by user
    slug: data.Slug ? data.Slug : null,
    source: {
      author: data.Source_author ? data.Source_author : "",
      url: data.Source_link ? data.Source_link : ""
    },
    submited_by: {
      image: data.Submited_by.data ? getImage(data.Submited_by.data.attributes.Image) : data.Submited_by_external ? { url:"/images/profile-default.jpg", alt: "Default profile picture" } : "",
      name: data.Submited_by.data ? data.Submited_by.data.attributes.Name : data.Submited_by_external ? data.Submited_by_external : null,
      link: data.Submited_by.data ? data.Submited_by.data.attributes.Portfolio_link : null,
    },
    title: data.Title ? data.Title : "",
    meta: {
      title: data.Meta_title ? data.Meta_title : data.Title ? `Buried Signals - ${ data.Title }` : "",
      description: data.Meta_description ? data.Meta_description : data.Description ? data.Description : "",
      keywords: data.Meta_keywords ? data.Meta_keywords : "",
      image: data.Meta_image ? data.Meta_image.data ? getImage(data.Meta_image) : getImage(data.Image) : getImage(data.Image)
    },
    metrics: [
      {
        title: "Effectiveness",
        slug: "effectiveness",
        value: data.Metrics_effectiveness_value ? data.Metrics_effectiveness_value : "--",
        votes: data.Metrics_effectiveness_votes ? data.Metrics_effectiveness_votes.split(',') : [],
        description: {
          information: data.Metrics_effectiveness_description_information ? data.Metrics_effectiveness_description_information : "",
          vote: data.Metrics_effectiveness_description_vote ? data.Metrics_effectiveness_description_vote : ""
        }
      },
      {
        title: "Virality",
        slug: "virality",
        value: data.Metrics_virality_value ? data.Metrics_virality_value : "--",
        backlinks: data.Metrics_virality_backlinks ? data.Metrics_virality_backlinks : null,
        description: {
          information: data.Metrics_virality_description_information ? data.Metrics_virality_description_information : "",
        }
      }
    ],
    virality_backlinks: data.Metrics_virality_backlinks ? data.Metrics_virality_backlinks : null,
    archive: {
      slug: data.Archive.data ? data.Archive.data.attributes.Slug ? data.Archive.data.attributes.Slug : null : null
    }
  }
}

export function parseComments(datas) {
  let comments = datas.map(data => {
    return parseComment(data)
  });
  let commentsThread = comments.filter(comment => comment.threadOf && !comment.blocked)
  comments = comments.filter(comment => !comment.threadOf && !comment.blocked)
  comments.forEach(comment => {
    commentsThread.map(commentThread => {
      if (comment.id == commentThread.threadOf) {
        if (!comment.comments) {
          comment.comments = []
        }
        comment.comments.push(commentThread)
      }
    })
  })
  let comments_length = 0
  comments.forEach(comment => {
    if (comment.comments) {
      comments_length += 1 + comment.comments.length
    } else {
      comments_length += 1
    }
  })
  return { comments, comments_length }
}

export function parseComment(data) {
  return {
    id: data.id,
    content: data.content,
    published_at: data.createdAt,
    threadOf: data.threadOf ? data.threadOf.id : null,
    blocked: data.blocked,
    author: {
      id: data.author.id,
      name: data.author.name
    }
  }
}

export function parseArchivesSpotlights(datas) {
  let posts = datas.map(data => {
    return { id: data.id, ...parseArchiveSpotlight(data.attributes) }
  })
  return {
    posts: posts
  }
}

export function parseArchiveSpotlight(data) {
  return {
    slug: data.Slug ? data.Slug : null,
    title: data.Title ? data.Title : "",
    source: {
      file: data.File_wacz ? data.File_wacz.data ? STRAPI_ENDPOINT + data.File_wacz.data.attributes.url : null : null,
      link: data.Spotlight ? data.Spotlight.data ? data.Spotlight.data.attributes.Source_link : null : null,
    },
    meta: {
      title: data.Title ? `Buried Signals - Archive : ${ data.Title }` : "",
      description: data.Spotlight ? data.Spotlight.data ? data.Spotlight.data.attributes.Meta_description ? data.Spotlight.data.attributes.Meta_description : data.Spotlight.data.attributes.Description ? data.Spotlight.data.attributes.Description : "" : "" : "",
      keywords: data.Spotlight ? data.Spotlight.data ? data.Spotlight.data.attributes.Meta_keywords ? data.Spotlight.data.attributes.Meta_keywords : "" : "" : "",
      image: data.Spotlight ? data.Spotlight.data ? data.Spotlight.data.attributes.Meta_image ? data.Spotlight.data.attributes.Meta_image.data ? getImage(data.Spotlight.data.attributes.Meta_image) : getImage(data.Spotlight.data.attributes.Image) : getImage(data.Spotlight.data.attributes.Image) : getImage(data.Spotlight.data.attributes.Image) : getImage(data.Spotlight.data.attributes.Image)
    },
  }
}

export function parsePostsInsights(datas, query) {
  let posts = datas.map(data => {
    return { id: data.id, ...parsePostInsight(data.attributes) }
  });
  posts = pagination(query.page ? query.page : 1, maxPostsBySectionByPage, posts)
  const categories = getTaxonomiesPosts(datas, "Categories")
  return {
    posts: posts.posts,
    meta: posts.meta,
    categories: categories,
  }
}

export function parsePostInsight(data) {
  return {
    bookmarked: USER.bookmarked.insights ? USER.bookmarked.insights.filter(insight => insight.slug === data.Slug).length > 0 : false, // Get by user
    categories: data.Categories ? data.Categories.data.map(category => category.attributes.Title) : [],
    flexible_content: getDynamicContent(data.Dynamic_content),
    description: data.Description ? data.Description : "",
    image: getImage(data.Image),
    published_at: data.updatedAt ? data.updatedAt : "",
    slug: data.Slug ? data.Slug : null,
    source: {
      author: data.Source_author ? data.Source_author : "",
      title: data.Source_title ? data.Source_title : "",
      url: data.Source_link ? data.Source_link : ""
    },
    title: data.Title ? data.Title : "",
    meta: {
      title: data.Meta_title ? data.Meta_title : data.Title ? `Buried Signals - ${ data.Title }` : "",
      description: data.Meta_description ? data.Meta_description : data.Description ? data.Description : "",
      keywords: data.Meta_keywords ? data.Meta_keywords : "",
      image: data.Meta_image ? data.Meta_image.data ? getImage(data.Meta_image) : getImage(data.Image) : getImage(data.Image)
    }
  }
}

export function parsePostsResources(datas, query) {
  let posts = datas.map(data => {
    return { id: data.id, ...parsePostResource(data.attributes) }
  });
  posts = pagination(query.page ? query.page : 1, maxPostsBySectionByPage, posts)
  const categories = getTaxonomiesPosts(datas, "Categories")
  return {
    posts: posts.posts,
    meta: posts.meta,
    categories: categories
  }
}

export function parsePostResource(data) {
  return {
    categories: data.Categories ? data.Categories.data.map(category => category.attributes.Title) : null,
    description: data.Description,
    image: getImage(data.Image),
    slug: data.Slug,
    source: {
      title: data.Source_title,
      url: data.Source_link
    },
    title: data.Title
  }
}

export function parseUsersJury(datas, query) {
  let users = datas.map(data => {
    return parseUserJury(data.attributes)
  });
  users = pagination(query.page ? query.page : 1, maxPostsBySectionByPage, users)
  return { 
    users: users.posts,
    meta: users.meta,
  }
}

export function parseUserJury(data) {
  return {    
    description: data.Description,
    image: getImage(data.Image),
    name: data.Name,
    portfolio: data.Portfolio_link ? data.Portfolio_link : "",
  }
}

export function parseUsersMembers(datas) {
  const users = datas.map(data => {
    return {
      slug: data.attributes.Slug,
    }
  });
  return { 
    users: users
  }
}

export function parseUserMember(data) {
  return {   
    slug: data.Slug ? data.Slug : null,
    name: data.username ? data.username : "",
    twitter_account: data.Twitter_account ? data.Twitter_account : "",
    email: data.email ? data.email : "",
    description: data.Description ? data.Description : "",
    bookmarked: {
      spotlights: data.Bookmarked_spotlights ? data.Bookmarked_spotlights.data.map(spotlight => {
        return { id: spotlight.id, ...parsePostSpotlight(spotlight.attributes) }
      }) : null,
      insights: data.Bookmarked_insights ? data.Bookmarked_insights.data.map(insight => {
        return { id: insight.id, ...parsePostInsight(insight.attributes) }
      }) : null,
      resources: data.Bookmarked_resources ? data.Bookmarked_resources.data.map(resource => {
        return { id: resource.id, ...parsePostResource(resource.attributes) }
      }) : null,
    },
    liked: {
      spotlights: data.Liked_spotlights ? data.Liked_spotlights.data.map(spotlights => {
        return { id: spotlights.id }
      }) : null,
    },
    voted: {
      spotlights: data.Voted_effectiveness_spotlights ? data.Voted_effectiveness_spotlights.data.map(spotlights => {
        return { id: spotlights.id }
      }) : null,
    },
    meta: {
      title: `Buried Signals - ${ data.username ? data.username : "Profile" }`
    }
  }
}

export async function createImage(url, title) {
  const responseImage = await axios.get(url, { responseType: "arraybuffer" })
  const extension = url.split(/[#?]/)[0].split('.').pop().trim()
  const form = new FormData()
  form.append("files", responseImage.data, `post-${ transformToSlug(title) }.${ extension }`)
  const responseUpload = await axios.post(`${STRAPI_ENDPOINT}/api/upload`, form)
  return responseUpload.data[0].id
} 

// ---

function getTaxonomiesPosts(datas, type) {
  let taxonomies = [].concat(...datas.map(data => {
    if (data.attributes[type]) {
      if (Array.isArray(data.attributes[type].data)) {    
        return data.attributes[type].data.map(type => { 
          // return type.attributes.Title
          return { 
            title: type.attributes.Title,
            slug: type.attributes.Slug
          }
        })
      } else {
        // return data.attributes[type].data ? data.attributes[type].data.attributes.Title : null
        return data.attributes[type].data ? { 
          title: data.attributes[type].data.attributes.Title,
          slug: data.attributes[type].data.attributes.Slug
        } : null
      }
    } else {
      return null
    }
  }))
  taxonomies = taxonomies.filter((taxonomy, index) => {
    return taxonomies.map(e => e && e.slug).indexOf(taxonomy && taxonomy.slug) === index && taxonomy !== null
  })
  return taxonomies
}

function transformToSlug(text) {
  return text.toString() .normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' ).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
}

function getImage(image) {
  return {
    alt: image ? image.data ? image.data.attributes.alternativeText : "Image not described" : "Image not described",
    url: image ? image.data ? STRAPI_ENDPOINT + image.data.attributes.url : null : null
  }
}

function getDynamicContent(datas) {
  return datas.map(data => {
    switch (data.__typename) {
      case "ComponentBodyBody":
        return {
          markdown: data.Content,
          type: "Body"
        }
      case "ComponentIllustrationIllustration":
        return {
          image: getImage(data.Image),
          type: "Illustration"
        }
      case "ComponentEmbedVideoEmbedVideo":
        return {
          link: data.Link,
          type: "EmbedVideo"
        }
      case "ComponentListIncludesListIncludes":
        const items = []
        data.Items.forEach(item => {
          items.push({
            text: item.Text,
            soon: item.Soon
          })
        });
        return {
          title: data.Title,
          items: items,
        }
    }
  })
}

const pagination = (page, sectionSize, posts) => {
  const totalPosts = posts.length
  let pageSize = Math.floor(50 / sectionSize) * sectionSize
  pageSize = totalPosts < pageSize ? totalPosts : pageSize
  const totalPages = Math.ceil(totalPosts / pageSize)
  const paginatedPosts = page == -1 ? posts : posts.slice((page - 1) * pageSize, ((page - 1) * pageSize) + pageSize)
  return {
    posts: paginatedPosts,
    meta: {
      page,
      sectionSize,
      pageSize,
      totalPosts,
      totalPages
    }
  }
}
