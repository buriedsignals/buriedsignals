// Middlewares
import { getApolloClient } from '@/middlewares-statamic/librairies/apollo-client'
import { QUERY_PAGE_NOTICE } from "@/middlewares-statamic/datas/pages/notice"
import { parsePageContent } from '../utils'

export async function getPageNotice() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_NOTICE,
  })
  if (!response) return null
  let page = response.data.entry
  return parsePageContent(page)
}
