// 项目数据：唯一数据源（中英双语）。新增项目时在 zh 与 en 数组各追加一条
// 记录（id 保持一致），详情页 /projects/[id] 与 /en/projects/[id] 自动生成
import type { Locale } from "./i18n";

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
  /** 详情页展示的应用截图（真实截图优先） */
  screenshots?: string[];
  image: string;
  repoUrl?: string;
  repoLabel?: string;
  demoUrl?: string;
  demoLabel?: string;
  featured?: boolean;
};

export const projects: Record<Locale, Project[]> = {
  zh: [
    {
      id: "chongwen-pay",
      title: "崇文兰庭便民缴费通",
      year: "2026.11",
      summary:
        "真实物业客户项目：面向老旧小区的微信缴费小程序 + Node.js 后端 + 物业网页后台，三费合并支付、电子凭证防伪码、对账导出，2 栋试点覆盖全小区 1200 户。",
      tags: ["微信小程序", "Node.js", "微信支付", "压力测试"],
      highlights: [
        "2 号楼试点 → 全小区 1200 户覆盖的真实落地项目",
        "微信支付直连物业商户号，回调 / 退款 / 对账三件套",
        "缴费凭证带防伪码，操作留痕哈希链防篡改",
      ],
      responsibilities: [
        "居民端：微信登录 → 绑定房号 → 微信支付 → 电子缴费凭证（带防伪码）+ 物业报修 + 订阅消息提醒（用户授权）",
        "物业端：Excel / CSV 批量导入欠费账单、收款记录（可退款）、对账文件导出、一键催缴、报修处理与用量分析",
        "合规设计：支付直连物业企业商户号（无资金池、无二清），个人信息加密存储，留痕哈希链防篡改，账单口径可追溯",
        "适老化：简约蓝白物业风、大字体、高对比度、无广告入口，缴费全程不超过 3 步",
        "质量保障：产出压力测试报告与上架审核指引，演示模式全链路可通",
      ],
      image: "/images/project-ivy-pay.svg",
      repoUrl: "https://github.com/Shang1254/chongwen-pay",
      repoLabel: "GitHub",
      featured: false,
    },
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
      image: "/images/project-tianjige.png",
      demoUrl: "http://47.115.220.217",
      demoLabel: "在线访问",
      featured: true,
    },
    {
      id: "zhiyun",
      title: "知云同职 · 公益求职助手",
      year: "2026.11",
      summary:
        "民办生公益求职助手：岗位库、虚假岗过滤引擎、简历 PDF 生成与 13 类防骗检测，安卓 APP + Web 端，GitHub Pages 在线可用，永久免费无广告。",
      tags: ["Node.js / Express", "SQLite", "GitHub Pages", "Android WebView"],
      highlights: [
        "每日采集人社部公共招聘网 + 7 校就业联盟真实岗位",
        "13 类虚假岗可解释评分引擎（≥60 分判虚假）",
        "简历数据本地 AES-GCM-256 加密，不上传服务器",
      ],
      responsibilities: [
        "岗位采集：每日 0 点礼貌采集人社部中国公共招聘网与湖北民办高校就业联盟（晴川学院等 7 校）真实岗位，自动过虚假岗引擎并标注来源与投递链接",
        "虚假岗过滤：可解释规则评分引擎（刷单返款、培训贷、入职收费、境外高薪等），附「判定理由」防骗教育视图",
        "简历生成：民办生画像模板、实践项目置顶、亮点自动生成、A4 预览与一键导出 PDF",
        "隐私设计：简历与画像数据本地加密存储（AES-GCM-256 · PBKDF2 25 万次迭代），岗位推荐仅使用方向 / 城市 / 学历三个匿名匹配字段",
        "公益拼车：发布 / 筛选 / 举报 / 删除令牌，联系方式打码，过期自动清理",
      ],
      image: "/images/project-zhiyun.svg",
      screenshots: ["/images/zhiyun-fraud-1.png", "/images/zhiyun-fraud-2.png"],
      demoUrl: "https://shang1254.github.io/zhiyun-tongzhi/",
      demoLabel: "在线使用",
      repoUrl: "https://github.com/Shang1254/zhiyun-tongzhi",
      repoLabel: "GitHub",
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
      repoUrl: "https://github.com/Shang1254/smart-class-management-system",
      repoLabel: "GitHub",
      featured: true,
    },
    {
      id: "class-local",
      title: "晴川班级管理系统 · 本地存储版",
      year: "2026.11",
      summary:
        "毕业设计作品：纯前端 HTML / CSS / JavaScript 实现，真实教务数据导入（全校 75 名学生、2316 条成绩记录），三级角色权限，双击 index.html 即用、零部署成本。",
      tags: ["HTML / CSS / JavaScript", "localStorage", "图表可视化", "三级权限"],
      highlights: [
        "真实教务数据：75 名学生、6 个班级、2316 条成绩记录",
        "成绩分布 / 科目平均分 / 班级对比可视化与学业预警",
        "请假审批流、考勤月报、操作审计日志与数据备份恢复",
      ],
      responsibilities: [
        "架构取舍：纯前端 + localStorage 存储，零后端零部署成本，任何教室电脑双击即用；数据支持备份恢复与操作审计",
        "权限模型：管理员 / 教师 / 学生三级角色隔离，教师数据严格限定任教班级，学生只读本人数据，敏感信息（全体成绩、家长电话）分级可见",
        "业务建模：按真实教务口径覆盖培养层次 × 招生类别 × 学习形式多类型学情（本科 / 专科、统招 / 专升本 / 自考助学）",
        "可视化分析：分数段分布、各科目平均分、班级对比图表，按学年学期统计，异常成绩波动自动浮现",
      ],
      image: "/images/class-local-dashboard.png",
      screenshots: [
        "/images/class-local-leave.png",
        "/images/class-local-students.png",
        "/images/class-local-grades.png",
        "/images/class-local-analysis.png",
        "/images/class-local-attendance.png",
      ],
      repoUrl: "https://github.com/Shang1254/class-management-local",
      repoLabel: "GitHub",
      featured: false,
    },
    {
      id: "lumiere-mall",
      title: "琉光美妆 · 微信小程序商城",
      year: "2026.11",
      summary:
        "美妆电商微信小程序：商品流、规格选择、订单与评价闭环，商家后台基于云函数鉴权，前端无法伪造写操作，体验版开箱即跑。",
      tags: ["微信小程序", "微信云开发", "云函数", "Node.js"],
      highlights: [
        "商家后台权限全部在云函数内判断，前端不可伪造写操作",
        "商品 / 订单 / 评价全链路闭环，含好评率与分页列表",
        "admins 集合 openid 鉴权，owner / editor 双角色模型",
      ],
      responsibilities: [
        "前端：首页双列商品流、商品详情（轮播 / 规格 / 评价区）、确认订单与模拟支付、我的订单按状态流转",
        "评价体系：星级评分 + 自定义昵称 + 全部评价页（平均分、好评率、时间倒序分页）",
        "商家后台：商品上新 / 编辑 / 上下架 / 软删除，所有写操作走 adminProduct 云函数完成鉴权，products 集合「所有人可读、仅创建者可写」",
        "数据建模：商品库存 / 上下架 / 软删除字段向下兼容旧数据，避免误判",
      ],
      image: "/images/project-lumiere.svg",
      repoUrl: "https://github.com/Shang1254/lumiere-mall",
      repoLabel: "GitHub",
      featured: false,
    },
  ],
  en: [
    {
      id: "chongwen-pay",
      title: "Chongwen Community Payment Mini-Program",
      year: "2026.11",
      summary:
        "A real client project for an aging residential community: WeChat mini-program + Node.js backend + property-management web console. Consolidated utility payments, anti-counterfeit receipts and reconciliation exports — piloted in Building 2, now covering all 1,200 households.",
      tags: ["WeChat Mini Program", "Node.js", "WeChat Pay", "Load Testing"],
      highlights: [
        "Real-world rollout: Building 2 pilot → all 1,200 households",
        "WeChat Pay wired directly to the property's merchant account, with callback / refund / reconciliation set",
        "Payment receipts carry anti-counterfeit codes; audit trail protected by a hash chain",
      ],
      responsibilities: [
        "Resident side: WeChat login → bind unit number → pay → e-receipt with anti-counterfeit code, plus repair requests and subscription-message reminders (opt-in)",
        "Property side: bulk import of arrears via Excel / CSV, payment records with refunds, reconciliation exports, one-click reminders, repair handling and usage analytics",
        "Compliance: payments go straight to the property company's merchant account (no fund pool, no second-round settlement), encrypted personal data, hash-chained audit trail, traceable billing source",
        "Elder-friendly UI: minimal blue-and-white property style, large fonts, high contrast, no ads — payment in at most 3 steps",
        "Quality: produced a load-testing report and review-guideline checklist; demo mode runs the full flow out of the box",
      ],
      image: "/images/project-ivy-pay.svg",
      repoUrl: "https://github.com/Shang1254/chongwen-pay",
      repoLabel: "GitHub",
      featured: false,
    },
    {
      id: "tianjige",
      title: "Tianjige · Chinese Metaphysics Platform",
      year: "2026.10",
      period: "Sep – Oct 2026",
      summary:
        "A source-traceable digital platform for traditional Chinese metaphysics: Ba-Zi charting, Zhouyi divination, almanac, temple directory and a classics quotation library — every statement traces back to verified classical texts. Deployed and running in production.",
      tags: ["JavaScript SPA", "Python (stdlib)", "RESTful API", "Alibaba Cloud ECS", "systemd"],
      highlights: [
        "131/131 classical quotations verified word-for-word against source texts",
        "5 automated test suites, 700+ assertions all green",
        "Cleaned 42,440 records from open data of China's National Religious Affairs Administration",
      ],
      responsibilities: [
        "Verification pipeline: built a fetch → archive → strict-contiguous-substring quotation pipeline; all 131/131 quotes matched source texts exactly (traditional/simplified, variant characters and punctuation normalized)",
        "Quality engineering: 5 one-click automated suites (700+ assertions green) covering algorithm correctness, quote verification, anti-hallucination discipline scans and full-site smoke tests — every assertion must be able to fail",
        "Backend & deployment: a zero-dependency key-value store built on the Python standard library (atomic writes, key whitelist, body size cap, header auth) on Alibaba Cloud ECS (Ubuntu 22.04), with systemd guarding the static site",
        "Sync layer: same-origin cloud sync with multi-device union merge, silent offline fallback and localStorage double-write",
        "Self-drawn decorations: 7 categories of inline-SVG motifs (Taiji, Bagua, Luoshu, Five Elements, seals) replacing web assets — zero external requests, zero copyright risk, one-click disable, guarded by call-site contract tests",
        "Data scale: 133 quotations (131 verified), a 156-entry deity birthday table, 96 temples, and 42,440 cleaned records from national open data",
      ],
      image: "/images/project-tianjige.png",
      demoUrl: "http://47.115.220.217",
      demoLabel: "Live Site",
      featured: true,
    },
    {
      id: "zhiyun",
      title: "Zhiyun Tongzhi · Job-Hunting Assistant",
      year: "2026.11",
      summary:
        "A free, ad-free job-hunting assistant for private-college students: job board, fake-job filtering engine, résumé PDF generation and 13-category scam detection. Android app + web client, live on GitHub Pages.",
      tags: ["Node.js / Express", "SQLite", "GitHub Pages", "Android WebView"],
      highlights: [
        "Daily collection of real postings from the national job board + a 7-college alliance",
        "Explainable 13-category fake-job scoring engine (≥60 points = fake)",
        "Résumé data encrypted locally with AES-GCM-256 — never uploaded",
      ],
      responsibilities: [
        "Job collection: politely crawls China's public recruitment portal and a 7-college Hubei alliance daily at midnight, auto-filtering through the fake-job engine with source attribution and application links",
        "Fake-job filtering: an explainable rule-scoring engine (rebate scams, training loans, entry fees, overseas high pay, etc.) with a judgment-reason anti-fraud education view",
        "Résumé builder: private-college student templates, project-first layout, auto-generated highlights, A4 preview and one-click PDF export",
        "Privacy: résumé and profile data encrypted locally (AES-GCM-256 · PBKDF2 250k iterations); recommendations use only three anonymous fields — direction, city, degree",
        "Community carpool: post / filter / report / delete-token flows, masked contact info, auto-expiry",
      ],
      image: "/images/project-zhiyun.svg",
      screenshots: ["/images/zhiyun-fraud-1.png", "/images/zhiyun-fraud-2.png"],
      demoUrl: "https://shang1254.github.io/zhiyun-tongzhi/",
      demoLabel: "Live Site",
      repoUrl: "https://github.com/Shang1254/zhiyun-tongzhi",
      repoLabel: "GitHub",
      featured: true,
    },
    {
      id: "aog-qa",
      title: "AOG RAG-Powered Q&A System",
      year: "2026.07",
      period: "Apr – Jul 2026",
      summary:
        "A RAG-based intelligent Q&A system with multi-knowledge-base management, vector retrieval, multi-turn chat and streaming output — plus PWA offline access and mobile adaptation.",
      tags: ["FastAPI", "Vue 3", "ChromaDB", "MySQL", "Redis"],
      highlights: [
        "Hybrid retrieval: BM25 + Reranker re-ranking",
        "Auto-routes each question to the best-suited AI model",
        "Layered security: API rate limiting, login lockout and more",
      ],
      responsibilities: [
        "Architecture: designed and built the full stack solo — FastAPI RESTful API on the backend, ChromaDB vector search combined with BM25 + Reranker for hybrid retrieval and re-ranking",
        "Frontend: Vue 3 + Vite with multi-turn chat, streaming output, PWA offline support and mobile adaptation",
        "Performance & features: Redis caching to relieve database load; a model-routing engine that picks the best AI model per question type; PDF / Word / Excel parsing with cloud-storage integration",
        "Deployment & security: uvicorn backend; CORS policy, SQL-injection protection, upload validation, API rate limiting and login lockout; scheduled database backups synced to cloud storage",
      ],
      image: "/images/project-aog.svg",
      repoUrl: "https://gitee.com/shang-zixuan/ragflow",
      repoLabel: "Gitee",
      featured: true,
    },
    {
      id: "smart-class",
      title: "Smart Class Management Platform",
      year: "2026.06",
      period: "Jun 2026",
      summary:
        "A management platform for college advisors and students: class info, homework stats, dashboards and real-time notifications — covering everything from permission design to deployment hardening.",
      tags: ["Next.js", "Spring Boot", "MyBatis", "Supabase", "WebSocket"],
      highlights: [
        "System-wide real-time messaging over WebSocket",
        "Redis caching for high-concurrency statistics endpoints",
        "Student / advisor data isolation + security-header hardening",
      ],
      responsibilities: [
        "Architecture: built the front-end pages and back-end API solo; designed the permission module with an auth interceptor isolating student vs. advisor data",
        "Realtime & performance: WebSocket push for system messages; Redis caching to optimize high-concurrency statistics",
        "Deployment & security: Nginx reverse proxy with static-asset optimization; added X-Content-Type-Options and other security headers in production",
      ],
      image: "/images/project-class.svg",
      repoUrl: "https://github.com/Shang1254/smart-class-management-system",
      repoLabel: "GitHub",
      featured: true,
    },
    {
      id: "class-local",
      title: "Class Management System · Local-Storage Edition",
      year: "2026.11",
      summary:
        "My graduation project: a pure HTML / CSS / JavaScript system loaded with real academic data (75 students, 2,316 grade records across 6 classes), three-level role permissions — double-click index.html and it runs, zero deployment cost.",
      tags: ["HTML / CSS / JavaScript", "localStorage", "Data Visualization", "Role Permissions"],
      highlights: [
        "Real academic data: 75 students, 6 classes, 2,316 grade records",
        "Grade distribution / subject averages / class comparison charts with early-warning",
        "Leave approval flow, attendance reports, audit logs and data backup / restore",
      ],
      responsibilities: [
        "Architecture trade-off: pure front-end + localStorage — no backend, zero deployment cost, runs on any classroom PC by double-click; includes backup / restore and audit logging",
        "Permission model: admin / teacher / student isolation; teachers see only their own classes, students read only their own records, sensitive data (all grades, parent phone numbers) tiered by role",
        "Domain modeling: real academic-record semantics covering level × admission type × study mode (undergraduate / associate, regular / upgrade / self-study programs)",
        "Analytics: score-band distribution, per-subject averages and class comparison charts, semester-based statistics with automatic anomaly surfacing",
      ],
      image: "/images/class-local-dashboard.png",
      screenshots: [
        "/images/class-local-leave.png",
        "/images/class-local-students.png",
        "/images/class-local-grades.png",
        "/images/class-local-analysis.png",
        "/images/class-local-attendance.png",
      ],
      repoUrl: "https://github.com/Shang1254/class-management-local",
      repoLabel: "GitHub",
      featured: false,
    },
    {
      id: "lumiere-mall",
      title: "Lumiere Beauty · WeChat Mini-Program Store",
      year: "2026.11",
      summary:
        "A beauty e-commerce WeChat mini-program: product feed, specs, orders and a full review loop — with a cloud-function-authorized admin console that the front end cannot spoof. Runs out of the box in trial mode.",
      tags: ["WeChat Mini Program", "WeChat Cloud Base", "Cloud Functions", "Node.js"],
      highlights: [
        "Admin permissions enforced inside cloud functions — front end cannot forge writes",
        "Full product / order / review loop with ratings and paginated lists",
        "openid-based admins collection with owner / editor roles",
      ],
      responsibilities: [
        "Frontend: two-column product feed, product detail (carousel / specs / reviews), checkout with simulated payment, order status flows",
        "Review system: star ratings + custom nicknames + an all-reviews page (average score, positive rate, paginated)",
        "Admin console: create / edit / shelve / soft-delete products — every write goes through the adminProduct cloud function for authorization; the products collection is public-read, creator-only-write",
        "Data modeling: stock / on-sale / soft-delete fields with backward compatibility for legacy records",
      ],
      image: "/images/project-lumiere.svg",
      repoUrl: "https://github.com/Shang1254/lumiere-mall",
      repoLabel: "GitHub",
      featured: false,
    },
  ],
};

// 首页精选项目：按 featured 标记取前 count 个
export function featuredProjects(locale: Locale, count = 3): Project[] {
  return projects[locale].filter((p) => p.featured).slice(0, count);
}

export function getProjectById(locale: Locale, id: string): Project | undefined {
  return projects[locale].find((p) => p.id === id);
}

export function getProjects(locale: Locale): Project[] {
  return projects[locale];
}
