"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/data/i18n";
import { ui } from "@/data/i18n";

export default function CopyEmailButton({
  value,
  locale = "zh",
}: {
  /** 需要复制的文本（邮箱 / QQ 号） */
  value: string;
  locale?: Locale;
}) {
  const [copied, setCopied] = useState(false);
  const copy = ui[locale].social;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // 剪贴板不可用（非 HTTPS / 权限受限）时静默失败
    }
  }

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label={copied ? copy.copied : `${copy.copy} ${value}`}
      className="shrink-0 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
    >
      {copied ? copy.copied : copy.copy}
    </button>
  );
}
