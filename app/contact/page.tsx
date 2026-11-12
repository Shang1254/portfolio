import type { Metadata } from "next";
import { profile } from "@/data/profile";
import SocialLinks from "@/components/SocialLinks";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "联系我",
  description: "联系商子轩：邮箱、GitHub 与 Gitee 主页。",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading
        title="联系我"
        description="实习 / 校招机会或项目交流，欢迎通过以下任意方式联系，邮件通常会在 24 小时内回复。"
      />
      <SocialLinks variant="cards" />
      <p className="mt-8 text-sm text-muted-foreground">
        招聘相关的邮件建议在主题中注明「求职」，方便我优先处理；需要更详细的资料，可
        <a
          href={profile.resumePdf}
          download="商子轩-全栈开发-简历.pdf"
          className="mx-1 text-primary hover:underline"
        >
          下载简历 PDF
        </a>
        。
      </p>
    </div>
  );
}
