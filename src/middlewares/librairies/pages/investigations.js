// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_INVESTIGATIONS } from "@/middlewares/datas/pages/investigations"
import { parsePageSimple } from '../utils'

export async function getPageInvestigations() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_INVESTIGATIONS,
  })
  if (!response || response.data.pages.data.length == 0) return null
  let page = response.data.pages.data[0].attributes
  return parsePageSimple(page)
}
