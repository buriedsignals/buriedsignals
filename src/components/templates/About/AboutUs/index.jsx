// Styles
import { AboutUsTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts"
// Modules
import NewsletterModule from "@/components/modules/Newsletter"
import FlexibleContentModule from "@/components/modules/FlexibleContent"

export default function AboutUsTemplate({ aboutUs, ...props }) {
  return (
    <Layout>
      <AboutUsTemplateStyle>
        <div className="hero-container">
          <h1 className="title container-module-medium typography-04">{ aboutUs.title }</h1>
        </div>
        <FlexibleContentModule content={ aboutUs.flexible_content } />
        <NewsletterModule />
      </AboutUsTemplateStyle>
    </Layout>
  )
}