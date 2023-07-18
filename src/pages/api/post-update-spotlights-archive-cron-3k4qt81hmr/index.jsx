import { createArchiveSpotlightCron } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const post = req.body.split(',')
  if (post.length == 5) {
    const postId = post[0]
    const title = post[1]
    const slug = post[2]
    const archiveId = post[3]
    const scheduleId = post[4]
    const result = await createArchiveSpotlightCron(postId, title, slug, archiveId, scheduleId)
    res.json(result)
  }
}