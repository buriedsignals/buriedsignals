import { updatePostSpotlightLikes } from "@/middlewares/librairies/posts/spotlights";
import { updateUserMemberLiked } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { userId, postId, likes, userPostIdsLiked } = req.body
  const resultPost = await updatePostSpotlightLikes(postId, likes)
  const resultUser = userPostIdsLiked ? await UpdateUserMemberLikedSpotlights(userId, userPostIdsLiked) : null
  res.json(resultUser)
}