"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profiles } from "@/data/profile";
import { localeFromPath, swapLocalePath, ui } from "@/data/i18n";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const copy = ui[locale];
  const profile = profiles[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="grid h-6 w-6 place-items-center rounded-md bg-primary text-xs text-primary-foreground"
          >
            商
          </span>
          {profile.name}
        </Link>
        <nav aria-label={locale === "zh" ? "主导航" : "Main navigation"}>
          <ul className="flex items-center gap-0.5 text-sm sm:gap-1">
            {NAV_ITEMS.map((item) => {
              const href =
                locale === "en" && item.href === "/" ? "/en" : `/en${item.href === "/" ? "" : item.href}`;
              const targetHref = locale === "zh" ? item.href : href;
              const active =
                item.href === "/"
                  ? locale === "zh"
                    ? pathname === "/"
                    : pathname === "/en"
                  : pathname.startsWith(
                      locale === "zh" ? item.href : `/en${item.href}`,
                    );
              return (
                <li key={item.href}>
                  <Link
                    href={targetHref}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-2 py-1.5 transition sm:px-3 ${
                      active
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {copy.nav[item.key]}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href={swapLocalePath(pathname)}
                className="rounded-lg px-2 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground sm:px-2.5"
                aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
              >
                {copy.langSwitch}
              </Link>
            </li>
            <li className="ml-0.5">
              <ThemeToggle locale={locale} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
