import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { projects } from "@/data/projects";

// GitHub Pages 静态导出模式要求路由显式声明为静态
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = ["", "/projects", "/about", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
