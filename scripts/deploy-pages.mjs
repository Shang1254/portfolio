// 一键构建静态导出并同步到 GitHub Pages 仓库（shang1254.github.io）
// 用法：npm run deploy:pages
// 目录约定：Pages 仓库默认位于本项目的上一级 shang1254.github.io/，
// 可用环境变量 PAGES_REPO_DIR 覆盖
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { resolve } from "node:path";

const PAGES_REPO_DIR =
  process.env.PAGES_REPO_DIR ?? resolve(homedir(), "shang1254.github.io");
const SITE_URL = "https://shang1254.github.io";
const REMOTE = "https://github.com/Shang1254/shang1254.github.io.git";

function run(cmd, args, opts = {}) {
  // Windows 下 shell:true 会把整条命令拼成字符串，含空格的参数必须手动加引号
  const useShell = process.platform === "win32";
  const finalArgs = useShell
    ? args.map((a) => (/\s/.test(a) ? `"${a}"` : a))
    : args;
  const r = spawnSync(cmd, finalArgs, {
    stdio: "inherit",
    shell: useShell,
    ...opts,
  });
  if (r.status !== 0) {
    console.error(`✗ 命令失败：${cmd} ${finalArgs.join(" ")}`);
    process.exit(r.status ?? 1);
  }
}

// 1) 静态导出构建（不影响 Vercel 的常规构建）
console.log("▶ 静态导出构建（out/）...");
run("npx", ["next", "build"], {
  env: { ...process.env, STATIC_EXPORT: "1", NEXT_PUBLIC_SITE_URL: SITE_URL },
});

// 2) 准备 Pages 仓库目录
if (!existsSync(PAGES_REPO_DIR)) {
  mkdirSync(PAGES_REPO_DIR, { recursive: true });
  run("git", ["-C", PAGES_REPO_DIR, "init", "-b", "main"]);
}
if (!existsSync(`${PAGES_REPO_DIR}/.git`)) {
  console.error(`✗ ${PAGES_REPO_DIR} 不是 git 仓库`);
  process.exit(1);
}

// 3) 清空旧内容（保留 .git）再同步 out/
const outDir = resolve(process.cwd(), "out");
if (!existsSync(outDir)) {
  console.error("✗ 未找到 out/ 目录");
  process.exit(1);
}
for (const entry of readdirSync(PAGES_REPO_DIR)) {
  if (entry !== ".git") {
    rmSync(`${PAGES_REPO_DIR}/${entry}`, { recursive: true, force: true });
  }
}
if (process.platform === "win32") {
  // cpSync 在部分 Windows 环境会报 EIO，改用 robocopy 镜像同步（/XD 排除 .git）
  const rc = spawnSync("robocopy", [
    outDir,
    PAGES_REPO_DIR,
    "/MIR",
    "/XD",
    ".git",
    "/NFL",
    "/NDL",
    "/NJH",
    "/NJS",
  ]);
  if (rc.status === null || rc.status > 7) {
    console.error(`✗ robocopy 失败（code ${rc.status}）`);
    process.exit(1);
  }
} else {
  cpSync(outDir, PAGES_REPO_DIR, { recursive: true });
}
// GitHub Pages 默认以 Jekyll 构建，会忽略 _next 目录；.nojekyll 声明跳过 Jekyll
writeFileSync(`${PAGES_REPO_DIR}/.nojekyll`, "");

// 4) 提交并推送（远程不存在则自动添加）
const hasOrigin = spawnSync("git", ["-C", PAGES_REPO_DIR, "remote", "get-url", "origin"], {
  shell: process.platform === "win32",
});
if (hasOrigin.status !== 0) {
  run("git", ["-C", PAGES_REPO_DIR, "remote", "add", "origin", REMOTE]);
}
run("git", ["-C", PAGES_REPO_DIR, "add", "-A"]);
run("git", ["-C", PAGES_REPO_DIR, "commit", "-m", "deploy: 同步作品集静态导出"], {
  cwd: PAGES_REPO_DIR,
});
run("git", ["-C", PAGES_REPO_DIR, "push", "-u", "origin", "main"]);
console.log(`\n✓ 已推送。GitHub Pages 生效通常需 1~2 分钟：${SITE_URL}`);
