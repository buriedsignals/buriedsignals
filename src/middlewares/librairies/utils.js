import axios from "axios";
import FormData from "form-data";
import { STRAPI_ENDPOINT } from "./apollo-client";

export const maxPostsBySectionByPage = 6
export const maxPostsByPage = 25
export const maxPageSize = Math.floor(maxPostsByPage / maxPostsBySectionByPage) * maxPostsBySectionByPage


export function parsePageSimple(datas) {
  return {
    title: datas.Title ? datas.Title : "",
    slug: datas.Slug ? datas.Slug : null,
    description: datas.Description ? datas.Description : "",
    meta: {
      title: datas.Meta_title ? datas.Meta_title : datas.Title ? `Tom Vaillant - ${ datas.Title }` : "",
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
      title: datas.Meta_title ? datas.Meta_title : datas.Title ? `Tom Vaillant - ${ datas.Title }` : "",
      description: datas.Meta_description ? datas.Meta_description : datas.Description ? datas.Description : "",
      keywords: datas.Meta_keywords ? datas.Meta_keywords : "",
      image: datas.Meta_image ? datas.Meta_image.data ? getImage(datas.Meta_image) : null : null
    }
  }
}

export function parsePostsSpotlights(datas) {
  let posts = datas.map(data => {
    return { id: data.id, ...parsePostSpotlight(data.attributes) }
  })
  return posts
}

export function parsePostSpotlight(data) {
  return {
    awards: data.Award.data ? data.Award.data.attributes.Title : "",
    categories: data.Categories ? data.Categories.data.map(category => category.attributes.Title) : [],
    description: data.Description ? data.Description : "",
    image: getImage(data.Image),
    geography: data.Geography && data.Geography.data ? data.Geography.data.attributes.Title : "",
    slug: data.Slug ? data.Slug : null,
    source: {
      author: data.Source_author ? data.Source_author : "",
      url: data.Source_link ? data.Source_link : ""
    },
    submited_by: data.Submited_by ? {
      image: data.Submited_by.data ? getImage(data.Submited_by.data.attributes.Image) : data.Submited_by_external ? { url:"/images/profile-default.jpg", alt: "Default profile picture" } : { url:"/images/profile-default.jpg", alt: "Default profile picture" },
      name: data.Submited_by.data ? data.Submited_by.data.attributes.username : data.Submited_by_external ? data.Submited_by_external : "Dark Vador",
      link: data.Submited_by.data ? data.Submited_by.data.attributes.Portfolio_link : null,
    }: null,
    title: data.Title ? data.Title : "",
    meta: {
      title: data.Meta_title ? data.Meta_title : data.Title ? `Tom Vaillant - ${ data.Title }` : "",
      description: data.Meta_description ? data.Meta_description : data.Description ? data.Description : "",
      keywords: data.Meta_keywords ? data.Meta_keywords : "",
      image: data.Meta_image ? data.Meta_image.data ? getImage(data.Meta_image) : getImage(data.Image) : getImage(data.Image)
    }
  }
}

export function parseCategoriesSpotlights(datas) {
  const categories = datas.map(data => {
    const category = parseCategorySpotlights(data.attributes)
    category.id = data.id
    return category
  })
  return categories
}

export function parseCategorySpotlights(data) {
  return {
    title: data.Title ? data.Title : "",
    slug: data.Slug ? data.Slug : ""
  }
}

export function parsePostsInsights(datas) {
  let posts = datas.map(data => {
    return { id: data.id, ...parsePostInsight(data.attributes) }
  })
  return posts
}

export function parsePostInsight(data) {
  return {
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
      title: data.Meta_title ? data.Meta_title : data.Title ? `Tom Vaillant - ${ data.Title }` : "",
      description: data.Meta_description ? data.Meta_description : data.Description ? data.Description : "",
      keywords: data.Meta_keywords ? data.Meta_keywords : "",
      image: data.Meta_image ? data.Meta_image.data ? getImage(data.Meta_image) : getImage(data.Image) : getImage(data.Image)
    }
  }
}

export function parseCategoriesInsights(datas) {
  const categories = datas.map(data => {
    const category = parseCategoryInsights(data.attributes)
    category.id = data.id
    return category
  })
  return categories
}

