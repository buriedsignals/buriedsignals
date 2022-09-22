import create from 'zustand'

const useStore = create((set) => {
  return {
    user: {
      connected: true,
      id: 1,
      slug: "remy-dumas",
      bookmarked: {
        insights: [
          { id: 1, slug: "can-you-recall-what-brings-you-joy" }
        ],
        spotlights: [
          { id: 1, slug: "sunisa-lee-the-gymnast" }
        ]
      },
      description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point.",
      email: "toto@gmail.com",
      liked: {
        spotlights: [1, 4]
      },
      name: "Toto Rollant",
      slug: "toto-rollant",
      twitter_account: "@rmdms"
    },
    scroll: true,
  }
})

export default useStore
