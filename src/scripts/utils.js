import { deleteCookie, getCookie, setCookie, getCookies } from "cookies-next";
import percentile from "percentile";

// Get decentile
export function getDecile(currrentValue, allValues) {
  const deciles = percentile([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], allValues)
  let currentDecile = 0
  deciles.forEach((decile, index) => {
    if (decile <= currrentValue) {
      currentDecile = index + 1
    }
  })
  return currentDecile
}
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
export function copyClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}
// Tranform to slug
export function transformToSlug(text) {
  return text.toString().normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' ).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
}