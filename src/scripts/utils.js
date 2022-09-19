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