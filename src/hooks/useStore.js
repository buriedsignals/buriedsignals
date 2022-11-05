import create from 'zustand'

const useStore = create((set) => {
  return {
    user: {
      connected: false,
      id: null,
      slug: null,
      bookmarked: {
        insights: [],
        spotlights: [],
        resources: []
      },
      description: null,
      email: null,
      liked: {
        spotlights: []
      },
      name: null,
      twitter_account: null
    },
    // user: {
    //   connected: true,
    //   id: 1,
    //   slug: "eric-dupont",
    //   bookmarked: {
    //     insights: [
    //       { id: 1, slug: "can-you-recall-what-brings-you-joy" }
    //     ],
    //     spotlights: [
    //       { id: 1, slug: "sunisa-lee-the-gymnast" }
    //     ],
    //     resources: []
    //   },
    //   description: "The first time I ate at a restaurant after COVID hit was in September 2020. That seems wild from this late pandemic vantage point.",
    //   email: "eric.dupont@gmail.com",
    //   liked: {
    //     spotlights: [1, 4]
    //   },
    //   name: "Eric Dupont",
    //   twitter_account: "@rcdpnt"
    // },
    scroll: true,
    previousPath: null
  }
})

export default useStore
