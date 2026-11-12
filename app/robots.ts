import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

// GitHub Pages 静态导出模式要求路由显式声明为静态
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
