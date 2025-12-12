# 路屿个人网站 - 系统架构文档

<meta>
  <document-id>uiluyu-sys</document-id>
  <version>1.0.0</version>
  <project>路屿个人网站</project>
  <type>系统架构</type>
  <created>2024-12-12</created>
  <depends>real.md, cog.md, pr.spec.md, userstory.spec.md</depends>
</meta>

---

## 1. 架构概述

**模式：** 分层架构 + 静态站点生成（SSG）
**部署：** cnb.cool Pages（静态托管）
**特点：** 纯静态网站，无后端服务，内容通过 Markdown 管理

### 1.1 技术栈

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| 全站框架 | Next.js 14+ | App Router，SSG 模式 |
| CSS 框架 | Tailwind CSS | 原子化 CSS，响应式设计 |
| UI 组件 | shadcn/ui | 可定制的组件库 |
| 包管理 | bun | 快速的包管理和运行时 |
| 内容管理 | Markdown + Frontmatter | 本地文件系统 |
| 代码托管 | cnb.cool | Git 仓库托管 |

### 1.2 架构特点

- **纯静态生成**：构建时生成所有页面，无需运行时服务器
- **内容即代码**：文章以 Markdown 文件形式存储在仓库中
- **零数据库**：不使用数据库，数据在构建时从文件系统读取
- **边缘部署**：静态文件通过 CDN 分发，全球快速访问

---

## 2. 系统图

