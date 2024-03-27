import { TwitterApi } from 'twitter-api-v2';

export default async function handle(req, res) {
  const datas = req.body.entry
  const model = req.body.model
  if (model == "resources-post") {
    const twitterClient = new TwitterApi({
      appKey: 'RSfXWbjH4KePW6BQnBXJm1VOd',
      appSecret: 'fuxHYhAYRjSnIAgfKc9qrXZewal9ZVvGJVpgxUDjx7W2TI1jEO',
      accessToken: '2417172498-iMOQ1FSAmjx3pZOz4bXDOVKl5B56j4SJsj1zUHZ',
      accessSecret: '8d2x4so6Y08HZRrFKE9oL9c0a3lEAihf0aImxAxMoGKk3',
    });    
    const author = datas.Source_title
    const description = `\n\n${ datas.Description }\n\n•`
    const url = datas.Source_link
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
    let template = `Resource: ${ datas.Title } by ${ author }${ categories }\n\n•\n\n${ link }\n\n#visualjournalism #datastorytelling`
    const templateExtra = `Resource: ${ datas.Title } by ${ author }${ categories }\n\n•${ description }\n\n${ link }\n\n#visualjournalism #datastorytelling`
    const templateWithoutCategory = `Resource: ${ datas.Title } by ${ author }\n\n•\n\n${ link }\n\n#visualjournalism #datastorytelling`
    const templateWithoutCategoryAndAuthor = `Resource: ${ datas.Title }\n\n•\n\n${ link }\n\n#visualjournalism #datastorytelling`
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