// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_NOTICE } from "@/middlewares/datas/pages/notice"
import { parsePageFlexible } from '../utils'

export async function getPageNotice() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_NOTICE,
  })
  if (!response) return null
  let page = response.data.pages.data[0].attributes
  return parsePageFlexible(page)
}
