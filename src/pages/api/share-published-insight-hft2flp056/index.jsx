import { TwitterApi } from 'twitter-api-v2';

export default async function handle(req, res) {
  const datas = req.body.entry
  const model = req.body.model
  if (model == "insights-post") {
    const twitterClient = new TwitterApi({
      appKey: 'RSfXWbjH4KePW6BQnBXJm1VOd',
      appSecret: 'fuxHYhAYRjSnIAgfKc9qrXZewal9ZVvGJVpgxUDjx7W2TI1jEO',
      accessToken: '2417172498-aD7xzOtRyMrDEQZfsE8ey9QxdnQBNBS6Mzh8Pxt',
      accessSecret: 'tb9r4ytg3QBUNvuVw2wgkuiirwGZ4FblhYY8fCm5PsEna',
    });    
    const author = datas.Source_author_twitter_account ? datas.Source_author_twitter_account.startsWith('@') ? datas.Source_author_twitter_account : `@${ datas.Source_author_twitter_account }` : datas.Source_author
    const description = `\n\n${ datas.Description }\n\n•`
    const url = datas.Source_link ? datas.Source_link :`https://tomvaillant.com/insights/${datas.Slug}`
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
    let template = `Insight: ${ datas.Title } by ${ author }${ categories }\n\n•\n\n${ link }\n\n#visualjournalism #datastorytelling`
    const templateExtra = `Insight: ${ datas.Title } by ${ author }${ categories }\n\n•${ description }\n\n${ link }\n\n#visualjournalism #datastorytelling`
    const templateWithoutCategory = `Insight: ${ datas.Title } by ${ author }\n\n•\n\n${ link }\n\n#visualjournalism #datastorytelling`
    const templateWithoutCategoryAndAuthor = `Insight: ${ datas.Title }\n\n•\n\n${ link }\n\n#visualjournalism #datastorytelling`
    if (templateExtra.length <= 270) {
      template = templateExtra
    } else if (template.length > 270) {
      if (templateWithoutCategory.length <= 270) {
        template = templateWithoutCategory
      } else {
        template = templateWithoutCategoryAndAuthor
      }
    }
    const data = await twitterClient.v2.tweet(template, {});
    res.json(data)
  }
}