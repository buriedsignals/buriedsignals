import { createArchiveSpotlightCron } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const post = req.body.split(',')
  if (post.length == 2) {
    const archive = post[0]
    const schedule = post[1]
    const result = await createArchiveSpotlightCron(archive, schedule)
    res.json(result)
  }
}