import { deleteSpotlightComment } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const { datas } = req.body
  const result = await deleteSpotlightComment(datas)
  res.json(result)
}