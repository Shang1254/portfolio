import Link from "next/link";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  const featured = featuredProjects(3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span aria-hidden className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {profile.status}
          </p>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            你好，我是
            <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.headline}。{profile.tagline}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="求职意向">
            {profile.jobIntents.map((intent) => (
              <li
                key={intent}
                className="rounded-lg border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
              >
                {intent}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              查看项目
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
            >
              联系我
            </Link>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-bold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 精选项目 */}
      <section
        aria-labelledby="featured-projects"
        className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6"
      >
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            id="featured-projects"
            title="精选项目"
            description="三个完整走完设计、开发、测试与部署的作品"
          />
          <Link
            href="/projects"
            className="mb-8 shrink-0 text-sm text-primary hover:underline"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 技能概览 */}
      <section
        aria-labelledby="skills-overview"
        className="border-t border-border bg-muted/40"
      >
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
          <SectionHeading
            id="skills-overview"
            title="技能概览"
            description="日常开发中最顺手的一部分技术，完整技能分组见「关于」页"
          />
          <ul className="flex flex-wrap gap-2">
            {profile.homeSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-card px-6 py-10 text-center">
          <h2 className="text-xl font-bold sm:text-2xl">对我的项目感兴趣？</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            无论是实习 / 校招机会，还是想聊聊某个项目的实现细节，都欢迎联系我。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            联系我
          </Link>
        </div>
      </section>
    </>
  );
}
