"use client";

import { useEffect, useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
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
      onClick={copy}
      aria-label={copied ? "邮箱已复制" : `复制邮箱 ${email}`}
      className="shrink-0 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
    >
      {copied ? "已复制 ✓" : "复制"}
    </button>
  );
}
