// 个人信息与站点文案的唯一数据源（中英双语）：修改本文件即可更新全站对应内容
import type { Locale } from "./i18n";

type Profile = {
  name: string;
  headline: string;
  tagline: string;
  status: string;
  location: string;
  email: string;
  github: string;
  gitee: string;
  /** 简历 PDF（About / Contact 页提供下载） */
  resumePdf: string;
  jobIntents: string[];
  stats: { value: string; label: string }[];
  /** 首页技能概览（About 页有更完整的分组） */
  homeSkills: string[];
  intro: string[];
  skills: { group: string; items: string[] }[];
  experiences: { period: string; company: string; role: string; points: string[] }[];
  education: { period: string; school: string; major: string; note: string }[];
  certificates: string[];
  research: { title: string; description: string };
};

const zh: Profile = {
  name: "商子轩",
  headline: "全栈开发工程师",
  tagline:
    "主修 Java 后端（Spring Boot / MySQL），兼具 React / Next.js 前端与独立部署运维能力，关注工程质量与数据可靠性。",
  status: "2027 届本科应届生 · 正在求职",
  location: "湖北武汉",
  email: "1251717963@qq.com",
  github: "https://github.com/Shang1254",
  gitee: "https://gitee.com/shang-zixuan",
  resumePdf: "/resume/resume.pdf",
  jobIntents: ["Java 后端开发", "前端开发", "后端开发"],
  stats: [
    { value: "3 个", label: "完整上线项目" },
    { value: "2 段", label: "开发 / 测试实习" },
    { value: "80+", label: "校核古籍底本" },
  ],
  homeSkills: [
    "Java",
    "Spring Boot",
    "MyBatis",
    "MySQL",
    "Redis",
    "Next.js / React",
    "Vue 3",
    "FastAPI",
    "RAG / 向量检索",
    "Linux / Nginx",
    "阿里云 ECS",
  ],
  intro: [
    "我是商子轩，武汉晴川学院计算机科学与技术专业 2027 届本科生。从专科到本科一路保持系统化的学习习惯，打下了扎实的计算机基础。",
    "我有两段实习经历：在易途客先后做软件测试与 Java 开发，熟悉从需求、测试到上线运维的完整流程。课余独立完成三个全栈项目，全部走完设计、开发、测试、部署上线，其中「天机阁」已稳定运行在阿里云 ECS 上。",
    "我的特色是传统文化数字化的跨域积累：系统研习国学与易学两年，逐字校核古籍底本 80 余种，并把研究成果工程化为可溯源的线上平台——技术之外，这让我的作品多了一层内容深度。",
  ],
  skills: [
    {
      group: "后端开发",
      items: ["Java", "Spring Boot", "MyBatis", "多线程与并发", "MySQL 设计与优化"],
    },
    {
      group: "前端开发",
      items: ["JavaScript", "React / Next.js", "Vue 3", "HTML / CSS", "PWA"],
    },
    {
      group: "工程与运维",
      items: ["Linux", "Nginx", "systemd", "阿里云 ECS", "自动化测试与备份"],
    },
    {
      group: "AI 应用",
      items: ["RAG / 向量检索", "ChromaDB", "DeepSeek / 智谱 API", "扣子平台二次开发"],
    },
  ],
  experiences: [
    {
      period: "2025.3 – 2025.5",
      company: "北京易途客信息技术有限公司",
      role: "Java 开发实习生",
      points: [
        "参与出行服务系统日常运维，梳理代码逻辑、优化异常捕获机制，系统月度故障发生率降低 18%",
        "针对多线程并发路径计算延迟问题，落地线程池动态调优与任务分片，平均耗时 420ms → 160ms",
        "设计自动化备份脚本，实现 MySQL 每日增量备份与自动校验，数据恢复 RTO 4 小时 → 30 分钟",
      ],
    },
    {
      period: "2023.6 – 2023.11",
      company: "北京易途客信息技术有限公司",
      role: "软件测试实习生",
      points: [
        "设计功能 / 接口测试用例，输出测试文档 12 份、覆盖场景 300+，用例覆盖率 92%",
        "独立搭建 Linux 测试环境，完成 4 个版本迭代测试，提交有效缺陷 68 个、修复率 97%",
        "参与测试有效性评估，优化用例设计逻辑，后续版本线上缺陷率降低 15%",
      ],
    },
  ],
  education: [
    {
      period: "2025.9 – 2027.6",
      school: "武汉晴川学院",
      major: "计算机科学与技术 · 本科",
      note: "核心课程：网络工程安全、WEB 前端框架实训、数据结构与算法、编译技术、云计算（多门 GPA 3.5+）",
    },
    {
      period: "2022.9 – 2025.6",
      school: "武汉东湖学院",
      major: "计算机应用技术 · 专科",
      note: "核心课程：Java 程序设计、面向对象程序设计、C++、操作系统、算法设计与分析（多门 GPA 4.0/4.0）",
    },
  ],
  certificates: [
    "高阶 Java 软件开发工程师证书",
    "高阶 Office 证书",
    "全国大学生组织管理能力大赛初赛一等奖",
    "知心杯心理知识竞赛一等奖",
    "校级优秀团干部",
  ],
  research: {
    title: "国学 · 易学研究（特色背景）",
    description:
      "系统研习国学经典与易学应用两年，坚持「以典籍为凭、以底本为证」，逐字校核《三命通会》《渊海子平》《协纪辨方书》等古籍底本 80 余种；研究成果已工程化为线上项目「天机阁」（见项目页）。",
  },
};

