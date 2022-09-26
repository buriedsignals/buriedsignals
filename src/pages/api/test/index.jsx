import Twit from "twit";

export default async function handle(req, res) {
  // const datas = req.body.entry
  // const model = req.body.model
  // let urlDiscord = undefined
  // switch (model) {
  //   case "spotlights-post":
  //     urlDiscord = ""
  //     break;
  //   case "insights-post":
  //     urlDiscord = ""
  //     break;
  //   case "resources-post":
  //     urlDiscord = ""
  //     break;
  //   case "projects-post":
  //     urlDiscord = ""
  //     break;
  //   default:
  //     return null
  //     break;
  // }
  // await fetch(urlDiscord, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(datas),
  // });
  var T = new Twit({
    consumer_key: "dDRyWXJ2VUZIeVFWVVU1aWdnVUU6MTpjaQ",
    consumer_secret: "BJGkYob8gDiu_6x45GW5SJ1aaqrHUO-qaUmFG-IdtFZIIPEd3m",
    access_token: "785932989918130177-wz757mSRsjm1UnHHFXBGzog3LSNVLTl",
    access_token_secret: "CH65P4terjQSzaSEWVJM7yyTcRZjMNlmjvipk1qs5wfG3"
  });
  function gotData(err, data) {
    res.json({ err, data })
  }
  T.get('search/tweets', { q: 'JavaScript', count: 10 }, gotData);
}
