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
    scroll: true,
    previousPath: null,
  }
})

export default useStore
