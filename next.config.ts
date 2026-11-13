import type { NextConfig } from "next";

// AI 安全顾问评审：统一安全响应头（Vercel/本地生效；
// GitHub Pages 纯静态托管不支持自定义头，由 GitHub 平台基础头兜底）
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // GitHub Pages 部署（npm run deploy:pages）时设置 STATIC_EXPORT=1，
  // 输出纯静态站点到 out/；Vercel 与本地 dev/build 不受影响
  ...(process.env.STATIC_EXPORT === "1"
    ? { output: "export" as const }
    : { async headers() {
        return [{ source: "/(.*)", headers: securityHeaders }];
      } }),
};

export default nextConfig;
