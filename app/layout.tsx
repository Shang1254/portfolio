import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
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
        {/* 无障碍：键盘用户可跳过导航直达内容 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          跳到主要内容
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollTop />
      </body>
    </html>
  );
}
