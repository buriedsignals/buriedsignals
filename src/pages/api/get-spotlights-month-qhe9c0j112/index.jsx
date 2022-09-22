import { getPostsSpotlightsMonth } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const resultPost = await getPostsSpotlightsMonth()
  res.json(resultPost)
}
