// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { parsePageSimple } from '../utils'
import { QUERY_PAGE_EXPERTS } from '@/middlewares/datas/pages/experts'

export async function getPageExperts() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_EXPERTS,
  })
  if (!response || response.data.pages.data.length == 0) return null
  let page = response.data.pages.data[0].attributes
  return parsePageSimple(page)
}
