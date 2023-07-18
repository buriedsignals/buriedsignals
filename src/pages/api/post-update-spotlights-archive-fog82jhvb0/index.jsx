import { createArchiveSpotlight } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const model = req.body.model
  const post = req.body.entry
  console.log(model, post)
  if (model == "spotlights-post") {
    if (post.Source_link && !post.Archive) {
      const result = await createArchiveSpotlight(post.id, post.Title, post.Slug, post.Source_link)
      res.json(result)
    }
  }
}