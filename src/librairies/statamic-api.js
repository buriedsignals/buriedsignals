const userId = "1"

const baseURL = "http://cyberspace-place.test/api"

export async function getPosts(type) {
  const result = await fetch(`${baseURL}/collections/${type}/entries`)
  const json = await result.json()
  const datas = await json.data
  return datas 
}

export function parsePostsDatas(datas) {
  const posts = []
  const categories = []
  const awards = []
  for (let i = 0; i < datas.length; i++) {
    const data = datas[i];
    posts.push({
      id: data.id,
      slug: data.slug,
      author: data.author,
      categories: parseCategories(data.categories_spotlights, categories),
      title: data.title,
      description: data.description,
      image: {
        url: image.permalink,
        alt: "Post image"
      },
      awards: parseAwards(data.awards_spotlights, awards),
      likes: data.likes,
      liked: "", // By current user
      bookmarked: "", // By current user
      comments: "", // ???
      source: data.source,
      submited_by: {
        name: "", // data.submitted_by.name,
        image: {
          url: "", // ??
          alt: "Profile image"
        }
      },
      published_at: data.updated_at
    })
  }
  return {
    posts: posts,
    categories: categories.length !== 0 ? categories : null,
    awards: awards.length !== 0 ? awards : null,
  }
}

const parseCategories = (datas, categories = null) => {
  const categoriesPost = datas.map(data => {
    const category = data.title
    if (categories && !categories.includes(category)) {
      categories.push(category)
    }
    return category
  })
  return categoriesPost
}

const parseAwards = (datas, awards = null) => {
  const award = datas.title
  if (awards && !awards.includes(award)) {
    awards.push(award)
  }
  return award
}


// amp_url
// : 
// null
// api_url
// : 
// "http://cyberspace-place.test/api/collections/spotlights/entries/9901e3db-29f5-475b-9eda-e4572508f72e"
// author
// : 
// "The New York Times"
// awards_spotlights
// : 
// {id: 'awards_spotlights::honors', title: 'Honors', slug: 'honors', url: '/spotlights/awards-spotlights/honors', permalink: 'http://cyberspace-place.test/spotlights/awards-spotlights/honors', …}
// blueprint
// : 
// {handle: 'spotlights', title: 'Spotlights'}
// categories_spotlights
// : 
// (2) [{…}, {…}]
// collection
// : 
// {id: null, title: 'Spotlights', api_url: null}
// date
// : 
// "2022-09-09T00:00:00.000000Z"
// description
// : 
// "Lee, 18, is making her Olympic debut after a challenging year. Her versatility debut after a challenging."
// edit_url
// : 
// "http://cyberspace-place.test/cp/collections/spotlights/entries/9901e3db-29f5-475b-9eda-e4572508f72e"
// id
// : 
// "9901e3db-29f5-475b-9eda-e4572508f72e"
// image
// : 
// {id: 'assets::IMG.jpg', url: '/assets/IMG.jpg', permalink: 'http://cyberspace-place.test/assets/IMG.jpg', api_url: 'http://cyberspace-place.test/api/assets/assets/IMG.jpg'}
// is_entry
// : 
// true
// last_modified
// : 
// "2022-09-09T16:38:28.000000Z"
// likes
// : 
// 0
// locale
// : 
// "default"
// mount
// : 
// null
// order
// : 
// null
// origin_id
// : 
// null
// permalink
// : 
// null
// private
// : 
// false
// published
// : 
// true
// slug
// : 
// "sunisa-lee-the-gymnast"
// source
// : 
// "www.google.fr"
// status
// : 
// "published"
// submitted_by
// : 
// {id: 'ea6e6943-d8f4-4793-af9c-457ac83ca29d', name: 'Rémy Dumas', email: 'remy.benjamin.dumas@gmail.com', api_url: 'http://cyberspace-place.test/api/users/ea6e6943-d8f4-4793-af9c-457ac83ca29d'}
// title
// : 
// "Sunisa Lee - The Gymnast"
// updated_at
// : 
// "2022-09-09T16:38:28.000000Z"
// updated_by
// : 
// {id: 'ea6e6943-d8f4-4793-af9c-457ac83ca29d', name: 'Rémy Dumas', email: 'remy.benjamin.dumas@gmail.com', api_url: 'http://cyberspace-place.test/api/users/ea6e6943-d8f4-4793-af9c-457ac83ca29d'}
// uri
// : 
// null
// url
// : 
// null