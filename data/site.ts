// 站点级常量的单一来源：部署域名变化时只需设置环境变量 NEXT_PUBLIC_SITE_URL
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
