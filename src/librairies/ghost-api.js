import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://buried-signals.ghost.io',
  key: '83e1af7ff92a28bc3b60d51fca',
  version: "v5.0"
});

export async function getMembers() {
  const members = await api.members
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
  return { members: members }
}

export async function getPage(slug) {
  const page = await api.pages
    .read({
      slug: slug
    })
    .catch(err => {
      console.error(err);
    });
  return parsePage(page)
}

export async function getPost(type, slug) {
  let tag = ""
  switch (type) {
    case "spotlight":
      tag = "visuals"
      break;
    case "insight":
      tag = "insights"
      break;
  }
  const post = await api.posts
    .read({
      slug: slug,
      include: "tags,authors"
    })
    .catch(err => {
      console.error(err);
    });
  return parsePost(post, tag)
}

export async function getPosts(type) {
  let tag = ""
  switch (type) {
    case "spotlights":
      tag = "visuals"
      break;
    case "insights":
      tag = "insights"
      break;
    case "resources":
      tag = "resources"
      break;
    case "projects":
      tag = "projects"
      break;
  }
  const posts = await api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
      filter: `tag:${ tag }`
    })
    .catch(err => {
      console.error(err);
    });
  return parsePosts(posts, tag)
}

const parsePage = (page) => {
  return {
    slug: page.slug,
    title: page.title,
    description: page.excerpt,
    image: {
      url: page.feature_image,
      alt: page.feature_image_alt
    },
    content: page.html,
  }
}

const parsePost = (post, tag) => {
  const getCategoriesFromPost = (postTags) => {
    const postCategoriesParsed = postTags.filter(postTag => postTag.name.includes(`#${ tag.charAt(0).toUpperCase() + tag.slice(1) }`)).map(postTag => {
      const category = postTag.name.replace(`#${ tag.charAt(0).toUpperCase() + tag.slice(1) }`, '')
      return category
    })
    return postCategoriesParsed
  }
  const getAwardsFromPost = (postTags) => {
    const postAwardsParsed = postTags.filter(postTag => postTag.name.includes("#Awards")).map(postTag => {
      const award = postTag.name.replace(/#Awards/g, '')
      return award
    })
    return postAwardsParsed.length != 0 ? postAwardsParsed : null
  }
  return {
    slug: post.slug,
    author: "", // ???
    categories: getCategoriesFromPost(post.tags),
    title: post.title,
    description: post.excerpt,
    image: {
      url: post.feature_image,
      alt: post.feature_image_alt
    },
    content: post.html,
    awards: getAwardsFromPost(post.tags),
    likes: 0, // By local BDD
    comments: 0, // By local BDD
    source: {
      title: "", // ???
      url: "" // ???
    },
    submited_by: {
      name: post.authors[0].name,
      image: {
        url: post.authors[0].profile_image,
        alt: "Profile image"
      }
    },
    published_at: post.published_at
  }
}

const parsePosts = (posts, tag) => {
  const postsParsed = []
  const categories = []
  const awards = []
  const getCategoriesFromPosts = (postTags, postsCategories) => {
    const postCategoriesParsed = postTags.filter(postTag => postTag.name.includes(`#${ tag.charAt(0).toUpperCase() + tag.slice(1) }`)).map(postTag => {
      const category = postTag.name.replace(`#${ tag.charAt(0).toUpperCase() + tag.slice(1) }`, '')
      if (!postsCategories.includes(category)) {
        postsCategories.push(category)
      }
      return category
    })
    return postCategoriesParsed
  }
  const getAwardsFromPosts = (postTags, postsAwards) => {
    const postAwardsParsed = postTags.filter(postTag => postTag.name.includes("#Awards")).map(postTag => {
      const award = postTag.name.replace(/#Awards/g, '')
      if (!postsAwards.includes(award)) {
        postsAwards.push(award)
      }
      return award
    })
    return postAwardsParsed.length != 0 ? postAwardsParsed : null
  }
  posts.forEach(post => {
    postsParsed.push({
      slug: post.slug,
      author: "", // ???
      categories: getCategoriesFromPosts(post.tags, categories),
      title: post.title,
      description: post.excerpt,
      image: {
        url: post.feature_image,
        alt: post.feature_image_alt
      },
      awards: getAwardsFromPosts(post.tags, awards),
      likes: 0, // By local BDD
      comments: 0, // By local BDD
      source: {
        title: "", // ???
        url: "" // ???
      },
      submited_by: {
        name: post.authors[0].name,
        image: {
          url: post.authors[0].profile_image,
          alt: "Profile image"
        }
      },
      published_at: post.published_at
    })
  });
  return {
    posts: postsParsed,
    categories: categories.length !== 0 ? categories : null,
    awards: awards.length !== 0 ? awards : null,
  }
}

// access: true
// canonical_url: null
// codeinjection_foot: null
// codeinjection_head: null
// comment_id: "630f2ed6858145003dd129c5"
// comments: false
// created_at: "2022-08-31T09:50:14.000+00:00"
// custom_excerpt: null
// custom_template: null
// email_subject: null
// excerpt: "Lee, 18, is making her Olympic debut after a challenging year. Her versatility is making her Olympic debut after a challenging year."
// feature_image: "https://images.unsplash.com/photo-1661790403166-6bc86c517303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8YWxsfDMyfHx8fHx8Mnx8MTY2MTk0MzU2Ng&ixlib=rb-1.2.1&q=80&w=2000"
// feature_image_alt: null
// feature_image_caption: "Photo by <a href=\"https://unsplash.com/@fadster666?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Fadi Al Shami</a> / <a href=\"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit\">Unsplash</a>"
// featured: false
// frontmatter: null
// html: "<p>Lee, 18, is making her Olympic debut after a challenging year. Her versatility is making her Olympic debut after a challenging year.</p>"
// id: "630f2ed6858145003dd129c5"
// meta_description: null
// meta_title: null
// og_description: null
// og_image: null
// og_title: null
// primary_tag: {id: '62f28dad36632d00317f6981', name: 'Visuals', slug: 'visuals', description: null, feature_image: null, …}
// published_at: "2022-08-31T11:46:28.000+00:00"
// reading_time: 0
// slug: "sunisa-lee-the-gymnast"
// tags: (3) [{…}, {…}, {…}]
// title: "Sunisa Lee - The Gymnast"
// twitter_description: null
// twitter_image: null
// twitter_title: null
// updated_at: "2022-08-31T11:46:28.000+00:00"
// url: "https://buried-signals.ghost.io/sunisa-lee-the-gymnast/"
// uuid: "ca9cf56c-3309-421f-b14c-3c3d674d023f"
// visibility: "public"