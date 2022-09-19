import { postBookmarkedByUserForOnePost } from "@/librairies/prisma-api";

export default async function handle(req, res) {
  const { userId, postId } = req.body
  const result = await postBookmarkedByUserForOnePost(userId, postId)
  res.json(result)
}