/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['utfs.io'], // Add utfs.io to the list of allowed domains
  },
};

export default nextConfig;
