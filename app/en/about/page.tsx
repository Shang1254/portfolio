import type { Metadata } from "next";
import Link from "next/link";
import { profiles } from "@/data/profile";
import { ui } from "@/data/i18n";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: ui.en.nav.about,
  description:
    "Shang Zixuan: Class-of-2027 CS undergraduate, full-stack developer. Education, internship experience, skill groups and a distinctive research background.",
  alternates: {
    languages: { "zh-CN": "/about", en: "/en/about" },
  },
};

export default function EnAboutPage() {
  const profile = profiles.en;
  const copy = ui.en.about;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      {/* Intro */}
      <section aria-labelledby="about-intro">
        <SectionHeading id="about-intro" title={copy.title} />
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <img
            src="/images/avatar.svg"
            alt={`${profile.name}'s avatar`}
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-full border border-border"
          />
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="text-muted-foreground">📍 {profile.location}</p>
            <div>
              <a
                href={profile.resumePdf}
                download="Shang-Zixuan-Full-Stack-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
                {copy.downloadResume}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        aria-labelledby="about-skills"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-skills" title={copy.skills} />
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

      {/* Experience */}
      <section
        aria-labelledby="about-experience"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-experience" title={copy.experience} />
        <ol className="relative space-y-10 border-l border-border pl-6">
          {profile.experiences.map((experience) => (
            <li key={experience.role} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
              />
              <p className="text-xs text-muted-foreground">{experience.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{experience.role}</h3>
              <p className="text-sm text-muted-foreground">{experience.company}</p>
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

      {/* Education */}
      <section
        aria-labelledby="about-education"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-education" title={copy.education} />
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.education.map((education) => (
            <div
              key={education.school}
              className="rounded-xl border border-border bg-card p-5"
            >
              <p className="text-xs text-muted-foreground">{education.period}</p>
              <h3 className="mt-1 font-semibold">{education.school}</h3>
              <p className="mt-0.5 text-sm text-primary">{education.major}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {education.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section
        aria-labelledby="about-certificates"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-certificates" title={copy.certificates} />
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

      {/* Self-Knowledge · TQC */}
      <section
        aria-labelledby="about-tqc"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-tqc" title={profile.tqc.title} />
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <dl className="grid gap-4 sm:grid-cols-2">
            {profile.tqc.items.map((item) => (
              <div key={item.label}>
                <dt className="text-xs text-muted-foreground">{item.label}</dt>
                <dd className="mt-1 text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={profile.tqc.pdf}
              download="Shang-Zixuan-TQC-Brain-Analysis.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
            >
              {profile.tqc.download}
            </a>
            <p className="text-xs text-muted-foreground">{profile.tqc.note}</p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section
        aria-labelledby="about-research"
        className="mt-16 border-t border-border pt-10"
      >
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <h3 className="text-lg font-bold">{profile.research.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.research.description}
          </p>
          <Link
            href="/en/poetry"
            className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            {copy.poetryLink}
          </Link>
        </div>
      </section>

      {/* Poster wall */}
      <section
        aria-labelledby="about-posters"
        className="mt-16 border-t border-border pt-10"
      >
        <SectionHeading id="about-posters" title={copy.posters} />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { src: "/images/poster.webp", label: copy.posterLabels[0] },
            { src: "/images/poster-think.webp", label: copy.posterLabels[1] },
            { src: "/images/poster-ink.webp", label: copy.posterLabels[2] },
            { src: "/images/poster-code.webp", label: copy.posterLabels[3] },
          ].map((poster) => (
            <figure
              key={poster.src}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={poster.src}
                alt={`Poster of Shang Zixuan: ${poster.label}`}
                width={1000}
                height={1333}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="border-t border-border px-4 py-3 text-center text-sm text-muted-foreground">
                {poster.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
