// Middlewares
import { getPostsSpotlights } from '@/middlewares/librairies/posts/spotlights';
import { getPostsInsights } from '@/middlewares/librairies/posts/insights';
import { getUsersMembers } from '@/middlewares/librairies/users/member';

export default function Sitemap() {
}

export async function getServerSideProps({ res }) {
  const spotlights = await getPostsSpotlights()
  const slugsSpotlights = spotlights.posts.filter((post) => post.slug !== null).map((post) => (post.slug))
  const insights = await getPostsInsights()
  const slugsInsights = insights.posts.filter((post) => post.slug !== null).map((post) => (post.slug))
  const members = await getUsersMembers()
  const slugsMembers = members.users.filter((member) => member.slug !== null).map((member) => (member.slug))

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
        <loc>https://buriedsignals.com/about/publication</loc>
      </url>
      <url>
        <loc>https://buriedsignals.com/about/jury</loc>
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
        <loc>https://buriedsignals.com/archives</loc>
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
      ${slugsMembers.map(
        (slug) => {
          return `
              <url>
                 <loc>https://buriedsignals.com/profiles/${slug}</loc>
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