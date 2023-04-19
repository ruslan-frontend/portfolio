/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  head: {
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: './public/images/favicon-32x32.png'
      }
    ]
  }
}

module.exports = nextConfig
