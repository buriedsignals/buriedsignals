// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_SPOTLIGHTS } from "@/middlewares/datas/pages/spotlights"
import { parsePageSimple } from '../utils'

export async function getPageSpotlights() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_SPOTLIGHTS,
  })
  if (!response) return null
  let page = response.data.entry
  return parsePageSimple(page)
}
