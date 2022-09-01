import useEventListener from "./useEventListener"
import { useEffect, useState } from "react"

export default function useClickOutside(ref, cb) {
  const [doc, setDoc] = useState()
  useEffect(() => {
    setDoc(document)
  }, [])
  useEventListener(
    "click",
    e => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    doc
  )
}