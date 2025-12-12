import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 部署时需要设置 basePath
  basePath: '/uiluyu',
  assetPrefix: '/uiluyu',
};

export default nextConfig;
