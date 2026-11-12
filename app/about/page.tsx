import type { Metadata } from "next";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "关于我",
  description:
    "商子轩：2027 届计算机本科应届生，全栈开发方向。教育经历、实习经历、技能分组与特色研究背景。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      {/* 简介 */}
      <section aria-labelledby="about-intro">
        <SectionHeading id="about-intro" title="关于我" />
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <img
            src="/images/avatar.svg"
            alt={`${profile.name} 的头像`}
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-full border border-border"
          />
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 12)}>{paragraph}</p>
            ))}
            <p className="text-muted-foreground">
              📍 {profile.location}
            </p>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section
        aria-labelledby="about-skills"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-skills" title="技能" />
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.skills.map((group) => (
            <div
              key={group.group}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-semibold">{group.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 实习经历 */}
      <section
        aria-labelledby="about-experience"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-experience" title="实习经历" />
        <ol className="relative space-y-10 border-l border-border pl-6">
          {profile.experiences.map((experience) => (
            <li key={experience.role} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
              />
              <p className="text-xs text-muted-foreground">
                {experience.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{experience.role}</h3>
              <p className="text-sm text-muted-foreground">
                {experience.company}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* 教育经历 */}
      <section
        aria-labelledby="about-education"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-education" title="教育经历" />
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.education.map((education) => (
            <div
              key={education.school}
              className="rounded-xl border border-border bg-card p-5"
            >
              <p className="text-xs text-muted-foreground">
                {education.period}
              </p>
              <h3 className="mt-1 font-semibold">{education.school}</h3>
              <p className="mt-0.5 text-sm text-primary">
                {education.major}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {education.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 荣誉证书 */}
      <section
        aria-labelledby="about-certificates"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-certificates" title="荣誉证书" />
        <ul className="flex flex-wrap gap-2">
          {profile.certificates.map((certificate) => (
            <li
              key={certificate}
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm"
            >
              🏅 {certificate}
            </li>
          ))}
        </ul>
      </section>

      {/* 特色背景 */}
      <section
        aria-labelledby="about-research"
        className="mt-16 border-t border-border pt-10"
      >
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <h3 className="text-lg font-bold">{profile.research.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.research.description}
          </p>
        </div>
      </section>
    </div>
  );
}
