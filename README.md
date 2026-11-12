# 商子轩 · 个人作品集

基于 **Next.js (App Router) + TypeScript + Tailwind CSS v4** 的个人作品集网站：移动端优先、语义化 HTML、基础 SEO metadata、深浅色主题（零第三方依赖）。

## 本地运行

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 生产构建验证
```

## 修改内容（无需动页面代码）

| 想改什么 | 改哪里 |
|---|---|
| 个人信息、技能、经历、证书 | `data/profile.ts` |
| 项目数据（卡片会自动渲染） | `data/projects.ts` |
| 项目封面 / 头像占位图 | `public/images/*.svg`，替换为真实截图后同名覆盖即可 |
| 站点标题、描述、Open Graph | `app/layout.tsx` 的 `metadata` |
| 主题色与深浅色配色 | `app/globals.css` 的 CSS 变量 |

## 目录结构

```
app/            # 页面（首页 / projects / about / contact）+ 根布局 + 全局样式
components/     # Header、Footer、ThemeToggle、ProjectCard 等复用组件
data/           # 全部内容数据（profile.ts、projects.ts）
public/images/  # 图片资源
```

## 部署（Vercel）

1. 把仓库推送到 GitHub / Gitee；
2. 在 Vercel 中导入该仓库，框架预设会自动识别 Next.js，直接部署；
3. 若绑定自定义域名，设置环境变量 `NEXT_PUBLIC_SITE_URL` 为最终域名（用于 SEO 的 metadataBase 与 Open Graph 链接）。

## 技术说明

- 深浅色主题：`<html class="dark">` + 内联脚本首帧写入（防闪烁），`ThemeToggle` 切换并写入 `localStorage`，默认跟随系统偏好；未使用 next-themes，保持零额外依赖。
- 深色 variant：Tailwind v4 的 `@custom-variant dark`，见 `app/globals.css`。
- 图片均为本地 SVG 占位图，替换真实截图时建议使用 1200×750 比例。
