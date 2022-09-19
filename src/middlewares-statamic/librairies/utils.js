export function parsePageSimple(datas) {
  return {
    description: datas.description,
    title: datas.title
  }
}

export function parsePageContent(datas) {
  return {
    content: datas.content,
    title: datas.title
  }}

export function parsePostsSpotlights(datas) {
  const posts = datas.map(data => {
    return parsePostSpotlight(data)
  });
  const categories = getTaxonomiesPosts(datas, "categories")
  const awards = getTaxonomiesPosts(datas, "awards")
  return { 
    posts: posts,
    categories: categories,
    awards: awards
  }
}

export function parsePostSpotlight(data) {
  return {
    awards: data.awards ? data.awards.title : null,
    bookmarked: false, // Get by user
    categories: data.categories ? data.categories.map(category => category.title) : null,
    comments: 0, // ???
    description: data.description,
    image: {
      alt: data.image ? data.image.alt : null,
      url: data.image ? data.image.permalink : null
    },
    likes: data.likes,
    liked: false, // Get by user
    slug: data.slug,
    source: {
      author: data.source_author,
      title: data.source_title,
      url: data.source_url
    },
    submited_by: {
      id: data.submited_by ? data.submited_by.id : null,
      image: {
        alt: `Profil image of ${ data.submited_by ? data.submited_by.name : "the auhtor of this post" }`,
        url: data.submited_by ? data.submited_by.avatar ? data.submited_by.avatar.permalink : null : null
      },
      name: data.submited_by ? data.submited_by.name : null
    },
    title: data.title
  }
}

export function parsePostsInsights(datas) {
  const posts = datas.map(data => {
    return parsePostInsight(data)
  });
  const categories = getTaxonomiesPosts(datas, "categories")
  return { 
    posts: posts,
    categories: categories
  }
}

export function parsePostInsight(data) {
  return {
    bookmarked: false, // Get by user
    categories: data.categories ? data.categories.map(category => category.title) : null,
    content: data.content,
    date: data.date,
    description: data.description,
    image: {
      alt: data.image ? data.image.alt : null,
      url: data.image ? data.image.permalink : null
    },
    published_at: data.date,
    slug: data.slug,
    source: {
      author: data.source_author,
      title: data.source_title,
      url: data.source_url
    },
    title: data.title
  }
}

export function parsePostsResources(datas) {
  const posts = datas.map(data => {
    return parsePostResource(data)
  });
  const categories = getTaxonomiesPosts(datas, "categories")
  return { 
    posts: posts,
    categories: categories
  }
}

export function parsePostResource(data) {
  return {
    categories: data.categories ? data.categories.map(category => category.title) : null,
    description: data.description,
    image: {
      alt: data.image ? data.image.alt : null,
      url: data.image ? data.image.permalink : null
    },
    slug: data.slug,
    source: {
      author: data.source_author,
      title: data.source_title,
      url: data.source_url
    },
    title: data.title
  }
}

export function parsePostsProjects(datas) {
  const posts = datas.map(data => {
    return parsePostProject(data)
  });
  return { 
    posts: posts
  }
}

export function parsePostProject(data) {
  return {    
    categories: data.categories ? data.categories.map(category => category.title) : null,
    description: data.description,
    image: {
      alt: data.image ? data.image.alt : null,
      url: data.image ? data.image.permalink : null
    },
    slug: data.slug,
    source: {
      author: data.source_author,
      title: data.source_title,
      url: data.source_url
    },
    title: data.title
  }
}

export function parseUsersJury(datas) {
  const users = datas.filter(data => data.group[0].title === "Jury").map(data => {
    return parseUserJury(data)
  });
  return { 
    users: users
  }
}

export function parseUserJury(data) {
  return {    
    description: data.description,
    email: data.email,
    image: {
      alt: data.avatar ? data.avatar.alt : null,
      url: data.avatar ? data.avatar.permalink : null
    },
    name: data.name,
    slug: transformToSlug(data.name),
    twitter_account: data.twitter_account
  }
}

export function parseUsersMembers(datas) {
  const users = datas.filter(data => data.group[0].title === "Members").map(data => {
    return {
      id: data.id,
      name: data.name,
      slug: transformToSlug(data.name),
    }
  });
  return { 
    users: users
  }
}

export function parseUserMember(data) {
  return {   
    slug: transformToSlug(data.name),
    name: data.name,
    twitter_account: data.twitter_account,
    email: data.email,
    description: data.description,
    bookmarked: {
      spotlights: data.bookmarked_spotlights.map(bookmarked_spotlight => {
        return parsePostSpotlight(bookmarked_spotlight)
      }),
      insights: data.bookmarked_insights.map(bookmarked_insight => {
        return parsePostInsight(bookmarked_insight)
      })
    }
  }
}

// ---

function getTaxonomiesPosts(datas, type) {
  let taxonomies = [].concat(...datas.map(data => {
    if (data[type]) {
      if (Array.isArray(data[type])) {
        return data[type].map(category => category.title)
      } else {
        return data[type].title
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