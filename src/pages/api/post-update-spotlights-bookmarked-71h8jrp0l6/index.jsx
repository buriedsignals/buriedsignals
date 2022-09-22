import { updateUserMemberBookmarkedSpotlights } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { userId, userPostIdsBookmarked } = req.body
  const result = await updateUserMemberBookmarkedSpotlights(userId, userPostIdsBookmarked)
  res.json(result)
}