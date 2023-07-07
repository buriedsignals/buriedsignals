import { updateMetricsSpotlights } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const model = req.body.model
  if (model == "spotlights-post") {
    const result = await updateMetricsSpotlights()
    res.json(result)
  }
}