import { updatePostSpotlightAwards } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const { postId, awardId } = req.body
  const result = await updatePostSpotlightAwards(postId, awardId)
  res.json(result)
}