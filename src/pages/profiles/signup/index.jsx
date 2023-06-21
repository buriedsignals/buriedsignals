// Next
import Head from 'next/head'
// Templates
import SignupTemplate from "@/components/templates/Profiles/Signup"

export default function Signup() {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Sign up</title>
      </Head>
      <SignupTemplate />
    </>
  )
}