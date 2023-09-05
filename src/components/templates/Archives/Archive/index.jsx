// Styles
import { ArchiveTemplateStyle } from "./index.style"
// Links
import SecondaryLink from "@/components/links/Secondary";
// Icons
import ArrowIcon from "@/components/icons/Arrow";

export default function ArchiveTemplate({ archive, ...props }) {
  return (
    <>
      <ArchiveTemplateStyle { ...props }>
        <div className="container-module-large link-container">
          <SecondaryLink href={ `/spotlights/${ archive.slug }` } intern={ true }>
            <ArrowIcon className="arrow" />
            <p className="typography-03">Back to inspiration</p>
          </SecondaryLink>
        </div>
        <replay-web-page class="archive" replayBase="./../replay/" source={ archive.source.file } url={ archive.source.link }></replay-web-page>
      </ArchiveTemplateStyle>
    </>
  )
}