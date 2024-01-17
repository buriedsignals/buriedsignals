/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        // Add your new rewrite rule here
        source: '/viz-gpt',
        destination: 'https://chat.openai.com/g/g-2kHhAt0Vv-vizgpt', // Replace with your desired external URL
      }
    ]
  },
}

module.exports = nextConfig
