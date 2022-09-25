// Styles
import { CommentsThreadStyle } from "./index.style"
// React
import { useState } from "react"
// Hooks
import useArray from "@/hooks/useArray"
// Cards
import CommentCard from "@/components/cards/Comment"
// Buttons
import ThirstyButton from "@/components/buttons/Thirsty"

export default function CommentsThread({ comments, max = 3, postId, ...props }) {
  // States
  const [page, setPage] = useState(1)
  // Hooks
  comments = useArray(comments)
  // Handlers
  const onClickButtonMoreComments = () => {
    setPage(page + 1)
  }  
  return (
    <CommentsThreadStyle { ...props }>
      <div className="comments-thread-container">
        <div className="panel-container">
          { comments.array.map((comment, index) => {
            if (index < max * page) {
              return <CommentCard key={ index } comment={ comment } postId={ postId } />
            }
          }) }
          { comments.array.length > max * page && 
            <div className="more-comments">
              <ThirstyButton onClickButton={ onClickButtonMoreComments }>Load more</ThirstyButton>
            </div>
          }
        </div>
      </div>
    </CommentsThreadStyle>
  )
}