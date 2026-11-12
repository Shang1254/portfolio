import type { Metadata } from "next";
import { getProjects } from "@/data/projects";
import { profiles } from "@/data/profile";
import { ui } from "@/data/i18n";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: ui.en.nav.projects,
  description:
    "Shang Zixuan's project collection: Chongwen community payment, Tianjige, Zhiyun Tongzhi, AOG RAG Q&A, the class management platform and more — with source code and live demo links.",
  alternates: {
    languages: { "zh-CN": "/projects", en: "/en/projects" },
  },
};

export default function EnProjectsPage() {
  const profile = profiles.en;
  const copy = ui.en.projects;
  const all = getProjects("en");

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading
        title={copy.title}
        description={copy.description(all.length)}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {all.map((project) => (
          <ProjectCard key={project.id} project={project} locale="en" />
        ))}
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        {copy.moreOn}{" "}
        <a
          href={profile.gitee}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
        >
          {copy.moreOnGitee}
        </a>
        .
      </p>
    </div>
  );
}
