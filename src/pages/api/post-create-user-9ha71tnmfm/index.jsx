import { createUserMember } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { datasRegister, datasUpdateUser } = req.body
  const result = await createUserMember(datasRegister, datasUpdateUser)
  res.json(result)
}