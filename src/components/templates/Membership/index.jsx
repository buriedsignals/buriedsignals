// Styles
import { MembershipTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Modules
import PostsListModule from "@/components/modules/PostsList"
// Cards
import IncludeCard from "@/components/cards/Include"
// Links
import PrimaryLink from "@/components/links/Primary"

export default function MembershipTemplate({ membership, ...props }) {
  return (
    <Layout>
      <MembershipTemplateStyle>
        <div className="membership container-module-large">
          <div className="informations">
            <h1 className="title typography-04">{ membership.page.title }</h1>
            <div className="description-container">
             { (() => {
                const descriptionSplit = membership.page.description.split('\n')
                const paragraphes = []
                descriptionSplit.map(p => {
                  if (p !== "") {
                    paragraphes.push(<p className="typography-07">{ p }</p>)
                  }
                })
                return paragraphes
              })() }
            </div>
            <PrimaryLink href="https://t1ipnnn9dzv.typeform.com/to/khhK4BJ2" intern={ false }>
              <p className="typography-03">Become a member</p>
            </PrimaryLink>
          </div>
          { membership.page.flexible_content[0] &&
            <div className="includes">
              <p className="typography-22">{ membership.page.flexible_content[0].title }</p>
              <div className="list">
                { Array.from({ length: Math.round(membership.page.flexible_content[0].items.length / 2) }).map((el, index) => {
                  const item1 = membership.page.flexible_content[0].items[index * 2]
                  const item2 = membership.page.flexible_content[0].items[(index + 1) * 2] ? membership.page.flexible_content[0].items[index + 1] : null
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
        <div className="jury">
          <h2 className="title container-module-large typography-04">Jury</h2>
          <PostsListModule type="jury" posts={ membership.users } meta={ membership.meta } />
        </div>
      </MembershipTemplateStyle>
    </Layout>
  )
}