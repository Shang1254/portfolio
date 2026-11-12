import Link from "next/link";
import type { Locale } from "@/data/i18n";
import { ui } from "@/data/i18n";
import type { Project } from "@/data/projects";

// 封面为本地 SVG/截图资源，无需 Next 图片优化管线，使用原生 img
export default function ProjectCard({
  project,
  locale = "zh",
}: {
  project: Project;
  locale?: Locale;
}) {
  const copy = ui[locale].projects;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <div className="aspect-video overflow-hidden border-b border-border bg-muted">
        <Link
          href={`${locale === "en" ? "/en" : ""}/projects/${project.id}`}
          aria-label={`${copy.detail} ${project.title}`}
          className="block h-full w-full"
        >
          <img
            src={project.image}
            alt={copy.coverAlt(project.title)}
            width={1200}
            height={750}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-semibold">
            <Link
              href={`${locale === "en" ? "/en" : ""}/projects/${project.id}`}
              className="transition hover:text-primary"
            >
              {project.title}
            </Link>
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="space-y-1.5 text-sm">
          {project.highlights.slice(0, 3).map((point) => (
            <li key={point} className="flex gap-2">
              <span
                aria-hidden
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              {point}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-1.5" aria-label={copy.stack}>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              {project.demoLabel ?? copy.demoLabel}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg border border-border px-3 py-1.5 text-sm transition hover:bg-muted"
            >
              {copy.sourceLabel} · {project.repoLabel ?? "Git"}
            </a>
          )}
          <Link
            href={`${locale === "en" ? "/en" : ""}/projects/${project.id}`}
            className="ml-auto inline-flex items-center text-sm text-primary hover:underline"
          >
            {copy.detail}
          </Link>
        </div>
      </div>
    </article>
  );
}
