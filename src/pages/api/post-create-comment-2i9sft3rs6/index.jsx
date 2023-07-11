import { createSpotlightComment } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const { datas, post } = req.body
  const result = await createSpotlightComment(datas, post)
  res.json(result)
}