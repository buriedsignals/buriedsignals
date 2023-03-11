// Styles
import { ArchiveTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"

export default function ArchiveTemplate({ archive, ...props }) {
  return (
    <>
      <ArchiveTemplateStyle { ...props }>
        <replay-web-page class="archive" replayBase="./../replay/" source={ `./../wacz/${ archive.fileName }` } url={ archive.url }></replay-web-page>
      </ArchiveTemplateStyle>
    </>
  )
}