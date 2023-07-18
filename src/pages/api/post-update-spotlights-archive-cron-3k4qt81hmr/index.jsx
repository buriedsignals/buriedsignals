import { createArchiveSpotlightCron } from "@/middlewares/librairies/posts/spotlights";
import axios from "axios";

export default async function handle(req, res) {
  const post = req.body.split(',')
  if (post.length == 2) {
    const archiveId = post[0]
    const scheduleId = post[1]
    const result = await createArchiveSpotlightCron(archiveId, scheduleId)
    res.json(result)
  }
}