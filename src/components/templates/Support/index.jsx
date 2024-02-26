// Styles
import { SupportTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"
// Cards
import IncludeCard from "@/components/cards/Include"
// Links
import PrimaryLink from "@/components/links/Primary"

export default function SupportTemplate({ support, ...props }) {
  return (
    <Layout>
      <SupportTemplateStyle>
        <div className="support container-module-large">
          <div className="informations">
            <h1 className="title typography-04">{ support.page.title }</h1>
            <div className="description-container">
             { (() => {
                const descriptionSplit = support.page.description.split('\n')
                const paragraphes = []
                descriptionSplit.map(p => {
                  if (p !== "") {
                    paragraphes.push(<p className="typography-07">{ p }</p>)
                  }
                })
                return paragraphes
              })() }
            </div>
            <PrimaryLink href="https://www.buymeacoffee.com/buriedsignals" intern={ false }>
              <p className="typography-03">Buy Me a Coffee</p>
            </PrimaryLink>
          </div>
          { support.page.flexible_content[0] &&
            <div className="includes">
              <p className="typography-22">{ support.page.flexible_content[0].title }</p>
              <div className="list">
                { Array.from({ length: Math.round(support.page.flexible_content[0].items.length / 2) }).map((el, index) => {
                  const item1 = support.page.flexible_content[0].items[index * 2]
                  const item2 = support.page.flexible_content[0].items[(index * 2) + 1] ? support.page.flexible_content[0].items[(index * 2) + 1] : null
                  return (
                    <div key={ `includes-${ index }` } className="row">
                      <IncludeCard text={ item1.text } soon={ item1.soon } />
                      { item2 && <IncludeCard text={ item2.text } soon={ item2.soon } /> }
                    </div>
                  )
                }) }
              </div>
            </div>
          }
        </div>
        <div className="supporter">
          <h2 className="title container-module-large typography-04">Supporters</h2>
          <PostsListModule type="supporter" posts={ support.users } meta={ support.meta } />
        </div>
      </SupportTemplateStyle>
    </Layout>
  )
}