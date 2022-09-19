// Middlewares
import { getApolloClient } from '@/middlewares-statamic/librairies/apollo-client'
import { QUERY_PAGE_PRIVACY } from "@/middlewares-statamic/datas/pages/privacy"
import { parsePageContent } from '../utils'

export async function getPagePrivacy() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_PRIVACY,
  })
  if (!response) return null
  let page = response.data.entry
  return parsePageContent(page)
}
