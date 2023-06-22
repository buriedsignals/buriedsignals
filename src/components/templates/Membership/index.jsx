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

export default function MembershipTemplate({ jury, ...props }) {
  return (
    <Layout>
      <MembershipTemplateStyle>
        <div className="membership container-module-large">
          <div className="informations">
            <h1 className="title typography-04">Membership</h1>
            <div className="description-container">
              <p className="typography-07">Whether you want access to additional insights and case studies from experts, a research-based playbook, to participate in private events with creative technologists or journalists sharing their learnings, or if you just want to support the magazine - this is the place for you.</p>
              <p className="typography-07">Join the waitlist to get a 50% discount, the membership will open in a few months.</p>
            </div>
            <PrimaryLink href="https://t1ipnnn9dzv.typeform.com/to/khhK4BJ2" intern={ false }>
              <p className="typography-03">Become a member</p>
            </PrimaryLink>
          </div>
          <div className="includes">
            <p className="typography-22">Includes</p>
            <div className="list">
              <div className="row">
                <IncludeCard text={ "Featured listing on talent list" } soon={ true } />
                <IncludeCard text={ "Personal portfolio archiving with WebRecorder" } soon={ true } />
              </div>
              <div className="row">
                <IncludeCard text={ "A free digital copy of the *Effective Authoring Playbook*" } soon={ true } />
                <IncludeCard text={ "Invitations to 4 Reading Club meetups per year" } />
              </div>
              <div className="row">
                <IncludeCard text={ "Exclusive access to 8 case studies per year, from authors presenting groundbreaking projects" } />
                <IncludeCard text={ "Access to the Slack channel, with the ability to submit and vote on Inspiration posts" } />
              </div>
              <div className="row">
                <IncludeCard text={ "A social media shoutout" } />
              </div>
            </div>
          </div>
        </div>
        <div className="jury">
          <h2 className="title container-module-large typography-04">{ jury.page.title }</h2>
          <PostsListModule type="jury" posts={ jury.users } max={ 99999 } />
        </div>
      </MembershipTemplateStyle>
    </Layout>
  )
}