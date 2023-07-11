import { updateSpotlightComment } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const { datasDelete, datasCreate, post } = req.body
  const result = await updateSpotlightComment(datasDelete, datasCreate, post)
  res.json(result)
}