import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, getProjects } from "@/data/projects";
import { profiles } from "@/data/profile";
import { ui } from "@/data/i18n";

type PageProps = { params: Promise<{ id: string }> };

// 静态预渲染全部项目详情页（英文版）
export function generateStaticParams() {
  return getProjects("en").map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById("en", id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${profiles.en.name}`,
      description: project.summary,
    },
  };
}

export default async function EnProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById("en", id);
  if (!project) notFound();

  const copy = ui.en.projects;
  // 列表按时间从新到旧排列：index-1 为更新的项目，index+1 为更早的
  const list = getProjects("en");
  const index = list.findIndex((p) => p.id === project.id);
  const newer = index > 0 ? list[index - 1] : undefined;
  const older = index < list.length - 1 ? list[index + 1] : undefined;

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
      <nav aria-label={copy.breadcrumb} className="mb-6">
        <Link
          href="/en/projects"
          className="text-sm text-muted-foreground transition hover:text-foreground"
        >
          {copy.breadcrumb}
        </Link>
      </nav>

      <div className="overflow-hidden rounded-xl border border-border">
        <img
          src={project.image}
          alt={copy.coverAlt(project.title)}
          width={1200}
          height={750}
          className="h-auto w-full object-cover"
        />
      </div>

      <header className="mt-8">
        <p className="text-xs text-muted-foreground">{project.period ?? project.year}</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          {project.title}
        </h1>
      </header>

      <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>

      <section
        aria-labelledby="project-highlights"
        className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-5 sm:p-6"
      >
        <h2 id="project-highlights" className="font-semibold">
          {copy.highlights}
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2">
              <span
                aria-hidden
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {project.responsibilities && (
        <section aria-labelledby="project-responsibilities" className="mt-10">
          <h2 id="project-responsibilities" className="text-lg font-bold">
            {copy.responsibilities}
          </h2>
          <ul className="mt-4 space-y-3">
            {project.responsibilities.map((item) => (
              <li
                key={item.slice(0, 24)}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  aria-hidden
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <section aria-labelledby="project-gallery" className="mt-10">
          <h2 id="project-gallery" className="text-lg font-bold">
            {copy.gallery}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={copy.shotAlt(project.title, i)}
                width={1280}
                height={720}
                loading="lazy"
                className="h-auto w-full rounded-lg border border-border bg-muted object-cover"
              />
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="project-stack" className="mt-10">
        <h2 id="project-stack" className="text-lg font-bold">
          {copy.stack}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      {(project.demoUrl || project.repoUrl) && (
        <div className="mt-10 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              {project.demoLabel ?? copy.demoLabel}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
            >
              {copy.sourceLabel} · {project.repoLabel ?? "Git"}
            </a>
          )}
        </div>
      )}

      <nav
        aria-label={copy.navBetween}
        className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-6 text-sm"
      >
        {older ? (
          <Link
            href={`/en/projects/${older.id}`}
            className="min-w-0 truncate text-muted-foreground transition hover:text-foreground"
          >
            ← {older.title}
          </Link>
        ) : (
          <span />
        )}
        {newer && (
          <Link
            href={`/en/projects/${newer.id}`}
            className="min-w-0 truncate text-right text-muted-foreground transition hover:text-foreground"
          >
            {newer.title} →
          </Link>
        )}
      </nav>
    </article>
  );
}
