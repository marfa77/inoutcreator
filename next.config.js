/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/sbunkov",
  assetPrefix: "/sbunkov/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
