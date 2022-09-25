export default async function handle(req, res) {
  const datas = req.body.entry
  const model = req.body.model
  let urlDiscord = undefined
  switch (model) {
    case "spotlights-post":
      urlDiscord = ""
      break;
    case "insights-post":
      urlDiscord = ""
      break;
    case "resources-post":
      urlDiscord = ""
      break;
    case "projects-post":
      urlDiscord = ""
      break;
    default:
      return null
      break;
  }
  await fetch(urlDiscord, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datas),
  });
}
