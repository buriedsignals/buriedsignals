import Twit from "twit";

export default async function handle(req, res) {
  const datas = req.body.entry
  const model = req.body.model
  if (model == "insights-post") {
    const T = new Twit({
      consumer_key: "fiC4fMv7gmg7gNJUrM7Cs8MfV",
      consumer_secret: "b7FFGIwNTYNUwloO57qH7AauXB6oHdsleVuHqheCYjL5iV7JVo",
      access_token: "1399628894295269376-BCm4IGRCa37jLbwGkrCzL2kUsew0hS",
      access_token_secret: "NMhGeIb1kDkv6naeV6S9WrpUgz6njm0IXFPa4k85SuwoI"
    })
    const author = datas.Source_author_twitter_account ? datas.Source_author_twitter_account.startsWith('@') ? datas.Source_author_twitter_account : `@${ datas.Source_author_twitter_account }` : datas.Source_author
    const description = `\n\n${ datas.Description }\n\n•`
    const url = datas.Source_link ? datas.Source_link :`https://www.buriedsignals.com/insights/${datas.Slug}`
    const categories = datas.Categories.length !== 0 ? ` | ${ datas.Categories[0].Title }` : ""
    const responseLink = await fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer a7114ecbe4577912118e27d2a324ce350dcb5768',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "long_url": url })
    })
    let link = await responseLink.json()
    link = link.link
    let template = `Insight: ${ datas.Title } by ${ author }${ categories }\n\n•\n\n${ link }\n\n#narrativevisualisation #informationdesign`
    const templateExtra = `Insight: ${ datas.Title } by ${ author }${ categories }\n\n•${ description }\n\n${ link }\n\n#narrativevisualisation #informationdesign`
    const templateWithoutCategory = `Insight: ${ datas.Title } by ${ author }\n\n•\n\n${ link }\n\n#narrativevisualisation #informationdesign`
    const templateWithoutCategoryAndAuthor = `Insight: ${ datas.Title }\n\n•\n\n${ link }\n\n#narrativevisualisation #informationdesign`
    if (templateExtra.length <= 270) {
      template = templateExtra
    } else if (template.length > 270) {
      if (templateWithoutCategory.length <= 270) {
        template = templateWithoutCategory
      } else {
        template = templateWithoutCategoryAndAuthor
      }
    }
    const params = { status: template }
    T.post('statuses/update', params, function (err, data, response) {
      res.json(data)
    })
  }
}