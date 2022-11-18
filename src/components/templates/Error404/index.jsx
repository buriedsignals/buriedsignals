// Styles
import { Error404TemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Links
import SecondaryLink from "@/components/links/Secondary"
// Icons
import ArrowIcon from "@/components/icons/Arrow"
import LinesIcon from "@/components/icons/Lines"

export default function Error404Template({ resources, ...props }) {
  return (
    <Layout>
      <Error404TemplateStyle className="container-module-large">
        <h1 className="title typography-19">
          404
          <div className="title-image">
            <LinesIcon className="lines" />
          </div>
        </h1>
        <div className="description-container">
          <p className="typography-04">Oups... looks like there is no signal in here</p>
          <SecondaryLink href="/" intern={ true } className="back">
            <ArrowIcon className="arrow" />
            <p className="typography-03">Back to home</p>
          </SecondaryLink>
        </div>
      </Error404TemplateStyle>
    </Layout>
  )
}