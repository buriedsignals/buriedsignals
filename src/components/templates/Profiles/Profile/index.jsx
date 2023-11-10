// Styles
import { ProfileTemplateStyle } from "./index.style"
// Scripts
import { copyClipboard, getUserCookies, logoutUserCookies } from "@/scripts/utils"
// React
import { useEffect, useState } from "react"
// Next
import { useRouter } from "next/router"
// Layouts
import Layout from "@/components/layouts/main"
// Accordions
import AccordionModule from "@/components/accordions/Profile"
// Modals
import Edit from "@/components/modals/Edit"
// Buttons
import SecondaryButton from "@/components/buttons/Secondary"
// Icons
import MailIcon from "@/components/icons/Mail"
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import BehanceIcon from "@/components/icons/Behance"
import PortfolioIcon from "@/components/icons/Portfolio"

export default function ProfileTemplate({ member, ...props }) {
  // Cookies
  const [user, setUser] = useState(member)
  const [userCookies, setUserCookies] = useState({ connected: false })
  useEffect(() => {
    setUserCookies(getUserCookies())
  }, [])
  // Router
  const router = useRouter()
  // Handlers
  const onClickButtonSignout = () => {
    logoutUserCookies()
    document.location.href = window.location.protocol + "//" + window.location.host + "/profiles/signin"
  }
  return (
    <Layout>
      <ProfileTemplateStyle { ...props }>
        <div className="profile-container">
          { userCookies.connected &&
              <div className="container-module-large buttons-container">
                <ul className="action-container">
                  <li>
                    <Edit user={ user } setUser={ setUser } />
                  </li>
                  <li>
                    <SecondaryButton onClickButton={ onClickButtonSignout } >
                      <p className="typography-03">Sign out</p>
                    </SecondaryButton>
                  </li>
                </ul>
              </div>
          }
          <div className="profile container-module-large">
            <h1 className="name typography-04">{ user.name }</h1>
            <p className="type typography-10">{ user.type }</p>
          </div>
          <div className="container-module-large description-container">
            <p className="typography-07">{ user.description }</p>
          </div>
          <div className="container-module-large extras-container">
            <div className="extras">
              <ul className="expertises-container">
                <li>
                  <p className="subtitle typography-05">Expertise</p>
                </li>
                { user.expertises.filter(expertise => expertise.checked).map((expertise, index) => {  
                  return <li key={ `expertise-${ index }` } className="expertise-container">
                    <p className="typography-05">{ expertise.title }</p>
                  </li>
                }) }
              </ul>
              <div className="networks">
                <p className="subtitle typography-05">Social</p>
                <div className="networks-container">
                  { user.email && <a className="email" href={ `mailto:${ user.email }` }  target="_blank" rel="noopener noreferrer"><MailIcon /></a> }
                  { user.instagram_account && <a className="instagram" href={ `https://www.instagram.com/${ user.instagram_account }` }  target="_blank" rel="noopener noreferrer"><InstagramIcon /></a> }
                  { user.twitter_account && <a className="twitter" href={ `https://twitter.com/${ user.twitter_account }` }  target="_blank" rel="noopener noreferrer"><TwitterIcon /></a> }
                  { user.behance_account && <a className="behance" href={ `https://www.behance.net/${ user.behance_account }` }  target="_blank" rel="noopener noreferrer"><BehanceIcon /></a> }
                  { user.portfolio && <a className="portfolio" href={ user.portfolio }  target="_blank" rel="noopener noreferrer"><PortfolioIcon /></a> }
                </div>
              </div>
            </div>
          </div>
        </div>
        <AccordionModule panels={ user.bookmarked } />
      </ProfileTemplateStyle>
    </Layout>
  )
}