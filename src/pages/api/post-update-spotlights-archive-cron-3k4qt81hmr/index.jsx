import { createArchiveSpotlightCron } from "@/middlewares/librairies/posts/spotlights";
import axios from "axios";

export default async function handle(req, res) {
  console.log(req.body)
  const post = req.body.split(',')
  console.log(post)
  if (post.length == 2) {
    const archiveId = post[0]
    const scheduleId = post[1]
    const result = await createArchiveSpotlightCron(archiveId, scheduleId)
    res.json(result)
  }
}