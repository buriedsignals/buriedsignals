import { forgotPasswordUserMember } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { email } = req.body
  const result = await forgotPasswordUserMember(email)
  res.json(result)
}