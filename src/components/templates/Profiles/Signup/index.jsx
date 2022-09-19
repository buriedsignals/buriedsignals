// Styles
import { SignupTemplateStyle } from "./index.style"
// Next
import Link from "next/link"
// Layouts
import Layout from "@/components/layouts"
// Buttons
import PrimaryButton from "@/components/buttons/Primary"
// Icons
import TwitterIcon from "@/components/icons/Twitter"

export default function SignupTemplate({ ...props }) {
  // Handlers
  const onClickButtonSignup = () => {}
  return (
    <Layout>
      <SignupTemplateStyle { ...props }>
        <div className="container-module-extra-small signup-container">
          <h1 className="title typography-04">Sign up</h1>
          <div className="form-container">
            <a href="" className="connect-twitter">
              <TwitterIcon />
              <p className="typography-17">Sign up with Twitter</p>
            </a>
            <p className="label typography-01">Sign up with e-mail</p>
            <div className="form">
              <div className="inputs-container">
                <input className="typography-01" type="email" placeholder="Your E-mail" />
                {/* <input className="typography-01" type="password" placeholder="Password" /> */}
              </div>
              <PrimaryButton onClickButton={ onClickButtonSignup }>
                <p className="typography-03">Sign up</p>
              </PrimaryButton>
              <Link href="/profiles/signin">
                <a>
                  <p  className="typography-01">Sign in now</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SignupTemplateStyle>
    </Layout>
  )
}