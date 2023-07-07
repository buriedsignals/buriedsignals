// Next
import Head from 'next/head'
// Templates
import SignupTemplate from "@/components/templates/Profiles/Signup"
// Modules
import HeadSEOModule from '@/components/modules/HeadSEO'

export default function Signup() {
  return (
    <>
      <HeadSEOModule meta={ {
        title: "Buried Signals - Sign up"
      } } />
      <SignupTemplate />
    </>
  )
}