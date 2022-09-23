import { loginUserMember } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { datas } = req.body
  const result = await loginUserMember(datas)
  res.json(result)
}