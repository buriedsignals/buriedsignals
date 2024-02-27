// Styles
import { SupportersTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"
import PostsSliderModule from "@/components/modules/PostsSlider"
// Cards
import IncludeCard from "@/components/cards/Include"
// Links
import PrimaryLink from "@/components/links/Primary"

export default function SupportersTemplate({ supporters, ...props }) {
  return (
    <Layout>
      <SupportersTemplateStyle>
        <div className="supporters container-module-large">
          <div className="informations">
            <h1 className="title typography-04">{ supporters.page.title }</h1>
            <div className="description-container">
             { (() => {
                const descriptionSplit = supporters.page.description.split('\n')
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
          { supporters.page.flexible_content[0] &&
            <div className="includes">
              <p className="typography-22">{ supporters.page.flexible_content[0].title }</p>
              <div className="list">
                { Array.from({ length: Math.round(supporters.page.flexible_content[0].items.length / 2) }).map((el, index) => {
                  const item1 = supporters.page.flexible_content[0].items[index * 2]
                  const item2 = supporters.page.flexible_content[0].items[(index * 2) + 1] ? supporters.page.flexible_content[0].items[(index * 2) + 1] : null
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
          <div className="container-module-large description-container">
            <p className="typography-07">A community of experts in visual data storytelling who have supported or contributed to the project.</p>
          </div>
          {/* <PostsListModule type="supporter" posts={ supporters.users } meta={ supporters.meta } /> */}
          <PostsSliderModule type="experts" posts={supporters.spotlights} meta={ supporters.meta }/>
        </div>
      </SupportersTemplateStyle>
    </Layout>
  )
}