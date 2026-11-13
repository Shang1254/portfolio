import Link from "next/link";
import type { Locale } from "@/data/i18n";
import { ui } from "@/data/i18n";
import { profiles } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer({ locale = "zh" }: { locale?: Locale }) {
  const profile = profiles[locale];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {ui[locale].footerBuilt}
          <span className="mx-1.5">·</span>
          <Link
            href={locale === "en" ? "/en/poetry" : "/poetry"}
            className="transition hover:text-foreground hover:underline"
          >
            {ui[locale].poetry.title}
          </Link>
        </p>
        <SocialLinks locale={locale} />
      </div>
    </footer>
  );
}
