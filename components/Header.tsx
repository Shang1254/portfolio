"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export default function Header() {
  const pathname = usePathname();

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
        <nav aria-label="主导航">
          <ul className="flex items-center gap-0.5 text-sm sm:gap-1">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-2 py-1.5 transition sm:px-3 ${
                      active
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-0.5">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
