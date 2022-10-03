// Styles
import { PublicationTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import NewsletterModule from "@/components/modules/Newsletter"
import FlexibleContentModule from "@/components/modules/FlexibleContent"

export default function PublicationTemplate({ publication, ...props }) {
  return (
    <Layout>
      <PublicationTemplateStyle>
        <div className="hero-container">
          <h1 className="title container-module-medium typography-04">{ publication.description }</h1>
        </div>
        <div className="flexible-container">
          <FlexibleContentModule content={ publication.flexible_content } />
        </div>
        <div className="images-container container-module-medium">
          <img src="/images/logo-02.gif" alt="Logo 02" />
          <img src="/images/logo-01.png" alt="Logo 01" />
        </div>
        <NewsletterModule />
      </PublicationTemplateStyle>
    </Layout>
  )
}