export function parseCategoryInsights(data) {
  return {
    title: data.Title ? data.Title : "",
    slug: data.Slug ? data.Slug : ""
  }
}

export function parsePostsResources(datas) {
  let posts = datas.map(data => {
    return { id: data.id, ...parsePostResource(data.attributes) }
  })
  return posts
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

export function parseCategoriesResources(datas) {
  const categories = datas.map(data => {
    const category = parseCategoryResources(data.attributes)
    category.id = data.id
    return category
  })
  return categories
}

export function parseCategoryResources(data) {
  return {
    title: data.Title ? data.Title : "",
    slug: data.Slug ? data.Slug : ""
  }
}

export function parsePostsProjects(datas) {
  let posts = datas.map(data => {
    return { id: data.id, ...parsePostProject(data.attributes) }
  })
  return posts
}

export function parsePostProject(data) {
  return {
    description: data.Description ? data.Description : "",
    image: getImage(data.Image),
    slug: data.Slug ? data.Slug : null,
    source: {
      author: data.Source_author ? data.Source_author : "",
      url: data.Source_link ? data.Source_link : ""
    },
    title: data.Title ? data.Title : "",
    meta: {
      title: data.Meta_title ? data.Meta_title : data.Title ? `Tom Vaillant - ${ data.Title }` : "",
      description: data.Meta_description ? data.Meta_description : data.Description ? data.Description : "",
      keywords: data.Meta_keywords ? data.Meta_keywords : "",
      image: data.Meta_image ? data.Meta_image.data ? getImage(data.Meta_image) : getImage(data.Image) : getImage(data.Image)
    }
  }
}

export function parseMetaPagination(meta) {
  return {
    page: meta.page,
    sectionSize: maxPostsBySectionByPage,
    pageSize: meta.pageSize,
    totalPosts: meta.total,
    totalPages: meta.pageCount
  }
}

export async function createImage(datas, title) {
  let responseImage = {}
  let extension = null
  if (typeof datas == "string") {
    const url = datas
    responseImage = await axios.get(url, { responseType: "arraybuffer" })
    extension = url.split(/[#?]/)[0].split('.').pop().trim()
  } else {
    responseImage = { data: datas }
    extension = datas.type.split("/")[1]   
  }
  const form = new FormData()
  form.append("files", responseImage.data, `post-${ transformToSlug(title) }.${ extension }`)
  const responseUpload = await axios.post(`${STRAPI_ENDPOINT}/api/upload`, form)
  return responseUpload.data[0].id
} 

export async function createFile(url, title) {
  const responseFile = await axios.get(url, { responseType: "arraybuffer" })
  const extension = url.split(/[#?]/)[0].split('.').pop().trim()
  const form = new FormData()
  form.append("files", responseFile.data, `post-${ transformToSlug(title) }.${ extension }`)
  const responseUpload = await axios.post(`${STRAPI_ENDPOINT}/api/upload`, form, {  maxContentLength: Infinity, maxBodyLength: Infinity })
  return responseUpload.data[0].id
} 

// ---

function transformToSlug(text) {
  return text.toString() .normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' ).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
}

function getImage(image) {
  return {
    alt: image ? image.data ? image.data.attributes.alternativeText ? image.data.attributes.alternativeText : "Image not described" : "Image not described" : "Image not described",
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
    }
    switch (data.__component) {
      case "body.body":
        return {
          markdown: data.Content,
          type: "Body"
        }
      case "illustration.illustration":
        return {
          image: getImage(data.Image),
          type: "Illustration"
        }
      case "embed-video.embed-video":
        return {
          link: data.Link,
          type: "EmbedVideo"
        }
    }
  })
}

const pagination = (page, sectionSize, posts, totalPosts, maxPageSize) => {
  // const totalPosts = posts.length
  let pageSize = Math.floor(maxPageSize / sectionSize) * sectionSize
  pageSize = totalPosts < pageSize ? totalPosts : pageSize
  const totalPages = Math.ceil(totalPosts / pageSize)
  const paginatedPosts = posts.length <= pageSize ? posts : posts.slice((page - 1) * pageSize, ((page - 1) * pageSize)+ pageSize);
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
