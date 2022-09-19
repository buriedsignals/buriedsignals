// Middlewares
import { getApolloClient } from '@/middlewares-statamic/librairies/apollo-client'
import { QUERY_PAGE_ABOUT_US } from "@/middlewares-statamic/datas/pages/about-us"
import { parsePageContent } from '../utils'

export async function getPageAboutUs() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_ABOUT_US,
  })
  if (!response) return null
  let page = response.data.entry
  return parsePageContent(page)
}
