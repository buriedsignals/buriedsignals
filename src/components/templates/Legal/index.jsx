// Styles
import { LegalTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"

export default function LegalTemplate({ legal, ...props }) {
  return (
    <Layout>
      <LegalTemplateStyle>
        <h1 className="title container-module-small typography-04">{ legal.title }</h1>
        <div className="html-container" dangerouslySetInnerHTML={{ __html: legal.content }} />
      </LegalTemplateStyle>
    </Layout>
  )
}