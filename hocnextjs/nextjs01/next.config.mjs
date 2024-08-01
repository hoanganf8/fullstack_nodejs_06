/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API_TODO: process.env.SERVER_API_TODO,
    APP_URL: process.env.APP_URL,
    SERVER_API_LOCAL: process.env.SERVER_API_LOCAL,
  },
};

export default nextConfig;
