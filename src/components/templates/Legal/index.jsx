// Styles
import { LegalTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"
// Modules
import FlexibleContentModule from "@/components/modules/FlexibleContent"

export default function LegalTemplate({ legal, ...props }) {
  return (
    <Layout>
      <LegalTemplateStyle>
        <h1 className="title container-module-small typography-04">{ legal.title }</h1>
        <FlexibleContentModule content={ legal.flexible_content } />
      </LegalTemplateStyle>
    </Layout>
  )
}