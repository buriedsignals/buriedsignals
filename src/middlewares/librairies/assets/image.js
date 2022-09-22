// Middlewares
import { getApolloClient } from '@/middlewares/librairies/apollo-client'
import { UPLOAD_IMAGES } from '@/middlewares/datas/assets/image'

export async function uploadImages(files) {
  const apolloClient = getApolloClient()
  const response = await apolloClient.mutate({
    errorPolicy: 'all',
    mutation: UPLOAD_IMAGES,
    variables: { files }
  })
  if (!response) return null
  return response
}
