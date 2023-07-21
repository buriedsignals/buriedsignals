import { createArchiveSpotlightCron } from "@/middlewares/librairies/posts/spotlights";

export default async function handle(req, res) {
  const post = req.body.split('//')
  let result = {}
  if (post.length == 5) {
    const scheduleId = post[0]
    const archiveId = post[1]
    const postId = post[2]
    const slug = post[3]
    const title = post[4]
    result = await createArchiveSpotlightCron(postId, title, slug, archiveId, scheduleId)
  }    
  res.json(result)
}