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
    consumer_key: "MAmF4GwxtnB8CJGu3GaYOSw9p",
    consumer_secret: "nz4YayEkFmEaEXbmZ19L7kdodOl3DVNlbHdO4KNNQuFTdEw7m1",
    access_token: "dDRyWXJ2VUZIeVFWVVU1aWdnVUU6MTpjaQ",
    access_token_secret: "BJGkYob8gDiu_6x45GW5SJ1aaqrHUO-qaUmFG-IdtFZIIPEd3m"
  });
  function gotData(err, data) {
    res.json({ err, data })
  }
  T.get('search/tweets', { q: 'JavaScript', count: 10 }, gotData);
}
