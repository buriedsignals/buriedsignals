import create from 'zustand'

const useStore = create((set) => {
  return {
    connected: true,
    scroll: true,
  }
})

export default useStore
