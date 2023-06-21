// Next
import Head from 'next/head'
// Templates
import ForgotPasswordTemplate from "@/components/templates/Profiles/ForgotPassword"

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title key='title'>Buried Signals | Forgot Password</title>
      </Head>
      <ForgotPasswordTemplate />
    </>
  )
}