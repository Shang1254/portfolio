import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { projects } from "@/data/projects";

// GitHub Pages 静态导出模式要求路由显式声明为静态
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const zhPages: MetadataRoute.Sitemap = ["", "/projects", "/about", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          "zh-CN": `${SITE_URL}${path || "/"}`,
          en: `${SITE_URL}/en${path || ""}`,
        },
      },
    }),
  );

  const enPages: MetadataRoute.Sitemap = ["/en", "/en/projects", "/en/about", "/en/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: path === "/en" ? 0.9 : 0.7,
      alternates: {
        languages: {
          "zh-CN": `${SITE_URL}${path.replace("/en", "") || "/"}`,
          en: `${SITE_URL}${path}`,
        },
      },
    }),
  );

  const projectPages: MetadataRoute.Sitemap = [
    ...projects.zh.map((project) => ({
      url: `${SITE_URL}/projects/${project.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          "zh-CN": `${SITE_URL}/projects/${project.id}`,
          en: `${SITE_URL}/en/projects/${project.id}`,
        },
      },
    })),
    ...projects.en.map((project) => ({
      url: `${SITE_URL}/en/projects/${project.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...zhPages, ...enPages, ...projectPages];
}
