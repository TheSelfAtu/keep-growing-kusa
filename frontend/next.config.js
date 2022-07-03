/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/mypage",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
