import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 部署（npm run deploy:pages）时设置 STATIC_EXPORT=1，
  // 输出纯静态站点到 out/；Vercel 与本地 dev/build 不受影响
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" as const } : {}),
};

export default nextConfig;
