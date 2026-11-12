import type { Metadata } from "next";
import { profiles } from "@/data/profile";
import { ui } from "@/data/i18n";
import SocialLinks from "@/components/SocialLinks";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: ui.en.nav.contact,
  description: "Contact Shang Zixuan: email, GitHub and Gitee.",
  alternates: {
    languages: { "zh-CN": "/contact", en: "/en/contact" },
  },
};

export default function EnContactPage() {
  const copy = ui.en.contact;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading title={copy.title} description={copy.description} />
      <SocialLinks locale="en" variant="cards" />
      <p className="mt-8 text-sm text-muted-foreground">
        {copy.recruitHint}{" "}
        <a
          href={profiles.en.resumePdf}
          download="Shang-Zixuan-Full-Stack-Resume.pdf"
          className="text-primary hover:underline"
        >
          {copy.downloadResume}
        </a>
        .
      </p>
    </div>
  );
}
