// Templates
import Error404Template from "@/components/templates/Error404"
// Modules
import HeadSEOModule from "@/components/modules/HeadSEO"

export default function Error404({ ...props }) {
  return (
    <>
      <HeadSEOModule meta={ {
        title: "Buried signals - 404"
      } } />
      <Error404Template />
    </>
  )
}