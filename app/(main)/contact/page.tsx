import type { Metadata } from "next";
import { profiles } from "@/data/profile";
import { ui } from "@/data/i18n";
import SocialLinks from "@/components/SocialLinks";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: ui.zh.nav.contact,
  description: "联系商子轩：邮箱、GitHub 与 Gitee 主页。",
  alternates: {
    languages: { "zh-CN": "/contact", en: "/en/contact" },
  },
};

export default function ContactPage() {
  const profile = profiles.zh;
  const copy = ui.zh.contact;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading title={copy.title} description={copy.description} />
      <SocialLinks locale="zh" variant="cards" />
      <p className="mt-8 text-sm text-muted-foreground">
        {copy.recruitHint}
        <a
          href={profile.resumePdf}
          download="商子轩-全栈开发-简历.pdf"
          className="mx-1 text-primary hover:underline"
        >
          {copy.downloadResume}
        </a>
        。
      </p>
    </div>
  );
}
