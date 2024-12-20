// Middlewares
import { getPostsSpotlightsLite } from '@/middlewares/librairies/posts/spotlights';
import { getPostsInsightsLite } from '@/middlewares/librairies/posts/insights';

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const [spotlights, insights] = await Promise.all([getPostsSpotlightsLite({ page: -1 }), getPostsInsightsLite({ page: -1 })])
  const slugsSpotlights = spotlights.filter((post) => post.attributes.Slug !== null).map((post) => (post.attributes.Slug))
  const slugsInsights = insights.filter((post) =>post.attributes.Slug !== null && post.attributes.Source_link == null).map((post) => (post.attributes.Slug))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://nuanced.ch</loc>
      </url>
      <url>
        <loc>https://nuanced.ch/insights</loc>
      </url>
      <url>
        <loc>https://nuanced.ch/resources</loc>
      </url>
      <url>
        <loc>https://nuanced.ch/about</loc>
      </url>
      <url>
        <loc>https://nuanced.ch/privacy</loc>
      </url>
      <url>
        <loc>https://nuanced.ch/notice</loc>
      </url>
      <url>
        <loc>https://nuanced.ch/terms</loc>
      </url>
      <url>
        <loc>https://nuanced.ch/404</loc>
      </url>
      ${slugsSpotlights.map(
        (slug) => {
          return `
              <url>
                <loc>https://nuanced.ch/spotlights/${slug}</loc>
              </url>
            `
          }).join('')
      }
      ${slugsInsights.map(
        (slug) => {
          return `
              <url>
                <loc>https://nuanced.ch/insights/${slug}</loc>
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