```
┌─────────────────────────────────────────────────────────────┐
│                      用户浏览器                              │
│                   (读者 / 作者)                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    cnb.cool Pages                           │
│                   (静态文件托管)                             │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   首页      │  │  文章详情   │  │  标签/归档   │         │
│  │  index.html │  │ [slug].html │  │  tags/*.html │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │ bun run build
                              │
┌─────────────────────────────────────────────────────────────┐
│                    Next.js 构建系统                          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   表现层                             │   │
│  │  React 组件 + Tailwind CSS + shadcn/ui              │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   应用层                             │   │
│  │  页面路由 + 布局组件 + 静态生成函数                   │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   数据层                             │   │
│  │  Markdown 解析 + Frontmatter 提取 + 内容聚合         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │
┌─────────────────────────────────────────────────────────────┐
│                    内容文件系统                              │
├─────────────────────────────────────────────────────────────┤
│  content/                                                   │
│  └── essays/                                                │
│      ├── narrative-and-self.md                              │
│      ├── framework-thinking.md                              │
│      └── ...                                                │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. 子系统

### 3.1 内容管理子系统

**职责：** 管理和解析 Markdown 文章内容

**组件：**
- `content-loader`：从文件系统读取 Markdown 文件
- `frontmatter-parser`：解析文章元数据（title, date, tags, excerpt）
- `markdown-renderer`：将 Markdown 转换为 HTML
- `syntax-highlighter`：代码块语法高亮

**接口：**
- 输入：Markdown 文件路径
- 输出：结构化的文章数据（Essay 对象）

**依赖关系：**
- 依赖于：文件系统
- 被使用于：页面生成子系统

---

### 3.2 页面生成子系统

**职责：** 生成静态 HTML 页面

**组件：**
- `home-page`：首页，显示最新文章列表
- `essay-page`：文章详情页，渲染完整内容
- `tag-page`：标签页，按标签聚合文章
- `archive-page`：归档页，按时间分组文章
- `about-page`：关于页，作者介绍

**接口：**
- 输入：文章数据、路由参数
- 输出：静态 HTML 文件

**依赖关系：**
- 依赖于：内容管理子系统、UI 组件子系统
- 被使用于：构建输出

---

### 3.3 UI 组件子系统

**职责：** 提供可复用的界面组件

**组件：**
- `Layout`：页面布局（导航、页脚）
- `Navigation`：导航菜单
- `EssayCard`：文章卡片（列表项）
- `EssayContent`：文章正文渲染
- `TagBadge`：标签徽章
- `ArchiveGroup`：归档分组

**接口：**
- 输入：组件 props（数据、样式）
- 输出：React 组件

**依赖关系：**
- 依赖于：shadcn/ui、Tailwind CSS
- 被使用于：页面生成子系统

---

### 3.4 构建部署子系统

**职责：** 构建和部署静态网站

**组件：**
- `build-script`：Next.js 构建命令
- `export-config`：静态导出配置
- `deploy-hook`：cnb.cool 部署触发

**接口：**
- 输入：源代码、内容文件
- 输出：静态文件（out/ 目录）

**依赖关系：**
- 依赖于：所有其他子系统
- 被使用于：cnb.cool Pages

---

## 4. 路由设计

### 4.1 页面路由

| 路由 | 页面 | 生成方式 | 说明 |
|------|------|---------|------|
| `/` | 首页 | SSG | 最新文章列表 |
| `/essays/[slug]` | 文章详情 | SSG | 动态路由，构建时生成 |
| `/tags` | 标签列表 | SSG | 所有标签 |
| `/tags/[tag]` | 标签详情 | SSG | 该标签下的文章 |
| `/archive` | 归档 | SSG | 按时间分组 |
| `/about` | 关于 | SSG | 作者介绍 |

### 4.2 静态生成配置

```typescript
// next.config.js
const nextConfig = {
  output: 'export',  // 静态导出
  images: {
    unoptimized: true  // 静态部署不支持图片优化
  },
  trailingSlash: true  // URL 末尾加斜杠
}
```

### 4.3 动态路由生成

```typescript
// app/essays/[slug]/page.tsx
export async function generateStaticParams() {
  const essays = await getAllEssays()
  return essays.map((essay) => ({
    slug: essay.slug
  }))
}
```

---

## 5. 目录结构

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 首页
│   ├── layout.tsx                # 根布局
│   ├── essays/
│   │   └── [slug]/
│   │       └── page.tsx          # 文章详情页
│   ├── tags/
│   │   ├── page.tsx              # 标签列表页
│   │   └── [tag]/
│   │       └── page.tsx          # 标签详情页
│   ├── archive/
│   │   └── page.tsx              # 归档页
│   ├── about/
│   │   └── page.tsx              # 关于页
│   ├── not-found.tsx             # 404 页面
│   └── globals.css               # 全局样式
├── components/                   # React 组件
│   ├── ui/                       # shadcn/ui 组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/                   # 布局组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── essay/                    # 文章相关组件
│       ├── EssayCard.tsx
│       ├── EssayContent.tsx
│       ├── EssayMeta.tsx
│       └── TagBadge.tsx
├── lib/                          # 工具函数
│   ├── content.ts                # 内容加载
│   ├── markdown.ts               # Markdown 解析
│   └── utils.ts                  # 通用工具
├── types/                        # TypeScript 类型
│   └── essay.ts                  # 文章类型定义
├── styles/                       # 样式文件
│   └── prose.css                 # 文章排版样式
└── constants/                    # 常量
    └── site.ts                   # 网站配置
content/                          # 内容目录（项目根目录）
└── essays/                       # 文章 Markdown 文件
    ├── narrative-and-self.md
    └── ...
public/                           # 静态资源
├── images/                       # 图片
└── favicon.ico                   # 网站图标
```

### 5.1 目录命名规范

| 目录 | 用途 | 命名规范 |
|------|------|---------|
| `app/` | 页面路由 | 小写，kebab-case |
| `components/` | React 组件 | PascalCase.tsx |
| `lib/` | 工具函数 | camelCase.ts |
| `types/` | 类型定义 | camelCase.ts |
| `content/essays/` | 文章文件 | kebab-case.md |

---

## 6. 数据模型

### 6.1 文章（Essay）

```typescript
// types/essay.ts
interface Essay {
  slug: string           // URL 标识符
  title: string          // 文章标题
  content: string        // Markdown 内容
  excerpt: string        // 摘要
  publishedAt: Date      // 发布日期
  updatedAt?: Date       // 更新日期（可选）
  tags: string[]         // 标签列表
}

interface EssayMeta {
  slug: string
  title: string
  excerpt: string
  publishedAt: Date
  tags: string[]
}
```

### 6.2 标签（Tag）

```typescript
interface Tag {
  slug: string           // 标签标识符
  name: string           // 显示名称
  count: number          // 文章数量
}
```

