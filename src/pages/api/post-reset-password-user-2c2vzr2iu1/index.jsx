import { resetPasswordUserMember } from "@/middlewares/librairies/users/member";

export default async function handle(req, res) {
  const { password, passwordConfirmation, code } = req.body
  const result = await resetPasswordUserMember(password, passwordConfirmation, code)
  res.json(result)
}