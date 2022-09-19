import GhostContentAPI from "@tryghost/content-api";
import { getLikesForOnePost, getLikedByUserForOnePost, getBookmarkedByUserForOnePost } from '@/librairies/prisma-api';

const userId = "1"

const api = new GhostContentAPI({
  url: 'https://buried-signals.ghost.io',
  key: '83e1af7ff92a28bc3b60d51fca',
  version: "v5.0"
});

export async function getMember(slug) {
  const member = {
    name: "Tom Vaillant",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue ipsum, pulvinar in maximus ac.",
    image: {
      url: "/images/img-profil.jpg",
      alt: "Profil image"
    },
    socials: {
      twitter: "@tomvllnt",
      mail: "tom@buriedsignals.com"
    },
    bookmarks: {
      spotlights: [
        {
          slug: "toto",
          author: "The new york times",
          categories: ["3D", "Dataviz", "Geomapping"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is making her Olympic debut after the. Uncover the truth about the legal fishing industry. A challenging year. Her versatility...",
          image: {
            url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "week",
          likes: 0,
          comments: 10,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "titi",
          author: "The new york times",
          categories: ["3D", "Dataviz"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry. A challenging year. Her versatility",
          image: {
            url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            alt: "Default image"
          },
          awards: null,
          likes: 10100,
          comments: 0,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Sunisa Lee - The Gymnast",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        },
        {
          slug: "tata",
          author: "The new york times",
          categories: ["3D"],
          title: "Fin",
          description: "Lee, 18, is makingtry",
          image: {
            url: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          awards: "honors",
          likes: 152,
          comments: 30,
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          submited_by: {
            name: "Amelia Wattenberger",
            image: {
              url: "/images/img-profil.jpg",
              alt: "Profil image"
            }
          }
        }
      ],
      insights: [
        {
          slug: "toto",
          author: "Matt Conlen",
          categories: ["Research"],
          title: "Can You Recall What Brings You Joy?",
          description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
          image: {
            url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          published_at: "2022-08-24T09:54:04.908Z"
        },
        {
          slug: "titi",
          author: "Matt Conlen",
          categories: ["Interviews"],
          title: "Can You Recall What Brings You Joy? Can You Recall What Brings You Joy?",
          description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
          image: {
            url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          published_at: "2022-08-24T09:54:04.908Z"
        },
        {
          slug: "titi",
          author: "Matt Conlen",
          categories: ["Interviews"],
          title: "Can You Recall What Brings You Joy? Can You Recall What Brings You Joy?",
          description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point ",
          image: {
            url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "Default image"
          },
          source: {
            title: "articleurl.com",
            url: "https://www.google.fr"
          },
          published_at: "2022-08-24T09:54:04.908Z"
        },
      ]
    }
  }
  return member
}

export async function getMembers() {
  const members = [
    { slug: "remy-dumas" },
    { slug: "tom-vaillant" },
  ]
  return members
}

export async function postMemberSignup(email) {
  const result = await api.members.add({
    email: email,
  }, {
    send_email: true,
    email_type: 'signup',
  })
  return result
}

export async function postMemberNewsletter() {
  const result = await api.members.add({}, {
    send_email: false,
    email_type: 'subscribe',
  })
  return result
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
  return await parsePost(post, tag)
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

  return await parsePosts(posts, tag)
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

const parsePost = async (post, tag) => {
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
    id: post.id,
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
    likes: await getLikesForOnePost(post.id),
    liked: await getLikedByUserForOnePost(userId, post.id), 
    bookmarked: await getBookmarkedByUserForOnePost(userId, post.id), 
    comments: 0, // By plugin Ghost
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

const parsePosts = async (posts, tag) => {
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
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    postsParsed.push({
      id: post.id,
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
      likes: await getLikesForOnePost(post.id),
      liked: await getLikedByUserForOnePost(userId, post.id), 
      bookmarked: await getBookmarkedByUserForOnePost(userId, post.id), 
      comments: 0, // By plugin Ghost
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
  }
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