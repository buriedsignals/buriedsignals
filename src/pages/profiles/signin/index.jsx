// Next
import Head from 'next/head'
// Templates
import SigninTemplate from "@/components/templates/Profiles/Signin"

export default function Signin() {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Sign in</title>
      </Head>
      <SigninTemplate />
    </>
  )
}