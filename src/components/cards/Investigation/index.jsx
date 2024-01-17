// Styles
import { InvestigationStyle } from "./index.style"
// Scripts
import { getUserCookies, limitSizeText } from "@/scripts/utils"
// Next
import Link from "next/link"
// Buttons
import LikeButton from "@/components/buttons/Like"
import BookmarkButton from "@/components/buttons/Bookmark"
import CommentButton from "@/components/buttons/Comment"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';

export default function Investigation({ post, ...props }) {
  // Cookies
  const user = getUserCookies()
  return (
    <InvestigationStyle href={ post.source.url } target="_blank" rel="noopener noreferrer" { ...props }>
      <div className="investigation-container">
        <div className="visual-container">
          <img src={ post.image.url } alt={ post.image.alt } />
        </div>
        <div className="content-container">
          <div className="extras-container">
            <p className="author typography-03">{ post.source.author }</p>
          </div>
          <div className="informations-container">
            <h2 className="title typography-06">{ limitSizeText(post.title, useBreakpoint(down('md')) ? 100 : 100) }</h2>
            <p className="description typography-07">{ limitSizeText(post.description, useBreakpoint(down('md')) ? 235 : 235) }</p>
          </div>
        </div>
      </div>
    </InvestigationStyle>
  )
}