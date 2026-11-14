// 站点 UI 文案词典：所有界面字符串的中英文唯一来源
export type Locale = "zh" | "en";
export const locales: Locale[] = ["zh", "en"];

/** 从路径推断语言（/en 前缀为英文） */
export function localeFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "zh";
}

/** 返回同一页面另一语言的路径（用于语言切换器） */
export function swapLocalePath(pathname: string): string {
  if (pathname.startsWith("/en")) {
    return pathname.slice(3) || "/";
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
}

export const ui = {
  zh: {
    nav: { home: "首页", projects: "项目", about: "关于", contact: "联系" },
    langSwitch: "EN",
    theme: { toLight: "切换到浅色模式", toDark: "切换到深色模式" },
    backToTop: "回到顶部",
    skip: "跳到主要内容",
    footerBuilt: "基于 Next.js 构建",
    social: { email: "邮箱", copy: "复制", copied: "已复制 ✓", copyEmail: (v: string) => `复制邮箱 ${v}` },
    home: {
      status: "2027 届本科应届生 · 正在求职",
      greeting: "你好，我是",
      intentsLabel: "求职意向",
      viewProjects: "查看项目",
      contactMe: "联系我",
      featured: {
        title: "精选项目",
        description: "三个完整走完设计、开发、测试与部署的作品",
        viewAll: "查看全部 →",
      },
      skills: {
        title: "技能概览",
        description: "日常开发中最顺手的一部分技术，完整技能分组见「关于」页",
      },
      cta: {
        title: "对我的项目感兴趣？",
        description: "无论是实习 / 校招机会，还是想聊聊某个项目的实现细节，都欢迎联系我。",
        button: "联系我",
      },
    },
    projects: {
      title: "项目",
      description: (n: number) => `共 ${n} 个完整项目，全部由本人独立完成设计、开发、测试与部署。`,
      moreOn: "更多代码与练习见",
      moreOnGitee: "Gitee 主页",
      detail: "详情 →",
      demoLabel: "在线演示",
      sourceLabel: "源码",
      breadcrumb: "← 返回全部项目",
      highlights: "成果亮点",
      responsibilities: "个人职责",
      stack: "技术栈",
      gallery: "应用截图",
      navBetween: "项目间导航",
      coverAlt: (t: string) => `${t} 封面图`,
      shotAlt: (t: string, i: number) => `${t} 应用截图 ${i + 1}`,
    },
    about: {
      title: "关于我",
      skills: "技能",
      experience: "实习经历",
      education: "教育经历",
      certificates: "荣誉证书",
      downloadResume: "下载简历 PDF",
      poetryLink: "阅读诗文选 →",
      posters: "个人海报",
      posterLabels: ["极简剪影", "思考者", "水墨 · 科技", "代码人生"],
    },
    poetry: {
      title: "诗文",
      subtitle: "红尘居士 · 原创古典诗选",
      intro:
        "代码之外，我以「红尘居士」为号习诗多年——写山水、阴阳、求道与四时。以下作品选录自 QQ 空间历年说说。",
      count: (n: number) => `共 ${n} 首`,
      note: "诗文为中文原作，不做翻译——诗者，译则失其魂。",
    },
    contact: {
      title: "联系我",
      description:
        "实习 / 校招机会或项目交流，欢迎通过以下任意方式联系，邮件通常会在 24 小时内回复。",
      recruitHint:
        "招聘相关的邮件建议在主题中注明「求职」，方便我优先处理；需要更详细的资料，可",
      downloadResume: "下载简历 PDF",
    },
    notFound: {
      title: "页面走丢了",
      description: "你要找的页面不存在，可能已被移动或删除。",
      home: "回到首页",
      projects: "查看项目",
    },
  },
  en: {
    nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact" },
    langSwitch: "中文",
    theme: { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
    backToTop: "Back to top",
    skip: "Skip to main content",
    footerBuilt: "Built with Next.js",
    social: { email: "Email", copy: "Copy", copied: "Copied ✓", copyEmail: (v: string) => `Copy email ${v}` },
    home: {
      status: "Class of 2027 · Open to opportunities",
      greeting: "Hi, I'm",
      intentsLabel: "Target roles",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      featured: {
        title: "Featured Projects",
        description: "Three projects taken from design through development, testing and deployment",
        viewAll: "View all →",
      },
      skills: {
        title: "Skills Overview",
        description: "A subset of the tools I use daily — the full breakdown lives on the About page",
      },
      cta: {
        title: "Interested in my work?",
        description:
          "Whether it's an internship / new-grad opportunity or a deep-dive into one of my projects, feel free to reach out.",
        button: "Contact Me",
      },
    },
    projects: {
      title: "Projects",
      description: (n: number) =>
        `${n} complete projects — each designed, built, tested and deployed independently.`,
      moreOn: "More code and experiments on my",
      moreOnGitee: "Gitee profile",
      detail: "Details →",
      demoLabel: "Live Demo",
      sourceLabel: "Source",
      breadcrumb: "← Back to all projects",
      highlights: "Highlights",
      responsibilities: "My Responsibilities",
      stack: "Tech Stack",
      gallery: "Screenshots",
      navBetween: "Project navigation",
      coverAlt: (t: string) => `${t} cover image`,
      shotAlt: (t: string, i: number) => `${t} screenshot ${i + 1}`,
    },
    about: {
      title: "About Me",
      skills: "Skills",
      experience: "Internship Experience",
      education: "Education",
      certificates: "Honors & Certificates",
      downloadResume: "Download Résumé (PDF)",
      poetryLink: "Read the poetry selection →",
      posters: "Posters",
      posterLabels: ["Minimal Silhouette", "The Thinker", "Ink & Tech", "Code Life"],
    },
    poetry: {
      title: "Poetry",
      subtitle: "Classical-Style Chinese Verse · Pen Name Hongchen Jushi",
      intro:
        "Beyond code, I have written classical-style Chinese poetry for years under the pen name Hongchen Jushi (红尘居士) — landscapes, yin-yang cosmology, self-cultivation and the passing seasons. A selection from my archive.",
      count: (n: number) => `${n} poems`,
      note: "Poems are presented in the original Chinese — verse loses its soul in translation.",
    },
    contact: {
      title: "Get in Touch",
      description:
        "For internship / new-grad opportunities or project discussions, reach me through any channel below — I usually reply within 24 hours.",
      recruitHint:
        "For recruiting emails, adding “Job Application” to the subject line helps me reply faster. For more detail, you can",
      downloadResume: "download my résumé (PDF)",
    },
    notFound: {
      title: "Page not found",
      description: "The page you're looking for doesn't exist or has been moved.",
      home: "Back Home",
      projects: "View Projects",
    },
  },
} as const;
