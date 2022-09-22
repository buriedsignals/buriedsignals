import { getPostsSpotlightsWeek } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const resultPost = await getPostsSpotlightsWeek()
  res.json(resultPost)
}
