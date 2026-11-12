import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p aria-hidden className="text-6xl font-bold tracking-tight text-primary">
        404
      </p>
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">页面走丢了</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        你要找的页面不存在，可能已被移动或删除。
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          回到首页
        </Link>
        <Link
          href="/projects"
          className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
        >
          查看项目
        </Link>
      </div>
    </div>
  );
}
