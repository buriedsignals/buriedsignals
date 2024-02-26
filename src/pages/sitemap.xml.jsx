// Middlewares
import { getPostsSpotlightsLite } from '@/middlewares/librairies/posts/spotlights';
import { getPostsInsightsLite } from '@/middlewares/librairies/posts/insights';

export default function Sitemap() {
}

export async function getServerSideProps({ res }) {
  const spotlights = await getPostsSpotlightsLite({ page: -1 })
  const slugsSpotlights = spotlights.filter((post) => post.attributes.Slug !== null).map((post) => (post.attributes.Slug))
  const insights = await getPostsInsightsLite({ page: -1 })
  const slugsInsights = insights.filter((post) =>post.attributes.Slug !== null && post.attributes.Source_link == null).map((post) => (post.attributes.Slug))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://buriedsignals.com</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/insights</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/resources</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/support</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/experts</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/about</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/profiles/signin</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/profiles/signup</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/privacy</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/notice</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/terms</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/404</loc>
      </url>
      ${slugsSpotlights.map(
        (slug) => {
          return `
              <url>
                <loc>https://buriedsignals.com/spotlights/${slug}</loc>
              </url>
            `
          }).join('')
      }
      ${slugsInsights.map(
        (slug) => {
          return `
              <url>
                <loc>https://buriedsignals.com/insights/${slug}</loc>
              </url>
            `
          }).join('')
      }
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
      props: {},
  };
}