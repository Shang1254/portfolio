import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · 基于 Next.js 构建
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
