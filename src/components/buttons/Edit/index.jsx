// Styles
import { EditStyle } from "./index.style"
// React
import { useRef, useState } from "react"
// Next
import { useRouter } from "next/router"
// Banners
import ErrorBanner from "@/components/banners/Error"
// Icons
import EditIcon from "@/components/icons/Edit"

export default function Edit({ onClickButton, ...props }) {
  // // States
  // const [internalError, setInternalError] = useState(false)
  // // Router
  // const router = useRouter()
  // // References
  // const formRef = useRef()
  // // Handlers
  // const onClickButton = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const body = { 
  //       datasDelete: {
  //         id: commentId,
  //         relation: `api::spotlights-post.spotlights-post:${postId}`,
  //         author: {
  //           id: authorId
  //         }
  //       },
  //       datasCreate: {
  //         relation: `api::spotlights-post.spotlights-post:${postId}`,
  //         content: "It's change",
  //         author: {
  //           id: authorId, 
  //           name: authorName
  //         }
  //       }
  //     };
  //     console.log(body)
  //     const reponse = await fetch('/api/post-update-comment-we4b1h29zb/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body),
  //     });
  //     const result = await reponse.json()
  //     if (result.errors) {
  //       setInternalError(true)
  //     } else {
  //       // router.reload(window.location.pathname)
  //       document.location.href = window.location.pathname;
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     setInternalError(true)
  //   }
  // }
  return (
    <>
      <EditStyle onClick={ onClickButton } { ...props }>
        <div className="edit-container">
            <EditIcon />
            <p className="typography-11">Edit</p>
        </div>
      </EditStyle>
      {/* { internalError && <ErrorBanner onClickButtonClose={ setInternalError } /> } */}
    </>
  )
}