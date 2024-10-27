import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/classmate-frontend",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
