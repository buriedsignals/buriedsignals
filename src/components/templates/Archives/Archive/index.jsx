// Styles
import { ArchiveTemplateStyle } from "./index.style"
// Next
import Script from "next/script"
// Layouts
import Layout from "@/components/layouts/main"

export default function ArchiveTemplate({ archive, ...props }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/replaywebpage@1.7.13/ui.js" />
      <ArchiveTemplateStyle { ...props }>
        <replay-web-page class="archive" replayBase="./../replay/" source={ `./../wacz/${ archive.fileName }` } url={ archive.url }></replay-web-page>
      </ArchiveTemplateStyle>
    </>
  )
}