import { createPostSpotlight } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const datas = {
    Title: req.body.Title,
    Description: req.body.Description,
    Slug: req.body.Slug,
    Source_author: req.body.Source_author,
    Source_link: req.body.Source_link,
    // Categories: (req.body.Categories == "" || req.body.Categories == null) ? [] : req.body.Categories,
    // Submited_by: (req.body.Submited_by == "" || req.body.Submited_by == null) ? null : req.body.Submited_by,
    Image: req.body.Image
  }
  const resultPost = await createPostSpotlight(datas)
  res.json(resultPost)
}
