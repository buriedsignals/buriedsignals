import { deleteSpotlightComment } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const { datas, post } = req.body
  const result = await deleteSpotlightComment(datas, post)
  res.json(result)
}