import { updateUserMember } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { id, datas } = req.body
  const result = await updateUserMember(id, datas)
  res.json(result)
}