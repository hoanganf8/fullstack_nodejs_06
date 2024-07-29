/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API_TODO: process.env.SERVER_API_TODO,
    APP_URL: process.env.APP_URL,
  },
};

export default nextConfig;
