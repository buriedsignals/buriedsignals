import { createArchiveSpotlightCron } from "@/middlewares/librairies/posts/spotlights";
import axios from "axios";

export default async function handle(req, res) {
  // const post = req.body.split(',')
  // if (post.length == 2) {
  //   const archiveId = post[0]
  //   const scheduleId = post[1]
  //   const result = await createArchiveSpotlightCron(archiveId, scheduleId)
  //   res.json(result)
  // }
    // console.log("oko")
    // const responseCron = await axios.delete(
    //   `https://api.mergent.co/v2/schedules/79c58891-c1a9-4f5f-bc2f-6dfce6701eb4`, 
    //   {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Authorization': 'Bearer BFSawcbm6LFDoA0yzyqX'
    //     }
    //   }
    // )
    // console.log(responseCron)
    const post = req.body.split(',')
    console.log(post)
    console.log(post.length == 2)
    console.log(post[0])
    console.log(post[1])
}