// Nodes
import { gql } from '@apollo/client'

export const UPLOAD_IMAGES = gql`
  mutation UploadImages($files: [Upload!]!) {
    createUploadFile(files: $files) {
      id
    }
  }
`