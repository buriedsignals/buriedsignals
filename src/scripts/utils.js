import { deleteCookie, getCookie, setCookie } from "cookies-next";

// Limit size text
export function limitSizeText(text = "", length = 0) {
  if (!text) return ""
  return text.length > length ? text.substring(0, length) + "..." : text;
}
// Get time since
export function getTimeSince(date) {
  const seconds = Math.floor((new Date() - Date.parse(date)) / 1000)
  let interval = seconds / 31536000
  if (interval > 1) {
    return `${ Math.floor(interval) } years`
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return `${ Math.floor(interval) } months`
  }
  interval = seconds / 86400
  if (interval > 1) {
    return `${ Math.floor(interval) } days`
  }
  interval = seconds / 3600
  if (interval > 1) {
    return `${ Math.floor(interval) } hours`
  }
  interval = seconds / 60
  if (interval > 1) {
    return `${ Math.floor(interval) } minutes`
  }
  return `${ Math.floor(interval) } seconds`
}
// Copy on clipboard
export function copyClipboard() {
  // alert("Copy")
}
// Tranform to slug
export function transformToSlug(text) {
  return text.toString().normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' ).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
}
// Login cookies user
export function loginUserCookies(datas) {
  setCookie("connected", true)
  setCookieObject("bookmarked", datas.bookmarked)
  setCookie("description", datas.description)
  setCookie("email", datas.email)
  setCookie("id", datas.id)
  setCookie("jwt", datas.jwt)
  setCookieObject("liked", datas.liked)
  setCookie("name", datas.name)
  setCookie("slug", datas.slug)
  setCookie("twitter_account", datas.twitter_account)
}
// Get cookies user
export function getUserCookies() {
  return {
    connected: getCookie("connected"),
    bookmarked: getCookieObject("bookmarked"),
    description: getCookie("description"),
    email: getCookie("email"),
    id: getCookie("id"),
    jwt: getCookie("jwt"),
    liked: getCookieObject("liked"),
    name: getCookie("name"),
    slug: getCookie("slug"),
    twitter_account: getCookie("twitter_account")
  }
}
// Logout cookies user
export function logoutUserCookies() {
  setCookie("connected", false)
  setCookieObject("bookmarked", { spotlights: [], insights: [], resources: [] })
  setCookie("description", null)
  setCookie("email", null)
  setCookie("id", null)
  setCookie("jwt", null)
  setCookieObject("liked", { spotlights: [] })
  setCookie("name", null)
  setCookie("slug", null)
  setCookie("twitter_account", null)
}

export function setCookieObject(dataName, object) {
  let types = ""
  Object.entries(object).forEach(([key, value], index) => {
    setCookie(`${ dataName }-${ key }`, getIdsFromArrayOfObject(value))
    types += key
    if (index !== Object.keys(object).length - 1) {
      types += ","
    }
  });
  setCookie(`${ dataName }-types`, types)
}

export function getCookieObject(dataName) {
  const object = {}
  if(getCookie(`${ dataName }-types`)) {
    getCookie(`${ dataName }-types`).split(',').forEach(type => {
      object[type] = getIdsFromString(getCookie(`${ dataName }-${ type }`))
    });
  }
  return object
}

function getIdsFromArrayOfObject(array) {
  let listIds = ""
  array.forEach((element, index) => {
    listIds += element.id
    if (index !== array.length - 1) {
      listIds += ","
    }
  });
  return listIds
}

function getIdsFromString(string) {
  return string.split(',').map(element => {
    return { id: parseInt(element) }
  });
}