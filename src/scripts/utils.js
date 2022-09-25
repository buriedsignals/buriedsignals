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
  alert("Copy")
}
// Tranform to slug
export function transformToSlug(text) {
  return text.toString() .normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' ).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
}
// Login cookies user
export function loginUserCookies(datas) {
  setCookie("connected", true)
  setCookie("bookmarked", datas.bookmarked),
  setCookie("description", datas.description),
  setCookie("email", datas.email),
  setCookie("id", datas.id),
  setCookie("jwt", datas.jwt),
  setCookie("liked", datas.liked),
  setCookie("name", datas.name),
  setCookie("slug", datas.slug),
  setCookie("twitter_account", datas.twitter_account)
}
// Get cookies user
export function getUserCookies() {
  return {
    connected: getCookie("connected"),
    bookmarked: getCookie("bookmarked") ? JSON.parse(getCookie("bookmarked")) : { spotlights: [], insights: [], resources: [] },
    description: getCookie("description"),
    email: getCookie("email"),
    id: getCookie("id"),
    jwt: getCookie("jwt"),
    liked: getCookie("liked") ? JSON.parse(getCookie("liked")) : { spotlights: [] },
    name: getCookie("name"),
    slug: getCookie("slug"),
    twitter_account: getCookie("twitter_account")
  }
}
// Logout cookies user
export function logoutUserCookies() {
  setCookie("connected", false)
  setCookie("bookmarked", { spotlights: [], insights: [], resources: [] }),
  setCookie("description", null),
  setCookie("email", null),
  setCookie("id", null),
  setCookie("jwt", null),
  setCookie("liked", { spotlights: [] }),
  setCookie("name", null),
  setCookie("slug", null),
  setCookie("twitter_account", null)
}