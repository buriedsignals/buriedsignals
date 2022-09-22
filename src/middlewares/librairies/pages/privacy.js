// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_PRIVACY } from "@/middlewares/datas/pages/privacy"
import { parsePageFlexible } from '../utils'

export async function getPagePrivacy() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_PRIVACY,
  })
  if (!response) return null
  let page = response.data.pages.data[0].attributes
  return parsePageFlexible(page)
}
