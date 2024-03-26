// Styles
import { ProjectStyle } from "./index.style"
// Scripts
import { limitSizeText } from "@/scripts/utils"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';

export default function Project({ post, ...props }) {
  return (
    <ProjectStyle href={ post.source.url } target="_blank" rel="noopener noreferrer" { ...props }>
      <div className="project-container">
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
    </ProjectStyle>
  )
}