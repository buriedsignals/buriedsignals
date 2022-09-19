// Middlewares
import { getApolloClient } from '@/middlewares-statamic/librairies/apollo-client'
import { QUERY_PAGE_INSIGHTS } from "@/middlewares-statamic/datas/pages/insights"
import { parsePageSimple } from '../utils'

export async function getPageInsights() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_INSIGHTS,
  })
  if (!response) return null
  let page = response.data.entry
  return parsePageSimple(page)
}
