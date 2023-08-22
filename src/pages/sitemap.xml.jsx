// Middlewares
import { getPostsSpotlights, getPostsSpotlightsArchives } from '@/middlewares/librairies/posts/spotlights';
import { getPostsInsights } from '@/middlewares/librairies/posts/insights';

export default function Sitemap() {
}

export async function getServerSideProps({ res }) {
  const spotlights = await getPostsSpotlights({ page: -1 })
  const slugsSpotlights = spotlights.posts.filter((post) => post.slug !== null).map((post) => (post.slug))
  const insights = await getPostsInsights({ page: -1 })
  const slugsInsights = insights.posts.filter((post) => post.slug !== null && post.source.url == null).map((post) => (post.slug))

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
        <loc>https://buriedsignals.com/membership</loc>
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