### 6.3 归档（Archive）

```typescript
interface ArchiveGroup {
  year: number
  month: number
  essays: EssayMeta[]
}
```

### 6.4 Frontmatter 格式

```yaml
---
title: "叙事与自我"
date: "2024-12-12"
tags: ["narrative", "self", "framework"]
excerpt: "探索叙事如何塑造我们对自我的理解..."
---
```

---

## 7. 内容处理流程

### 7.1 构建时数据流

```
content/essays/*.md
        │
        ▼
┌───────────────────┐
│  读取文件系统      │
│  fs.readdir()     │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  解析 Frontmatter │
│  gray-matter      │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  转换 Markdown    │
│  remark/rehype    │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  语法高亮         │
│  shiki/prism      │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  生成静态页面      │
│  Next.js SSG      │
└───────────────────┘
        │
        ▼
    out/*.html
```

### 7.2 内容加载函数

```typescript
// lib/content.ts

// 获取所有文章
export async function getAllEssays(): Promise<EssayMeta[]>

// 获取单篇文章
export async function getEssayBySlug(slug: string): Promise<Essay>

// 获取所有标签
export async function getAllTags(): Promise<Tag[]>

// 按标签获取文章
export async function getEssaysByTag(tag: string): Promise<EssayMeta[]>

// 获取归档分组
export async function getArchiveGroups(): Promise<ArchiveGroup[]>
```

---

## 8. 安全架构

### 8.1 安全层级

由于是纯静态网站，安全考虑相对简单：

| 层级 | 措施 | 说明 |
|------|------|------|
| 传输层 | HTTPS | cnb.cool 默认启用 |
| 内容层 | XSS 防护 | React 自动转义 |
| 构建层 | 依赖审计 | bun audit |
| 部署层 | 版本控制 | Git 提交历史 |

### 8.2 内容安全

- **原创性检查**：人工确保内容原创（C1）
- **隐私保护**：不在文章中暴露他人隐私（C2）
- **无用户输入**：静态网站无表单，无注入风险

### 8.3 依赖安全

```bash
# 定期检查依赖漏洞
bun audit

# 更新依赖
bun update
```

---

## 9. 技术决策记录（ADR）

### ADR-001：框架选择 - Next.js

**状态：** 已接受

**背景：**
需要一个支持静态站点生成、React 生态、良好开发体验的框架。

**决策：**
选择 Next.js 14+ with App Router，使用 `output: 'export'` 模式生成纯静态网站。

**后果：**
- ✅ 成熟的 React 框架，生态丰富
- ✅ 内置 SSG 支持，构建时生成页面
- ✅ App Router 提供更好的布局和路由组织
- ⚠️ 静态导出模式不支持某些动态功能

---

### ADR-002：样式方案 - Tailwind CSS + shadcn/ui

**状态：** 已接受

**背景：**
需要快速开发、响应式设计、可定制的 UI 组件。

**决策：**
使用 Tailwind CSS 作为样式基础，shadcn/ui 提供可复用组件。

**后果：**
- ✅ 原子化 CSS，快速开发
- ✅ shadcn/ui 组件可完全定制
- ✅ 响应式设计开箱即用
- ⚠️ 需要学习 Tailwind 类名

---

### ADR-003：包管理 - bun

**状态：** 已接受

**背景：**
需要快速的包管理和脚本运行工具，符合环境一致性约束（C4）。

**决策：**
使用 bun 替代 npm/yarn，作为包管理器和运行时。

**后果：**
- ✅ 安装速度快
- ✅ 内置 TypeScript 支持
- ✅ 兼容 npm 生态
- ⚠️ 相对较新，某些边缘情况可能有问题

---

### ADR-004：内容管理 - Markdown 文件

**状态：** 已接受

**背景：**
个人随笔网站，内容更新频率低，不需要 CMS。

**决策：**
文章以 Markdown 文件形式存储在 Git 仓库中，使用 Frontmatter 管理元数据。

**后果：**
- ✅ 版本控制，历史可追溯
- ✅ 无需数据库，部署简单
- ✅ 本地编辑，熟悉的工作流
- ⚠️ 不适合高频更新或多人协作

---

