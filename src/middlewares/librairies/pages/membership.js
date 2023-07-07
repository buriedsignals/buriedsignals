// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_MEMBERSHIP } from "@/middlewares/datas/pages/membership"
import { parsePageFlexible } from '../utils'

export async function getPageMembership() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_MEMBERSHIP,
  })
  if (!response || response.data.pages.data.length == 0) return null
  let page = response.data.pages.data[0].attributes
  return parsePageFlexible(page)
}
