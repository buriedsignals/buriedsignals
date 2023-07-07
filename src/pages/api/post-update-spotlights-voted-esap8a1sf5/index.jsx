import { updatePostSpotlightVotes } from "@/middlewares/librairies/posts/spotlights";
import { updateUserMemberVotedSpotlights } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { userId, postId, votes, userPostIdsVoted } = req.body
  const resultPost = await updatePostSpotlightVotes(postId, votes.value)
  const resultUser = userPostIdsVoted ? await updateUserMemberVotedSpotlights(userId, userPostIdsVoted) : null
  res.json(resultUser)
}