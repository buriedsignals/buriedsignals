// Templates
import Error404Template from "@/components/templates/Error404"
// Modules
import HeadSEOModule from "@/components/modules/HeadSEO"

export default function Error404({ ...props }) {
  return (
    <>
      <HeadSEOModule meta={ {
        title: "Tom Vaillant - 404"
      } } />
      <Error404Template />
    </>
  )
}