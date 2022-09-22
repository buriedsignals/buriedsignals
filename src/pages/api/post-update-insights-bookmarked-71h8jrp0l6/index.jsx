import { updateUserMemberBookmarkedInsights } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { userId, userPostIdsBookmarked } = req.body
  const result = await updateUserMemberBookmarkedInsights(userId, userPostIdsBookmarked)
  res.json(result)
}