// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_STUDIO } from "@/middlewares/datas/pages/studio"
import { parsePageFlexible } from '../utils'

export async function getPageStudio() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_STUDIO,
  })
  if (!response) return null
  let page = response.data.pages.data[0].attributes
  return parsePageFlexible(page)
}