const en: Profile = {
  name: "Shang Zixuan",
  headline: "Full-Stack Developer",
  tagline:
    "Java backend (Spring Boot / MySQL) plus React / Next.js frontend and hands-on deployment — focused on engineering quality and data reliability.",
  status: "Class of 2027 · Open to opportunities",
  location: "Wuhan, China",
  email: "1251717963@qq.com",
  github: "https://github.com/Shang1254",
  gitee: "https://gitee.com/shang-zixuan",
  resumePdf: "/resume/resume.pdf",
  jobIntents: ["Java Backend", "Frontend Development", "Backend Development"],
  stats: [
    { value: "3", label: "Shipped Projects" },
    { value: "2", label: "Dev / QA Internships" },
    { value: "80+", label: "Classics Cross-Checked" },
  ],
  homeSkills: [
    "Java",
    "Spring Boot",
    "MyBatis",
    "MySQL",
    "Redis",
    "Next.js / React",
    "Vue 3",
    "FastAPI",
    "RAG / Vector Search",
    "Linux / Nginx",
    "Alibaba Cloud ECS",
  ],
  intro: [
    "I'm Shang Zixuan, a Class-of-2027 Computer Science undergraduate at Wuhan Qingchuan College. From my associate degree through my bachelor's, I've kept a systematic study habit that built a solid CS foundation.",
    "I've done two internships at Yituke — software testing first, then Java development — so I know the full loop from requirements and testing to release and operations. On the side, I shipped three full-stack projects end to end; Tianjige runs steadily on an Alibaba Cloud ECS today.",
    "What sets me apart is digital humanities: two years of systematic I-Ching studies, 80+ classical texts cross-checked word by word, and a traceable online platform engineered from that research — my work carries content depth beyond code.",
  ],
  skills: [
    {
      group: "Backend",
      items: ["Java", "Spring Boot", "MyBatis", "Concurrency & Multithreading", "MySQL Design & Tuning"],
    },
    {
      group: "Frontend",
      items: ["JavaScript", "React / Next.js", "Vue 3", "HTML / CSS", "PWA"],
    },
    {
      group: "Engineering & DevOps",
      items: ["Linux", "Nginx", "systemd", "Alibaba Cloud ECS", "Automated Testing & Backup"],
    },
    {
      group: "AI Applications",
      items: ["RAG / Vector Search", "ChromaDB", "DeepSeek / Zhipu APIs", "Coze Platform Customization"],
    },
  ],
  experiences: [
    {
      period: "Mar – May 2025",
      company: "Beijing Yituke Information Technology",
      role: "Java Development Intern",
      points: [
        "Helped operate a ride-service system: streamlined code logic and hardened exception handling, cutting the monthly failure rate by 18%",
        "Tackled multi-threaded path-computation latency with dynamic thread-pool tuning and task splitting, reducing average compute time from 420ms to 160ms",
        "Designed automated MySQL backups with daily increments and self-checks, shrinking the recovery RTO from 4 hours to 30 minutes",
      ],
    },
    {
      period: "Jun – Nov 2023",
      company: "Beijing Yituke Information Technology",
      role: "Software Testing Intern",
      points: [
        "Designed functional / API test cases: 12 test documents covering 300+ scenarios with 92% case coverage",
        "Set up the Linux test environment solo; completed 4 release cycles, filing 68 valid bugs with a 97% fix rate",
        "Analyzed missed defects and refined case design, lowering the post-release defect rate by 15%",
      ],
    },
  ],
  education: [
    {
      period: "2025.9 – 2027.6",
      school: "Wuhan Qingchuan College",
      major: "Computer Science and Technology · B.Eng.",
      note: "Key courses: Network Engineering & Security, Web Front-End Framework Lab, Data Structures & Algorithms, Compilers, Cloud Computing (multiple courses GPA 3.5+)",
    },
    {
      period: "2022.9 – 2025.6",
      school: "Wuhan East Lake College",
      major: "Computer Application Technology · Associate Degree",
      note: "Key courses: Java Programming, Object-Oriented Programming, C++, Operating Systems, Algorithm Design & Analysis (multiple courses GPA 4.0/4.0)",
    },
  ],
  certificates: [
    "Advanced Java Software Engineer Certificate",
    "Advanced Office Certificate",
    "National College Organizational Management Competition — Preliminary First Prize",
    "Zhixin Psychology Knowledge Competition — First Prize",
    "Outstanding League Branch Secretary (school level)",
  ],
  research: {
    title: "Chinese Classics & I-Ching Research (Distinctive Background)",
    description:
      "Two years of systematic study of Chinese classics and applied I-Ching, cross-checking 80+ original classical texts (Sanming Tonghui, Yuanhai Ziping, Xieji Bianfang Shu and more) word by word. That research became the live project Tianjige (see Projects) — beyond engineering, it gives my work real content depth.",
  },
};

export const profiles: Record<Locale, Profile> = { zh, en };
