import { getUserMember } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const result = await getUserMember()
  res.json(result)
}