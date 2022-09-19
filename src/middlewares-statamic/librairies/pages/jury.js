// Middlewares
import { getApolloClient } from '@/middlewares-statamic/librairies/apollo-client'
import { QUERY_PAGE_JURY } from "@/middlewares-statamic/datas/pages/jury"
import { parsePageSimple } from '../utils'

export async function getPageJury() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_JURY,
  })
  if (!response) return null
  let page = response.data.entry
  return parsePageSimple(page)
}
