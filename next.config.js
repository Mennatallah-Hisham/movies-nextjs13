/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains:['tmdb.org']
    ,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'image.tmdb.org',
    //     port: '',
    //     pathname: '/t/p/original/',
    //   },
    // ],
  }
}

module.exports = nextConfig
// const imagePath = "https://image.tmdb.org/t/p/original/";