### ADR-005：部署平台 - cnb.cool Pages

**状态：** 已接受

**背景：**
需要静态网站托管，符合版本控制约束（C3）。

**决策：**
使用 cnb.cool Pages 托管静态网站，Git push 自动触发部署。

**后果：**
- ✅ 与代码仓库集成
- ✅ 自动部署
- ✅ HTTPS 支持
- ⚠️ 依赖平台可用性

---

### ADR-006：Markdown 解析 - remark/rehype

**状态：** 已接受

**背景：**
需要将 Markdown 转换为 HTML，支持语法高亮和自定义渲染。

**决策：**
使用 remark/rehype 生态系统，配合 shiki 进行代码高亮。

**后果：**
- ✅ 插件生态丰富
- ✅ 可扩展性强
- ✅ shiki 高亮效果好
- ⚠️ 配置相对复杂

---

## 10. 构建与部署

### 10.1 构建命令

```bash
# 安装依赖
bun install

# 开发模式
bun run dev

# 构建生产版本
bun run build

# 本地预览构建结果
bun run start
```

### 10.2 构建输出

```
out/
├── index.html              # 首页
├── essays/
│   ├── narrative-and-self/
│   │   └── index.html      # 文章详情页
│   └── ...
├── tags/
│   ├── index.html          # 标签列表
│   ├── narrative/
│   │   └── index.html      # 标签详情页
│   └── ...
├── archive/
│   └── index.html          # 归档页
├── about/
│   └── index.html          # 关于页
├── 404.html                # 404 页面
└── _next/                  # 静态资源
    ├── static/
    └── ...
```

### 10.3 部署流程

```
本地开发
    │
    ▼
git commit & push
    │
    ▼
cnb.cool 检测到推送
    │
    ▼
触发构建 (bun run build)
    │
    ▼
部署到 CDN
    │
    ▼
网站更新
```

---

## 11. 性能优化

### 11.1 构建时优化

| 优化项 | 实现方式 |
|--------|---------|
| 图片优化 | 手动压缩，使用 WebP 格式 |
| 代码分割 | Next.js 自动处理 |
| CSS 压缩 | Tailwind 生产模式自动 purge |
| HTML 压缩 | Next.js 自动处理 |

### 11.2 运行时优化

| 优化项 | 实现方式 |
|--------|---------|
| 静态资源缓存 | CDN 缓存策略 |
| 字体加载 | next/font 优化 |
| 图片懒加载 | next/image 或原生 loading="lazy" |

### 11.3 性能目标

| 指标 | 目标值 |
|------|--------|
| 首次内容绘制（FCP） | < 1.5s |
| 最大内容绘制（LCP） | < 2.5s |
| 累积布局偏移（CLS） | < 0.1 |
| 首次输入延迟（FID） | < 100ms |

---

## 12. 约束检查清单

### 来自 real.md 的约束

- [ ] **C1 内容原创性**：文章内容原创或标注来源
- [ ] **C2 隐私保护**：不暴露他人隐私信息
- [ ] **C3 版本控制**：代码通过 Git 管理，托管于 cnb.cool
- [ ] **C4 环境一致性**：使用 bun 管理依赖
- [ ] **C5 中文优先**：文档和注释使用中文
- [ ] **C6 简洁设计**：UI 简洁，突出内容
- [ ] **C7 渐进增强**：优先核心阅读功能

---

## 附录

### A. 依赖清单

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^3.0.0",
    "gray-matter": "^4.0.0",
    "remark": "^15.0.0",
    "rehype": "^13.0.0",
    "shiki": "^1.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0"
  }
}
```

### B. 参考文档

- `.42cog/real/real.md` - 现实约束
- `.42cog/cog/cog.md` - 认知模型
- `spec/pm/pr.spec.md` - 产品需求规格书
- `spec/pm/userstory.spec.md` - 用户故事

### C. 外部参考

- Next.js: https://github.com/vercel/next.js
- Tailwind CSS: https://github.com/tailwindlabs/tailwindcss
- shadcn/ui: https://github.com/shadcn-ui/ui
- bun: https://bun.com

---

**文档版本：** v1.0.0
**创建日期：** 2024-12-12
**维护者：** 路屿
