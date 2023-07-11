// Styles
import { CommentsStyle } from "./index.style"
// Scripts
import { getUserCookies } from "@/scripts/utils"
// React
import { useRef, useState } from "react"
// Next
import { useRouter } from "next/router"
// Modules
import CommentsThreadModule from "@/components/modules/CommentsThread"
// Forms
import CommentForm from "@/components/form/Comment"
// Cards
import CommentCard from "@/components/cards/Comment"
// Buttons
import ThirstyButton from "@/components/buttons/Thirsty"

export default function Comments({ comments, comments_length, postId, max = 5, ...props }) {
  // Cookies
  const user = getUserCookies()
  // States
  const [page, setPage] = useState(1)
  // Handlers
  const onClickButtonMoreComments = () => {
    setPage(page + 1)
  }  
  const onClickButtonAddComment = async (formRef, setAlertSignin, setInternalError) => {
    if (user.connected) {
      const commentInput = formRef.current.querySelector('.input-comment')
      const comment = commentInput.value
      try {
        const body = { 
          datas: {
            relation: `api::spotlights-post.spotlights-post:${postId}`,
            content: comment,
            author: { 
              id: user.id, 
              name: user.name
            }
          },
          post: {
            id: postId,
            comments: comments_length
          }
        };
        const reponse = await fetch('/api/post-create-comment-2i9sft3rs6/', {
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
    } else {
      setAlertSignin(true)
    }
  }
  return (
    <CommentsStyle { ...props }>
      <div className="comments-container">
        <div className="container-module-medium">
          <h3 className="typography-09 title">{ `${ comments_length } comments`}</h3>
          <div className="add-container">
            <CommentForm onClickButton={ onClickButtonAddComment } />
          </div>
          <div className="panel-container">
            { comments.map((comment, index) => {
              if (index < max * page) {
                comment.total_comments = comments_length
                return <div key={ index }>
                  <CommentCard comment={ comment } postId={ postId } />
                  { comment.comments && <CommentsThreadModule comments={ comment.comments } postId={ postId } /> }
                </div>
              }
            }) }
          </div>
          { comments.length > max * page && 
            <div className="more-comments">
              <ThirstyButton onClickButton={ onClickButtonMoreComments }>Load more</ThirstyButton>
            </div>
          }
        </div>
      </div>
    </CommentsStyle>
  )
}