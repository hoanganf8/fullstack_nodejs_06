/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdnphoto.dantri.com.vn",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/bai-viet",
        destination: "/posts",
      },
      {
        source: "/bai-viet/:path*.html",
        destination: "/posts/:path*",
      },
    ];
  },
};

export default nextConfig;
