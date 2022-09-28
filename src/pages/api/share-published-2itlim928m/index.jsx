import Twit from "twit";

export default async function handle(req, res) {
  const datas = req.body.entry
  const model = req.body.model
  if (model == "spotlights-post") {
    const T = new Twit({
      consumer_key: "ruZrpEYOmy2ydiTffTX9NOnS3",
      consumer_secret: "BOFoclCIO5Qz8dW9DsfU6DrvVkdn0SnTS6kRHHSrOOQDs7i138",
      access_token: "1273186472133263361-fq88txc3LTQe2XT2lfJP6egFq4Xrb9",
      access_token_secret: "kVJGaUMr0mxo82raKDADAemxIxhKyY0vF1fGQWCiylUe5"
    })
    const description = `\n\n${ datas.Description }\n\n•`
    const url = "https://buriedsignalsv2.vercel.app/spotlights/"
    const responseLink = await fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer a7114ecbe4577912118e27d2a324ce350dcb5768',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "long_url": url + datas.Slug })
    })
    let link = await responseLink.json()
    link = link.link
    let template = `Spotlight on ${ datas.Title } | ${ datas.Categories[0].Title }\n\n•\n\n${ link }\n\n#narrativevisualisation #informationdesign`
    const templateExtra = `Spotlight on ${ datas.Title } | ${ datas.Categories[0].Title }\n\n•${ description }\n\n${ link }\n\n#narrativevisualisation #informationdesign`
    if (template.length + description.length <= 300) {
      template = templateExtra
    }
    const params = { status: template }
    T.post('statuses/update', params, function (err, data, response) {
      console.log(data)
      res.json(data)
    })
  }
}