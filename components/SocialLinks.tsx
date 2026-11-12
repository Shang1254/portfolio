import type { Locale } from "@/data/i18n";
import { ui } from "@/data/i18n";
import { profiles } from "@/data/profile";
import CopyEmailButton from "./CopyEmailButton";

// 社交链接图标全部内联 SVG，避免引入图标库依赖
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function GiteeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="700"
        className="fill-background"
      >
        G
      </text>
    </svg>
  );
}

function buildItems(locale: Locale) {
  const profile = profiles[locale];
  const copy = ui[locale].social;
  const items = [
    {
      label: copy.email,
      href: `mailto:${profile.email}`,
      value: profile.email,
      icon: <MailIcon />,
    },
    {
      label: "GitHub",
      href: profile.github,
      value: profile.github.replace(/^https?:\/\//, ""),
      icon: <GitHubIcon />,
    },
    {
      label: "Gitee",
      href: profile.gitee,
      value: profile.gitee.replace(/^https?:\/\//, ""),
      icon: <GiteeIcon />,
    },
  ];
  return items.filter((item) => item.href);
}

/**
 * 社交链接组
 * - icons：仅图标（页脚）
 * - cards：带说明的卡片（Contact 页），邮箱卡片附带一键复制按钮
 */
export default function SocialLinks({
  locale = "zh",
  variant = "icons",
}: {
  locale?: Locale;
  variant?: "icons" | "cards";
}) {
  const items = buildItems(locale);

  if (variant === "cards") {
    return (
      <ul className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => {
          const isMail = item.href.startsWith("mailto:");
          const inner = (
            <>
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-foreground"
              >
                {item.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-medium">{item.label}</span>
                <span className="block truncate text-sm text-muted-foreground">
                  {item.value}
                </span>
              </span>
            </>
          );
          return (
            <li key={item.label}>
              {isMail ? (
                // 邮箱卡片：复制按钮不能嵌在链接里（交互元素嵌套），拆成兄弟节点
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary/50 hover:shadow-sm">
                  <a href={item.href} className="flex min-w-0 flex-1 items-center gap-3">
                    {inner}
                  </a>
                  <CopyEmailButton email={item.value} locale={locale} />
                </div>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary/50 hover:shadow-sm"
                >
                  {inner}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={item.label}
            className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
