import { TwitterApi } from 'twitter-api-v2';

export default async function handle(req, res) {
  const datas = req.body.entry
  const model = req.body.model
  if (model == "resources-post") {
    const twitterClient = new TwitterApi({
      appKey: 'ZsaE2Ble7fulgBxgzvqyhH42D',
      appSecret: 'rLLvLye2Lo03tD1koaklWu4Q0gl2Vih2zXuDDuJNYEGPdHZNgs',
      accessToken: '1399628894295269376-P6Y9G3kmRVFaK9nWzuKN89JnB6lcHm',
      accessSecret: 'yorQCPngtT66lx9Ouew4PfHVeOSDnJXu4BtKHZeKtSeKu',
    });    
    const author = datas.Source_author_twitter_account ? datas.Source_author_twitter_account.startsWith('@') ? datas.Source_author_twitter_account : `@${ datas.Source_author_twitter_account }` : datas.Source_author
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
    let template = `Resource: ${ datas.Title } by ${ author }${ categories }\n\n•\n\n${ link }\n\n#narrativevisualisation #datastorytelling`
    const templateExtra = `Resource: ${ datas.Title } by ${ author }${ categories }\n\n•${ description }\n\n${ link }\n\n#narrativevisualisation #datastorytelling`
    const templateWithoutCategory = `Resource: ${ datas.Title } by ${ author }\n\n•\n\n${ link }\n\n#narrativevisualisation #datastorytelling`
    const templateWithoutCategoryAndAuthor = `Resource: ${ datas.Title }\n\n•\n\n${ link }\n\n#narrativevisualisation #datastorytelling`
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