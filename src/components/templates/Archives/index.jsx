// Styles
import { ArchivesTemplateStyle } from "./index.style"
// Next
import Link from "next/link"
// Layouts
import Layout from "@/components/layouts/main"

export default function ArchivesTemplate({ archives, ...props }) {
  return (
    <Layout>
      <ArchivesTemplateStyle>
        <h1 className="title container-module-large typography-04">{ archives.page.title }</h1>
        <div className="container-module-large description-container">
          <p className="typography-07">{ archives.page.description }</p>
        </div>
        <ul className="container-module-large list-container">
          { archives.posts.map((post, index) => {
            return <li key={ `post-${ index }` } className="item-container">
              <a href={ `/archives/${ post.slug }` }>
                <p className="typography-01">{ `🔗 Archive ${ index < 10 ? '0' + (index + 1) : (index + 1) } : ${ post.title }` }</p>
              </a>
            </li>
          }) }
        </ul>
      </ArchivesTemplateStyle>
    </Layout>
  )
}