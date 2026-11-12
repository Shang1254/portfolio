import type { Metadata } from "next";
import "./globals.css";
import { profiles } from "@/data/profile";
import { SITE_URL } from "@/data/site";

const siteUrl = SITE_URL;
const profile = profiles.zh;

// 根布局保留中文默认 metadata；/en 子树由 app/en/layout.tsx 覆盖
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · 全栈开发作品集`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name}——${profile.status}，全栈开发方向：Java 后端 × 前端工程，三个完整上线的个人项目与两段开发/测试实习经历。`,
  keywords: [
    profile.name,
    "全栈开发",
    "Java",
    "Spring Boot",
    "Next.js",
    "前端开发",
    "后端开发",
    "作品集",
    "求职",
  ],
  openGraph: {
    title: `${profile.name} · 全栈开发作品集`,
    description: "Java 后端 × 前端工程，关注工程质量与数据可靠性。",
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    images: ["/og.png"],
  },
};

// 首帧前写入主题 class，避免深色模式下刷新闪烁（FOUC）
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
