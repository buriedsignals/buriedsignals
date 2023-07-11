// Styles
import { DeleteStyle } from "./index.style"
// React
import { useState } from "react"
// Next
import { useRouter } from "next/router"
// Banners
import ErrorBanner from "@/components/banners/Error"
// Icons
import DeleteIcon from "@/components/icons/Delete"

export default function Delete({ comment, postId, authorId, ...props }) {
  // States
  const [internalError, setInternalError] = useState(false)
  // Router
  const router = useRouter()
  // Handlers
  const onClickButton = async (e) => {
    e.preventDefault()
    try {
      const body = { 
        datas: {
          id: comment.id,
          relation: `api::spotlights-post.spotlights-post:${postId}`,
          author: {
            id: authorId
          }
        },
        post: {
          id: postId,
          comments: comment.total_comments
        }
      };
      const reponse = await fetch('/api/post-delete-comment-ezym751f1p/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await reponse.json()
      if (result.errors) {
        setInternalError(true)
      } else {
        // router.reload(window.location.pathname)
        document.location.href = window.location.pathname;
      }
    } catch (error) {
      console.error(error)
      setInternalError(true)
    }
  }
  return (
    <>
      <DeleteStyle onClick={ onClickButton } { ...props }>
        <div className="delete-container">
            <DeleteIcon />
            <p className="typography-11">Delete</p>
        </div>
      </DeleteStyle>
      { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> }
    </>
  )
}