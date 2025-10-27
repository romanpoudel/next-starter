import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;
