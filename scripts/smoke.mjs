// 冒烟测试：对运行中的站点做路由状态码与关键内容断言（零第三方依赖）
// 用法：先 npm run build && npm run start，再执行 npm run smoke
// 可通过 SMOKE_BASE_URL 覆盖目标地址
const BASE = process.env.SMOKE_BASE_URL ?? "http://localhost:3000";

const checks = [
  { path: "/", expect: ["商子轩", "正在求职", "精选项目", "lang=\"zh-CN\""] },
  { path: "/projects", expect: ["项目", "天机阁", "AOG 智能问答系统", "智能班级管理系统"] },
  { path: "/projects/tianjige", expect: ["个人职责", "成果亮点", "内容核验流水线"] },
  { path: "/projects/aog-qa", expect: ["AOG 智能问答系统", "BM25 + Reranker"] },
  { path: "/projects/smart-class", expect: ["智能班级管理系统", "WebSocket"] },
  { path: "/about", expect: ["关于我", "实习经历", "教育经历", "国学 · 易学研究"] },
  { path: "/contact", expect: ["联系我", "1251717963@qq.com", "gitee.com/shang-zixuan"] },
  { path: "/projects/not-exist", status: 404, expect: ["404"] },
  { path: "/icon.svg", raw: true },
  { path: "/sitemap.xml", raw: true, expect: [] },
  { path: "/robots.txt", raw: true, expect: [] },
];

let failed = 0;
for (const { path, expect = [], status = 200, raw = false } of checks) {
  const res = await fetch(BASE + path);
  const body = raw ? "" : await res.text();
  const statusOk = res.status === status;
  const missing = expect.filter((s) => !body.includes(s));
  const contentOk = missing.length === 0;
  const ok = statusOk && contentOk;
  const detail = [
    statusOk ? "" : `期望状态码 ${status}`,
    contentOk ? "" : `缺少内容：${missing.join("、")}`,
  ]
    .filter(Boolean)
    .join("，");
  console.log(`${ok ? "PASS" : "FAIL"} GET ${path} -> ${res.status}${detail ? `（${detail}）` : ""}`);
  if (!ok) failed++;
}

console.log(
  failed === 0
    ? `\n全部 ${checks.length} 项冒烟检查通过 [PASS]`
    : `\n${failed}/${checks.length} 项冒烟检查失败 [FAIL]`,
);
process.exit(failed === 0 ? 0 : 1);
