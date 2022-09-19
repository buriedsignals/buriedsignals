import { postMemberNewsletter, postMemberSignup } from "@/librairies/ghost-api"

export default async function handle(req, res) {
  const { email } = req.body
  // const result = await postMemberSignup(email)
  const result = await fetch(
    "https://buried-signals.ghost.io/members/api/send-magic-link/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        email: email, 
        emailType: "subscribe" 
      })
    }
  );
  res.json(result)
}