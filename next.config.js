/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'figart-images.s3.ca-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
