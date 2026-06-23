import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['timer-app.routegate.cc'],
  reactCompiler: true,
  output: "standalone",
};

export default nextConfig;
