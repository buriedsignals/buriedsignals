// Styles
import { ProfileTemplateStyle } from "./index.style"
// Scripts
import { copyClipboard, getUserCookies, logoutUserCookies } from "@/scripts/utils"
// React
import { useEffect, useState } from "react"
// Next
import { useRouter } from "next/router"
// Layouts
import Layout from "@/components/layouts"
// Modules
import AccordionModule from "@/components/modules/Accordion"
// Modals
import Edit from "@/components/modals/Edit"
// Buttons
import SecondaryButton from "@/components/buttons/Secondary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"
import MailIcon from "@/components/icons/Mail"

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
    router.push("/profiles/signin")
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
          <h1 className="name container-module-large typography-04">{ user.name }</h1>
          <div className="container-module-large extras-container">
            <ul className="social-container">
              <li>
                <SecondaryButton onClickButton={ () => copyClipboard(user.twitter_account) } >
                  <TwitterIcon size="small" />
                </SecondaryButton>
                <p className="typography-05">{ user.twitter_account }</p>
              </li>
              <li>
                <SecondaryButton onClickButton={ () => copyClipboard(user.email) } >
                  <MailIcon size="small" />
                </SecondaryButton>
                <p className="typography-05">{ user.email }</p>
              </li>
            </ul>
          </div>
          <div className="container-module-large description-container">
            <p className="typography-07">{ user.description }</p>
          </div>
        </div>
        <AccordionModule panels={ user.bookmarked } />
      </ProfileTemplateStyle>
    </Layout>
  )
}