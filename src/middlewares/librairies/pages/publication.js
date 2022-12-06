// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_PUBLICATION } from "@/middlewares/datas/pages/publication"
import { parsePageFlexible } from '../utils'

export async function getPagePublication() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_PUBLICATION,
  })
  if (!response || response.data.pages.data.length == 0) return null
  let page = response.data.pages.data[0].attributes
  return parsePageFlexible(page)
}
