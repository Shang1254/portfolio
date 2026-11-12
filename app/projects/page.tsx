import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "项目",
  description:
    "商子轩的个人项目合集：天机阁 · 玄学研究院、AOG 智能问答系统、智能班级管理系统，附源码与在线演示链接。",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading
        title="项目"
        description={`共 ${projects.length} 个完整项目，全部由本人独立完成设计、开发、测试与部署。`}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        更多代码与练习见
        <a
          href={profile.gitee}
          target="_blank"
          rel="noreferrer"
          className="mx-1 text-primary hover:underline"
        >
          Gitee 主页
        </a>
        。
      </p>
    </div>
  );
}
