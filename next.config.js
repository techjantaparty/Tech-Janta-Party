/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
