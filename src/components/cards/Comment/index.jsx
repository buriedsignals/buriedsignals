// Styles
import { CommentStyle } from "./index.style"
// Scripts
import { getTimeSince, getUserCookies } from "@/scripts/utils"
// React
import { useEffect, useState } from "react"
// Next
import Link from "next/link"
// Forms
import CommentForm from "@/components/form/Comment"
// Buttons
import DeleteButton from "@/components/buttons/Delete"
import EditButton from "@/components/buttons/Edit"
import ReplyButton from "@/components/buttons/Reply"

export default function Comment({ comment, postId, ...props }) {
  // Cookies
  const [userCookies, setUserCookies] = useState({ connected: false, id: null })
  useEffect(() => {
    setUserCookies(getUserCookies())
  }, [])
  // States
  const [editMode, setEditMode] = useState(false)
  const [replyMode, setReplyMode] = useState(false)
  // Handlers
  const onClickButtonEditComment = async (formRef, setAlertSignin, setInternalError) => {
    const commentInput = formRef.current.querySelector('.input-comment')
    const commentContent = commentInput.value
    try {
      const body = { 
        datasDelete: {
          id: comment.id,
          relation: `api::spotlights-post.spotlights-post:${postId}`,
          author: {
            id: comment.author.id
          }
        },
        datasCreate: {
          relation: `api::spotlights-post.spotlights-post:${postId}`,
          content: commentContent,
          author: {
            id: comment.author.id, 
            name: comment.author.name
          }
        },
        post: {
          id: postId,
          comments: comment.comments_length
        }
      };
      const reponse = await fetch('/api/post-update-comment-we4b1h29zb/', {
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
  const onClickButtonReplyComment = async (formRef, setAlertSignin, setInternalError) => {
    const commentInput = formRef.current.querySelector('.input-comment')
    const commentContent = commentInput.value
    try {
      const body = { 
        datas: {
          relation: `api::spotlights-post.spotlights-post:${postId}`,
          content: commentContent,
          threadOf: comment.threadOf ? comment.threadOf : comment.id,
          author: { 
            id: comment.author.id, 
            name: comment.author.name
          }
        },
        post: {
          id: postId,
          comments: comment.comments_length
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
  }
  return (
    <>
      <CommentStyle { ...props }>
        <div className="comment-container">
          <div className="comment-header">
            <div className="header-user">
              <Link href={ `/profiles/${ comment.author.slug }` }>
                <a className="name">
                  <p className="typography-12">{ comment.author.name }</p>
                </a>
              </Link>
              <p className="date typography-12">{ getTimeSince(comment.published_at) }</p>
            </div>
            <div className="header-actions">
              { 
                userCookies.connected && <>
                  {
                    (comment.author.id == userCookies.id) && <>
                      <DeleteButton comment={ comment } postId={ postId } authorId={ comment.author.id } />
                      <EditButton onClickButton={ () => setEditMode(!editMode) } />
                    </>
                  }
                  <ReplyButton onClickButton={ () => setReplyMode(!replyMode) } />
                </>
              }
            </div>
          </div>
          { editMode ? <CommentForm onClickButton={ onClickButtonEditComment } value={ comment.content } /> : <p className="comment-content typography-12">{ comment.content }</p> }
            <div className="footer-actions">
              { 
                userCookies.connected && <>
                  {
                    (comment.author.id == userCookies.id) && <>
                      <DeleteButton comment={ comment } postId={ postId } authorId={ comment.author.id } />
                      <EditButton onClickButton={ () => setEditMode(!editMode) } />
                    </>
                  }
                  <ReplyButton onClickButton={ () => setReplyMode(!replyMode) } />
                </>
              }
            </div>
        </div>
      </CommentStyle>
      { replyMode && 
        <div className="add-container">
          <CommentForm onClickButton={ onClickButtonReplyComment } />
        </div>
      }
    </>
  )
}