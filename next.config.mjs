/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    esmExternals: false, // Ensures external packages are properly processed
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "gsap/ScrollTrigger": "gsap/dist/ScrollTrigger",
    };
    return config;
  },
};

export default nextConfig;
