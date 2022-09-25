import { updateSpotlightComment } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const { datasDelete, datasCreate } = req.body
  const result = await updateSpotlightComment(datasDelete, datasCreate)
  res.json(result)
}