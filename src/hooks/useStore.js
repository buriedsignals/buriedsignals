import create from 'zustand'

const useStore = create((set) => {
  return {
    user: {
      connected: true,
      slug: "remy-dumas",
    },
    scroll: true,
  }
})

export default useStore
