// 项目数据：唯一数据源。新增项目只需在数组中追加一条记录
export type Project = {
  id: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  highlights: string[];
  image: string;
  repoUrl?: string;
  repoLabel?: string;
  demoUrl?: string;
  demoLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "tianjige",
    title: "天机阁 · 玄学研究院",
    year: "2026.10",
    summary:
      "可溯源的传统文化数字化工具站：八字排盘、周易六爻、择吉黄历、道观名录与典籍引文库，每条断语均可回溯至已核验的古籍原文，已部署上线稳定运行。",
    tags: ["JavaScript SPA", "Python 标准库", "RESTful API", "阿里云 ECS", "systemd"],
    highlights: [
      "131/131 条古籍引文逐字核验命中底本",
      "5 套自动化测试，700+ 断言全绿",
      "对接国家宗教事务局开放数据，清洗 42,440 条记录",
    ],
    image: "/images/project-tianjige.svg",
    demoUrl: "http://47.115.220.217",
    demoLabel: "在线访问",
    featured: true,
  },
  {
    id: "aog-qa",
    title: "AOG 智能问答系统",
    year: "2026.07",
    summary:
      "基于 RAG 的智能问答系统：支持多知识库管理、文档向量化检索、多轮对话与流式输出，集成 PWA 离线访问与移动端适配。",
    tags: ["FastAPI", "Vue 3", "ChromaDB", "MySQL", "Redis"],
    highlights: [
      "BM25 + Reranker 混合检索与重排序",
      "按问题类型自动路由最优 AI 模型",
      "API 限流、登录失败锁定等多层安全机制",
    ],
    image: "/images/project-aog.svg",
    repoUrl: "https://gitee.com/shang-zixuan/ragflow",
    repoLabel: "Gitee",
    featured: true,
  },
  {
    id: "smart-class",
    title: "智能班级管理系统",
    year: "2026.06",
    summary:
      "面向高校辅导员与学生的综合管理平台：班级信息管理、作业统计、数据看板与实时消息通知，覆盖从权限设计到部署加固的完整链路。",
    tags: ["Next.js", "Spring Boot", "MyBatis", "Supabase", "WebSocket"],
    highlights: [
      "WebSocket 实现系统级实时消息推送",
      "Redis 缓存优化高并发数据统计接口",
      "学生 / 辅导员角色数据隔离 + 安全响应头加固",
    ],
    image: "/images/project-class.svg",
    repoUrl: "https://gitee.com/shang-zixuan/smart-class-management-system",
    repoLabel: "Gitee",
    featured: true,
  },
];

// 首页精选项目：按 featured 标记取前 count 个
export function featuredProjects(count = 3): Project[] {
  return projects.filter((p) => p.featured).slice(0, count);
}
