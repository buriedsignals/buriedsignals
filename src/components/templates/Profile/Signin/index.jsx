// Styles
import { SigninTemplateStyle } from "./index.style"
// Next
import Link from "next/link"
// Layouts
import Layout from "@/components/layouts"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"

export default function SigninTemplate({ ...props }) {
  // Handlers
  const onClickButtonSignin = () => {}
  return (
    <Layout>
      <SigninTemplateStyle { ...props }>
        <div className="container-module-extra-small signin-container">
          <h1 className="title typography-04">Sign in</h1>
          <div className="form-container">
            <a href="" className="connect-twitter">
              <TwitterIcon />
              <p className="typography-17">Sign in with Twitter</p>
            </a>
            <p className="label typography-01">Sign in with e-mail</p>
            <div className="form">
              <div className="inputs-container">
                <input className="typography-01" type="email" placeholder="Your E-mail" />
                <input className="typography-01" type="password" placeholder="Password" />
              </div>
              <PrimaryButton onClickButton={ onClickButtonSignin }>
                <p className="typography-03">Sign in</p>
              </PrimaryButton>
              <Link href="/signup">
                <a>
                  <p  className="typography-01">Sign up now</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SigninTemplateStyle>
    </Layout>
  )
}