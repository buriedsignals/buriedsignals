import { postLikedByUserForOnePost } from "@/librairies/prisma-api";
import { updatePostSpotlightLikes } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const { userId, postId, likes } = req.body
  const result = await updatePostSpotlightLikes(postId, likes)
  res.json(result)
}