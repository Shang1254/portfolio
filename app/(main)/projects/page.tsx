import type { Metadata } from "next";
import { projects, getProjects } from "@/data/projects";
import { profiles } from "@/data/profile";
import { ui } from "@/data/i18n";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: ui.zh.nav.projects,
  description:
    "商子轩的个人项目合集：崇文兰庭缴费通、天机阁、知云同职、AOG 智能问答、智能班级管理系统等，附源码与在线演示链接。",
  alternates: {
    languages: { "zh-CN": "/projects", en: "/en/projects" },
  },
};

export default function ProjectsPage() {
  const profile = profiles.zh;
  const copy = ui.zh.projects;
  const all = getProjects("zh");

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading
        title={copy.title}
        description={copy.description(all.length)}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {all.map((project) => (
          <ProjectCard key={project.id} project={project} locale="zh" />
        ))}
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        {copy.moreOn}
        <a
          href={profile.gitee}
          target="_blank"
          rel="noreferrer"
          className="mx-1 text-primary hover:underline"
        >
          {copy.moreOnGitee}
        </a>
        。
      </p>
    </div>
  );
}
