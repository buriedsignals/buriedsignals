import { createPostSpotlight } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  // const { datas } = req.body
  const datas = {
    Title: "Wet",
    Description: "Jop",
    Slug: "wet",
    Source_author: "Reop",
    Source_link: "www.google.fr",
    Categories: [2],
    Submited_by: 1,
    Image: "https://lesjoiesducode.fr/content/043/perpetual-view-generation.webp"
  }
  const resultPost = await createPostSpotlight(datas)
  res.json(resultPost)
}
