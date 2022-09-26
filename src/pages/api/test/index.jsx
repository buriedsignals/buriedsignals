// import Twit from "twit";
// import imageToBase64 from 'image-to-base64/browser'

// export default async function handle(req, res) {
//   // const datas = req.body.entry
//   // const model = req.body.model
//   // let urlDiscord = undefined
//   // switch (model) {
//   //   case "spotlights-post":
//   //     urlDiscord = ""
//   //     break;
//   //   case "insights-post":
//   //     urlDiscord = ""
//   //     break;
//   //   case "resources-post":
//   //     urlDiscord = ""
//   //     break;
//   //   case "projects-post":
//   //     urlDiscord = ""
//   //     break;
//   //   default:
//   //     return null
//   //     break;
//   // }
//   // await fetch(urlDiscord, {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify(datas),
//   // });
//   var T = new Twit({
//     consumer_key: "ruZrpEYOmy2ydiTffTX9NOnS3",
//     consumer_secret: "BOFoclCIO5Qz8dW9DsfU6DrvVkdn0SnTS6kRHHSrOOQDs7i138",
//     access_token: "1273186472133263361-fq88txc3LTQe2XT2lfJP6egFq4Xrb9",
//     access_token_secret: "kVJGaUMr0mxo82raKDADAemxIxhKyY0vF1fGQWCiylUe5"
//   })
//   console.log(document)
//   // imageToBase64("https://res.cloudinary.com/dgdju0esm/image/upload/v1664119625/index_56372707de.png?updated_at=2022-09-25T15:27:05.862Z") // Image URL
//   //   .then(
//   //       (response) => {
//   //           res.json(response); // "iVBORw0KGgoAAAANSwCAIA..."
//   //       }
//   //   )
//   //   .catch(
//   //       (error) => {
//   //         res.json(error); // Logs an error if there was one
//   //       }
//   //   )
// }

// function toDataURL(src, callback, outputFormat) {
//   var img = new Image();
//   img.crossOrigin = 'Anonymous';
//   img.onload = function() {
//     var canvas = document.createElement('CANVAS');
//     var ctx = canvas.getContext('2d');
//     var dataURL;
//     canvas.height = this.naturalHeight;
//     canvas.width = this.naturalWidth;
//     ctx.drawImage(this, 0, 0);
//     dataURL = canvas.toDataURL(outputFormat);
//     callback(dataURL);
//   };
//   img.src = src;
//   if (img.complete || img.complete === undefined) {
//     img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
//     img.src = src;
//   }
// }

// function postTweet(b64content) {
//   T.post('media/upload', { media_data: b64content }, function (err, data, response) {
//   var mediaIdStr = data.media_id_string
//   var altText = "Small flowers in a planter on a sunny balcony, blossoming."
//   var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
//   T.post('media/metadata/create', meta_params, function (err, data, response) {
//     if (!err) {
//       // now we can reference the media and post a tweet (media will attach to the tweet)
//       var params = { status: 'loving life #nofilter', media_ids: [mediaIdStr] }
 
//       T.post('statuses/update', params, function (err, data, response) {
//         console.log(data)
//         res.json(data)
//       })
//     }
//   })
// })
// }

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      req: req,
    }
  };
}

export default function Test(props) {
  console.log(props)
  return (
    <>
    </>
  );
}
