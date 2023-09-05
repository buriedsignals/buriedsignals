// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { parsePageSimple } from '../utils'
import { QUERY_PAGE_DIRECTORY } from '@/middlewares/datas/pages/directory'

export async function getPageDirectory() {
  const apolloClient = getApolloClient()
  const response = await apolloClient.query({
    query: QUERY_PAGE_DIRECTORY,
  })
  if (!response || response.data.pages.data.length == 0) return null
  let page = response.data.pages.data[0].attributes
  return parsePageSimple(page)
}
