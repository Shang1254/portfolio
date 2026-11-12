import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { profiles } from "@/data/profile";
import { SITE_URL } from "@/data/site";
import { ui } from "@/data/i18n";

const profile = profiles.en;

// 英文壳布局：覆盖根布局的默认 metadata（仅作用于 /en 子树）
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} · Full-Stack Developer Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} — ${profile.status}. Full-stack developer: Java backend × frontend engineering, three shipped projects and two dev/QA internships.`,
  keywords: [
    profile.name,
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "Next.js",
    "Portfolio",
    "New Grad",
  ],
  openGraph: {
    title: `${profile.name} · Full-Stack Developer Portfolio`,
    description: "Java backend × frontend engineering — focused on engineering quality and data reliability.",
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en`,
    images: ["/og.png"],
  },
};

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* html lang 在根布局固定为 zh-CN，英文子树用内联脚本在渲染前修正 */}
      <script
        dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='en'" }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        {ui.en.skip}
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale="en" />
      </div>
      <ScrollTop locale="en" />
    </>
  );
}
