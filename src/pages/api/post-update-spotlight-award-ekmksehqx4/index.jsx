import { updatePostSpotlightAwards } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const { postId, awardTitle } = req.body
  let awardId = null
  switch (awardTitle) {
    case "Week":
      awardId = 2
      break
    case "Month":
      awardId = 1
      break
  }
  const result = await updatePostSpotlightAwards(postId, awardId)
  res.json(result)
}