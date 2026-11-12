# 商子轩 · 个人作品集

基于 **Next.js (App Router) + TypeScript + Tailwind CSS v4** 的个人作品集网站：移动端优先、语义化 HTML、基础 SEO（sitemap / robots / Open Graph）、深浅色主题（零第三方依赖）。

## 本地运行

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 生产构建
npm run smoke      # 冒烟测试（需先 npm run build && npm run start）
```

## 修改内容（无需动页面代码）

| 想改什么 | 改哪里 |
|---|---|
| 个人信息、技能、经历、证书 | `data/profile.ts` |
| 项目数据（列表卡片 + 详情页自动渲染） | `data/projects.ts` |
| 项目封面 / 头像占位图 | `public/images/*.svg`，替换为真实截图后同名覆盖即可 |
| 站点标题、描述、Open Graph | `app/layout.tsx` 的 `metadata` |
| 主题色与深浅色配色 | `app/globals.css` 的 CSS 变量 |
| 部署域名 | 环境变量 `NEXT_PUBLIC_SITE_URL`（`data/site.ts` 兜底） |

## 目录结构

```
app/            # 页面：首页 / projects / projects/[id] / about / contact + 404 + sitemap/robots
components/     # Header、Footer、ThemeToggle、ProjectCard、ScrollTop 等复用组件
data/           # 全部内容数据（profile.ts、projects.ts、site.ts）
public/images/  # 图片资源（og.png 为分享卡片图）
scripts/        # smoke.mjs 冒烟测试脚本
```

## 测试（冒烟）

`scripts/smoke.mjs` 对运行中的站点断言 11 项：各页面状态码、页面关键内容、详情页、404 行为、sitemap/robots 可达。

```bash
npm run build && npm run start   # 终端 1
npm run smoke                    # 终端 2，或 SMOKE_BASE_URL=<地址> npm run smoke
```

## 部署（双端）

### Vercel（主站）

```bash
vercel link --project portfolio && vercel --prod
```

生产环境变量 `NEXT_PUBLIC_SITE_URL=https://portfolio-pink-kappa-77.vercel.app`（已在 Vercel 控制台设置）。
注意：大陆裸网络访问 `*.vercel.app` 不稳定，建议绑定自定义域名或使用下方 Pages 备份。

### GitHub Pages 备份（大陆可达性较好）

```bash
npm run deploy:pages
```

- Pages 仓库：`https://github.com/Shang1254/shang1254.github.io`（本地默认位于 `~/shang1254.github.io`，可用 `PAGES_REPO_DIR` 覆盖）
- 静态导出构建条件开启（`STATIC_EXPORT=1`），不影响 Vercel 构建
- 已内置 `.nojekyll`（防止 Jekyll 忽略 `_next/`）；Windows 下用 robocopy 同步
- 推送若超时：`git config --global http.https://github.com.proxy http://127.0.0.1:7897`（按本机代理端口调整）

## 技术说明

- 深浅色主题：`<html class="dark">` + 内联脚本首帧写入（防闪烁），`ThemeToggle` 切换并写入 `localStorage`，默认跟随系统偏好；未使用 next-themes，保持零额外依赖。
- 深色 variant：Tailwind v4 的 `@custom-variant dark`，见 `app/globals.css`。
- 项目详情页：`app/projects/[id]/page.tsx` 由 `data/projects.ts` 静态生成（`generateStaticParams`），新增项目数据即自动多出一个详情页。
- 图片均为本地 SVG 占位图，替换真实截图时建议使用 1200×750 比例；`public/og.png` 为 1200×630 分享卡片图。
