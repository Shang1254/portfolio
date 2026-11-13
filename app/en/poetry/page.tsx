import type { Metadata } from "next";
import { poems, poetryByline } from "@/data/poems";
import { ui } from "@/data/i18n";

export const metadata: Metadata = {
  title: ui.en.poetry.title,
  description:
    "Original classical-style Chinese poetry by Shang Zixuan (pen name Hongchen Jushi): landscapes, yin-yang cosmology, self-cultivation and the seasons — 31 selected poems.",
  alternates: {
    languages: { "zh-CN": "/poetry", en: "/en/poetry" },
  },
};

export default function EnPoetryPage() {
  const copy = ui.en.poetry;

  return (
    <div
      className="poetry-theme min-h-screen"
      style={{
        background:
          "radial-gradient(1100px 520px at 50% -10%, var(--seal-soft), transparent), var(--paper)",
        color: "var(--ink)",
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <header className="text-center">
          <p
            className="text-xs tracking-[0.3em]"
            style={{ color: "var(--ink-soft)" }}
          >
            {copy.subtitle}
          </p>
          <h1 className="poetry-serif mt-3 text-4xl font-bold tracking-[0.2em] sm:text-5xl">
            {copy.title}
          </h1>
          <div
            aria-hidden
            className="mx-auto mt-6 h-px w-16"
            style={{ background: "var(--seal)" }}
          />
          <p
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            {copy.intro}
          </p>
          <p className="mt-2 text-xs" style={{ color: "var(--ink-soft)" }}>
            {copy.count(poems.length)}
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {poems.map((poem) => (
            <article
              key={poem.id}
              className="relative rounded-lg border p-6"
              style={{
                borderColor: "var(--paper-2)",
                background: "var(--paper-card)",
              }}
            >
              <span
                aria-hidden
                className="poetry-serif absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-sm border text-[10px] leading-tight"
                style={{ borderColor: "var(--seal)", color: "var(--seal)" }}
              >
                红尘
              </span>
              <header className="pr-12">
                <h2 className="poetry-serif text-xl font-bold tracking-widest">
                  {poem.title}
                </h2>
                <p className="mt-1 text-xs" style={{ color: "var(--ink-soft)" }}>
                  {poem.date}
                </p>
              </header>
              <p className="poetry-serif mt-4 whitespace-pre-line text-[15px] leading-8 tracking-[0.1em]">
                {poem.text}
              </p>
              <footer
                className="poetry-serif mt-5 text-right text-xs"
                style={{ color: "var(--seal)" }}
              >
                —— {poem.author ?? poetryByline}
              </footer>
            </article>
          ))}
        </div>

        <p
          className="mt-12 text-center text-xs"
          style={{ color: "var(--ink-soft)" }}
        >
          {copy.note}
        </p>
      </div>
    </div>
  );
}
