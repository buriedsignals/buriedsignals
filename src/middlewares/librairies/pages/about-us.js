// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_ABOUT_US } from "@/middlewares/datas/pages/about-us"
import { parsePageFlexible } from '../utils'

export async function getPageAboutUs() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_ABOUT_US,
  })
  if (!response) return null
  let page = response.data.pages.data[0].attributes
  return parsePageFlexible(page)
}
