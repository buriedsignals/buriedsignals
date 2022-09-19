// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_INSIGHTS } from "@/middlewares/datas/pages/insights"
import { parsePageSimple } from '../utils'

export async function getPageInsights() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_INSIGHTS,
  })
  if (!response) return null
  let page = response.data.pages.data[0].attributes
  return parsePageSimple(page)
}
