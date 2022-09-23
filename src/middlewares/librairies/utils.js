import axios from "axios";
import FormData from "form-data";
import { USER, STRAPI_ENDPOINT } from "./apollo-client";

export function parsePageSimple(datas) {
  return {
    title: datas.Title,
    slug: datas.Slug,
    description: datas.Description
  }
}

export function parsePageFlexible(datas) {
  return {
    title: datas.Title,
    slug: datas.Slug,
    flexible_content: getDynamicContent(datas.Dynamic_content)
  }
}

export function parsePostsSpotlights(datas) {
  const posts = datas.map(data => {
    return { id: data.id, ...parsePostSpotlight(data.attributes) }
  });
  const categories = getTaxonomiesPosts(datas, "Categories")
  const awards = getTaxonomiesPosts(datas, "Award")
  return {
    posts: posts,
    categories: categories,
    awards: awards
  }
}

export function parsePostSpotlight(data) {
  return {
    awards: data.Award.data ? data.Award.data.attributes.Title : null,
    bookmarked: USER.bookmarked.spotlights ? USER.bookmarked.spotlights.filter(spotlight => spotlight.slug === data.Slug).length > 0 : false, // Get by user
    categories: data.Categories ? data.Categories.data.map(category => category.attributes.Title) : null,
    comments: 0, // ???
    description: data.Description,
    image: getImage(data.Image),
    likes: data.Likes,
    liked: USER.liked.spotlights ? USER.liked.spotlights.filter(spotlight => spotlight === data.Slug).length > 0 : false, // Get by user
    slug: data.Slug,
    source: {
      author: data.Source_author,
      url: data.Source_link
    },
    submited_by: {
      image: getImage(data.Submited_by.data.attributes.Image),
      name: data.Submited_by ? data.Submited_by.data.attributes.Name : null
    },
    title: data.Title
  }
}

export function parsePostsInsights(datas) {
  const posts = datas.map(data => {
    return { id: data.id, ...parsePostInsight(data.attributes) }
  });
  const categories = getTaxonomiesPosts(datas, "Categories")
  return { 
    posts: posts,
    categories: categories
  }
}

export function parsePostInsight(data) {
  return {
    bookmarked: USER.bookmarked.insights ? USER.bookmarked.insights.filter(insight => insight.slug === data.Slug).length > 0 : false, // Get by user
    categories: data.Categories ? data.Categories.data.map(category => category.attributes.Title) : null,
    flexible_content: getDynamicContent(data.Dynamic_content),
    description: data.Description,
    image: getImage(data.Image),
    published_at: data.updatedAt,
    slug: data.Slug,
    source: {
      author: data.Source_author,
      title: data.Source_title,
      url: data.Source_link
    },
    title: data.Title
  }
}

export function parsePostsResources(datas) {
  const posts = datas.map(data => {
    return { id: data.id, ...parsePostResource(data.attributes) }
  });
  const categories = getTaxonomiesPosts(datas, "Categories")
  return { 
    posts: posts,
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

export function parsePostsProjects(datas) {
  const posts = datas.map(data => {
    return { id: data.id, ...parsePostProject(data.attributes) }
  })
  return {
    posts: posts
  }
}

export function parsePostProject(data) {
  return {    
    categories: data.Categories ? data.Categories.data.map(category => category.attributes.Title) : null,
    description: data.Description,
    image: getImage(data.Image),
    slug: data.Slug,
    source: {
      author: data.Source_author,
      url: data.Source_link
    },
    title: data.Title
  }
}

export function parseUsersJury(datas) {
  const users = datas.map(data => {
    return parseUserJury(data.attributes)
  });
  return { 
    users: users
  }
}

export function parseUserJury(data) {
  return {    
    description: data.Description,
    image: getImage(data.Image),
    name: data.Name,
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
    slug: data.Slug,
    name: data.username,
    twitter_account: data.Twitter_account,
    email: data.email,
    description: data.Description,
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
      spotlights: data.Liked_spotlights ? data.Liked_spotlights.data.map(spotlights => spotlights.id) : null,
    }
  }
}

export async function createImage(image, title) {
  const responseImage = await axios.get(image, { responseType: "arraybuffer" })
  const form = new FormData()
  form.append("files", responseImage.data, `post-${ transformToSlug(title) }.jpg`)
  const responseUpload = await axios.post(`${STRAPI_ENDPOINT}/api/upload`, form)
  return responseUpload.data[0].id
} 

// ---

function getTaxonomiesPosts(datas, type) {
  let taxonomies = [].concat(...datas.map(data => {
    if (data.attributes[type]) {
      if (Array.isArray(data.attributes[type].data)) {    
        return data.attributes[type].data.map(type => type.attributes.Title)
      } else {
        return data.attributes[type].data ? data.attributes[type].data.attributes.Title : null
      }
    } else {
      return null
    }
  }))
  taxonomies = taxonomies.filter((element, index) => taxonomies.indexOf(element) === index && element !== null)
  return taxonomies
}

function transformToSlug(text) {
  return text.toString() .normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' ).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
}

function getImage(image) {
  return {
    alt: image ? image.data.attributes.alternativeText : null,
    url: image ? image.data.attributes.url : null
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
    }
  })
}
