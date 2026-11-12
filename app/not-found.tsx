import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ui } from "@/data/i18n";

// 全局 404：无法感知语言，默认展示中文壳
export default function NotFound() {
  const copy = ui.zh.notFound;
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-4 py-24 text-center sm:px-6"
      >
        <p aria-hidden className="text-6xl font-bold tracking-tight text-primary">
          404
        </p>
        <h1 className="mt-4 text-xl font-bold sm:text-2xl">{copy.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{copy.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            {copy.home}
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
          >
            {copy.projects}
          </Link>
        </div>
      </main>
      <Footer locale="zh" />
    </>
  );
}
