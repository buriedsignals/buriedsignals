// Next
import Head from 'next/head'
// Templates
import SigninTemplate from "@/components/templates/Profiles/Signin"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO'

export default function Signin() {
  return (
    <>
      <HeadSEOModule meta={ {
        title: "Buried Signals - Sign in"
      } } />
      <SigninTemplate />
    </>
  )
}