// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_SPOTLIGHT } from "@/middlewares/datas/pages/spotlight"
import { parsePageFlexible } from '../utils'

export async function getPageSpotlight() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_SPOTLIGHT,
  })
  if (!response || response.data.pages.data.length == 0) return null
  let page = response.data.pages.data[0].attributes
  return parsePageFlexible(page)
}
