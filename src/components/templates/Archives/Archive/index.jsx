// Styles
import { ArchiveTemplateStyle } from "./index.style"
import percentile from "percentile";
// Layouts
import Layout from "@/components/layouts/main"
import { forEach } from "lodash";

export default function ArchiveTemplate({ archive, ...props }) {
  return (
    <>
      <ArchiveTemplateStyle { ...props }>
        <replay-web-page class="archive" replayBase="./../replay/" source={ archive.source.file } url={ archive.source.link }></replay-web-page>
      </ArchiveTemplateStyle>
    </>
  )
}