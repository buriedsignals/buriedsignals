// Styles
import { SpotlightsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"
// Modules
import PostsListModule from "@/components/modules/PostsList"
import NewsletterModule from "@/components/modules/Newsletter"

const posts = [
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
]
const categories = ["3D", "Geomapping", "Dataviz", "Cinematic"]

export default function SpotlightsTemplate({ spotlights }) {
  return (
    <Layout>
      <SpotlightsTemplateStyle>
        <h1 className="title container-module-large typography-04">Spotlights</h1>
        <PostsListModule type="spotlight" posts={ spotlights.posts } categories={ spotlights.categories } awards={ spotlights.awards } />
        <NewsletterModule />
      </SpotlightsTemplateStyle>
    </Layout>
  )
}