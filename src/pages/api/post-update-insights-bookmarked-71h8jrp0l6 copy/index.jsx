import { updateUserMemberBookmarkedResources } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { userId, userPostIdsBookmarked } = req.body
  const result = await updateUserMemberBookmarkedResources(userId, userPostIdsBookmarked)
  res.json(result)
}