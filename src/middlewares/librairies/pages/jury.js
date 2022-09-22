// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { QUERY_PAGE_JURY } from "@/middlewares/datas/pages/jury"
import { parsePageSimple } from '../utils'

export async function getPageJury() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_JURY,
  })
  if (!response) return null
  let page = response.data.pages.data[0].attributes
  return parsePageSimple(page)
}
