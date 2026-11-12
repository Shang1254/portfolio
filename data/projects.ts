// 项目数据：唯一数据源。新增项目只需在数组中追加一条记录，
// 详情页 /projects/[id] 与 sitemap 会自动生成
export type Project = {
  id: string;
  title: string;
  year: string;
  /** 完整起止时间，详情页展示（卡片仍用 year） */
  period?: string;
  summary: string;
  tags: string[];
  highlights: string[];
  /** 详情页展示的个人职责要点 */
  responsibilities?: string[];
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
    period: "2026.9 – 2026.10",
    summary:
      "可溯源的传统文化数字化工具站：八字排盘、周易六爻、择吉黄历、道观名录与典籍引文库，每条断语均可回溯至已核验的古籍原文，已部署上线稳定运行。",
    tags: ["JavaScript SPA", "Python 标准库", "RESTful API", "阿里云 ECS", "systemd"],
    highlights: [
      "131/131 条古籍引文逐字核验命中底本",
      "5 套自动化测试，700+ 断言全绿",
      "对接国家宗教事务局开放数据，清洗 42,440 条记录",
    ],
    responsibilities: [
      "内容核验流水线：搭建「文库抓取 → 底本归档 → 严格连续子串逐字比对」的引文核验管线，131/131 条引文逐字命中古籍底本（含繁简、异体字与标点归一化）",
      "质量工程：编写 5 套自动化测试一键执行（700+ 断言全绿），覆盖算法正确性、引文逐字核验、反幻觉纪律扫描与全站页面冒烟，坚持「断言必须能真正失败」，杜绝假绿测试",
      "后端与部署：在阿里云 ECS（Ubuntu 22.04）用 Python 标准库实现零依赖键值存储服务（原子写、键名白名单、请求体上限、请求头鉴权），systemd 守护托管静态站点",
      "同步层设计：前端实现同源云同步，多端数据并集合并、离线兜底静默降级，localStorage 双写兜底",
      "自绘装饰系统：以内联 SVG 自绘太极、八卦、洛书、五行、印章等 7 类装饰替代网络素材，零外部请求、零版权风险、可一键关闭，并配套「调用点契约」测试防止误用",
      "数据规模：引文库 133 条（131 条逐字核验）、神诞十二月全表 156 位、道观名录 96 处、对接国家宗教事务局开放数据 42,440 条场所记录",
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
    period: "2026.4 – 2026.7",
    summary:
      "基于 RAG 的智能问答系统：支持多知识库管理、文档向量化检索、多轮对话与流式输出，集成 PWA 离线访问与移动端适配。",
    tags: ["FastAPI", "Vue 3", "ChromaDB", "MySQL", "Redis"],
    highlights: [
      "BM25 + Reranker 混合检索与重排序",
      "按问题类型自动路由最优 AI 模型",
      "API 限流、登录失败锁定等多层安全机制",
    ],
    responsibilities: [
      "架构与开发：独立负责前后端整体架构设计与开发；后端采用 FastAPI 构建 RESTful API，集成 ChromaDB 向量数据库实现语义检索，结合 BM25 与 Reranker 模型完成混合检索与重排序",
      "前端体验：基于 Vue 3 + Vite 搭建，实现多轮对话与流式输出，集成 PWA 离线访问与移动端适配",
      "性能与功能：引入 Redis 缓存层降低数据库查询压力；实现多模型智能推荐引擎，根据问题类型自动路由至最优 AI 模型；支持 PDF、Word、Excel 等多格式文档解析与云端存储集成",
      "部署与安全：采用 uvicorn 部署后端服务；配置 CORS 跨域策略、SQL 注入防护、文件上传安全校验、API 限流与登录失败锁定等多层安全机制；通过定时任务实现数据库自动备份与云盘同步",
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
    period: "2026.6",
    summary:
      "面向高校辅导员与学生的综合管理平台：班级信息管理、作业统计、数据看板与实时消息通知，覆盖从权限设计到部署加固的完整链路。",
    tags: ["Next.js", "Spring Boot", "MyBatis", "Supabase", "WebSocket"],
    highlights: [
      "WebSocket 实现系统级实时消息推送",
      "Redis 缓存优化高并发数据统计接口",
      "学生 / 辅导员角色数据隔离 + 安全响应头加固",
    ],
    responsibilities: [
      "架构与开发：独立负责前端页面搭建与后端接口开发；设计用户权限模块，通过身份认证拦截器完成学生与辅导员角色的数据隔离",
      "实时与性能：引入 WebSocket 实现系统实时消息推送；针对高并发场景优化数据统计接口，结合 Redis 缓存降低数据库压力",
      "部署与安全：采用 Nginx 进行前端代理与静态资源优化；针对生产环境补充 X-Content-Type-Options 等安全响应头",
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

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
