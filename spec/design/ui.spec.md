# 路屿个人网站 - UI 设计规格书

<meta>
  <document-id>uiluyu-ui</document-id>
  <version>1.0.0</version>
  <project>路屿个人网站</project>
  <type>UI设计</type>
  <created>2024-12-12</created>
  <depends>real.md, cog.md, pr.spec.md, userstory.spec.md, sys.spec.md</depends>
</meta>

---

## 1. 智能分析

### 1.1 应用类型

**判定：MPA（多页应用）**

| 判断标准 | 分析 |
|----------|------|
| 核心交互 | 内容阅读，页面间导航 |
| 用户任务 | 离散任务（阅读文章、浏览标签） |
| 状态需求 | 无复杂状态，纯静态内容 |

**理由**：个人随笔网站以内容展示为主，用户在独立页面间浏览，无需复杂的客户端状态管理。

### 1.2 导航结构

**判定：顶部导航**

| 类型 | 适用性 |
|------|--------|
| 顶部导航 | ✅ 功能少（4-5项）、品牌重要 |
| 侧边导航 | ❌ 功能不多，无需层级 |
| 底部导航 | ❌ 非移动优先应用 |

**导航项：**
- 首页
- 归档
- 标签
- 关于

### 1.3 配色方案 (OKLCH)

**主题：沉静、专注、深度**

基于作者定位"认知写作者｜框架探索者｜叙事理论实践者"，选择冷静、知性的配色。

```css
/* 主色调：深蓝灰 - 知性、沉稳 */
--color-primary: oklch(0.45 0.03 250);

/* 背景色：温暖米白 - 舒适阅读 */
--color-background: oklch(0.98 0.005 90);

/* 文字色：深灰 - 清晰可读 */
--color-foreground: oklch(0.20 0.02 250);

/* 强调色：淡蓝 - 链接、交互 */
--color-accent: oklch(0.55 0.12 240);
```

---

## 2. 设计系统

### 2.1 设计令牌

```css
@theme inline {
  /* 间距 */
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */

  /* 圆角 */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;

  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);

  /* 最大宽度 */
  --max-width-prose: 65ch;
  --max-width-content: 720px;
  --max-width-page: 1200px;
}
```

### 2.2 字体系统

```css
/* 系统字体栈（不使用 Google Fonts） */
--font-sans: ui-sans-serif, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
--font-serif: ui-serif, Georgia, "Noto Serif SC", serif;
--font-mono: ui-monospace, "SF Mono", Menlo, monospace;

/* 字号 */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */

/* 行高 */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

---

## 3. 页面布局

### 3.1 响应式断点

| 名称 | 宽度 | 布局特点 |
|------|------|---------|
| 移动端 | <640px | 单列，全宽内容，紧凑间距 |
| 平板 | 640-1024px | 单列，居中内容，适中间距 |
| 桌面端 | >1024px | 单列，居中内容，宽松间距 |

### 3.2 页面结构

```
┌─────────────────────────────────────────┐
│              Header (固定)               │
│  Logo          Nav: 首页 归档 标签 关于   │
├─────────────────────────────────────────┤
│                                         │
│              Main Content               │
│           (max-width: 720px)            │
│              居中显示                    │
│                                         │
├─────────────────────────────────────────┤
│              Footer                     │
│         © 2024 路屿 · cnb.cool          │
└─────────────────────────────────────────┘
```

### 3.3 布局组件

**Header**
- 高度：64px
- 背景：半透明 + 模糊效果
- 位置：固定顶部
- 内容：Logo（左）+ 导航（右）

**Main**
- 最大宽度：720px
- 内边距：移动端 16px，桌面端 24px
- 上边距：96px（为 Header 留空）

**Footer**
- 高度：auto
- 内边距：24px
- 内容：版权信息、链接

---

## 4. 组件规格

### 4.1 基础组件（shadcn/ui）

| 组件 | 用途 | 变体 |
|------|------|------|
| Button | 导航、操作 | ghost, link |
| Badge | 标签显示 | default, secondary |
| Card | 文章卡片 | default |
| Separator | 分隔线 | horizontal |
| Skeleton | 加载占位 | default |

### 4.2 自定义组件

#### Header 组件

```typescript
// src/components/layout/Header.tsx
interface HeaderProps {
  currentPath?: string;
}

// 功能：
// - 显示网站 Logo/标题
// - 导航菜单（首页、归档、标签、关于）
// - 当前页面高亮
// - 移动端响应式菜单
```

#### EssayCard 组件

```typescript
// src/components/essay/EssayCard.tsx
interface EssayCardProps {
  title: string;
  excerpt: string;
  publishedAt: Date;
  tags: string[];
  slug: string;
}

// 功能：
// - 显示文章标题（可点击）
// - 显示摘要（2-3行截断）
// - 显示发布日期
// - 显示标签徽章
```

#### EssayContent 组件

```typescript
// src/components/essay/EssayContent.tsx
interface EssayContentProps {
  content: string; // HTML 字符串
}

// 功能：
// - 渲染 Markdown 转换后的 HTML
// - 应用排版样式（prose）
// - 代码块语法高亮
```

#### TagBadge 组件

```typescript
// src/components/essay/TagBadge.tsx
interface TagBadgeProps {
  tag: string;
  href?: string;
  size?: 'sm' | 'md';
}

// 功能：
// - 显示标签名称
// - 可点击跳转到标签页
// - 悬停效果
```

#### ArchiveGroup 组件

```typescript
// src/components/archive/ArchiveGroup.tsx
interface ArchiveGroupProps {
  year: number;
  month: number;
  essays: EssayMeta[];
}

// 功能：
// - 显示年月标题
// - 列出该时期的文章
```

---

## 5. 页面设计

### 5.1 首页 (/)

**布局：**
```
┌─────────────────────────────────────┐
│            Header                   │
├─────────────────────────────────────┤
│                                     │
│  网站标题（大）                      │
│  网站简介                           │
│                                     │
│  ─────────────────────────          │
│                                     │
│  最新文章                           │
│                                     │
│  ┌─────────────────────────┐       │
│  │ 文章标题                 │       │
│  │ 摘要文字...              │       │
│  │ 2024-12-12 · #标签       │       │
│  └─────────────────────────┘       │
│                                     │
│  ┌─────────────────────────┐       │
│  │ 文章标题                 │       │
│  │ ...                      │       │
│  └─────────────────────────┘       │
│                                     │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

**内容：**
- 网站标题：路屿
- 网站简介：认知写作者｜框架探索者｜叙事理论实践者
- 最新文章列表：5-10篇

### 5.2 文章详情页 (/essays/[slug])

**布局：**
```
┌─────────────────────────────────────┐
│            Header                   │
├─────────────────────────────────────┤
│                                     │
│  ← 返回首页                         │
│                                     │
│  文章标题（h1）                      │
│  2024-12-12 · #标签1 #标签2         │
│                                     │
│  ─────────────────────────          │
│                                     │
│  文章正文内容...                     │
│  （Markdown 渲染）                   │
│                                     │
│  ─────────────────────────          │
│                                     │
│  相关文章（可选）                    │
│                                     │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

### 5.3 标签页 (/tags, /tags/[tag])

**标签列表页：**
- 显示所有标签
- 每个标签显示文章数量
- 点击跳转到标签详情

**标签详情页：**
- 显示标签名称
- 列出该标签下所有文章

### 5.4 归档页 (/archive)

**布局：**
```
┌─────────────────────────────────────┐
│            Header                   │
├─────────────────────────────────────┤
│                                     │
│  归档                               │
│                                     │
│  2024年12月 (3)                     │
│    · 文章标题1                      │
│    · 文章标题2                      │
│    · 文章标题3                      │
│                                     │
│  2024年11月 (2)                     │
│    · 文章标题4                      │
│    · 文章标题5                      │
│                                     │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

### 5.5 关于页 (/about)

**内容：**
- 作者介绍
- 写作理念
- 联系方式（可选）

---

## 6. 排版样式

### 6.1 文章正文 (Prose)

```css
/* src/styles/prose.css */
.prose {
  /* 基础 */
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-foreground);

  /* 最大宽度 */
  max-width: var(--max-width-prose);
}

/* 标题 */
.prose h1 { font-size: var(--text-3xl); margin-top: 2em; margin-bottom: 0.5em; }
.prose h2 { font-size: var(--text-2xl); margin-top: 1.5em; margin-bottom: 0.5em; }
.prose h3 { font-size: var(--text-xl); margin-top: 1.25em; margin-bottom: 0.5em; }

/* 段落 */
.prose p { margin-bottom: 1.25em; }

/* 链接 */
.prose a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* 引用 */
.prose blockquote {
  border-left: 3px solid var(--color-accent);
  padding-left: 1em;
  margin-left: 0;
  font-style: italic;
  color: oklch(0.4 0.02 250);
}

/* 代码 */
.prose code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: oklch(0.95 0.005 250);
  padding: 0.2em 0.4em;
  border-radius: var(--radius-sm);
}

.prose pre {
  background: oklch(0.15 0.02 250);
  color: oklch(0.9 0.01 250);
  padding: 1em;
  border-radius: var(--radius-md);
  overflow-x: auto;
}

/* 列表 */
.prose ul, .prose ol {
  padding-left: 1.5em;
  margin-bottom: 1.25em;
}

.prose li { margin-bottom: 0.5em; }

/* 图片 */
.prose img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
}
```

---

## 7. 交互模式

### 7.1 加载状态

| 场景 | 处理方式 |
|------|---------|
| 页面切换 | 无需加载（SSG 预渲染） |
| 图片加载 | 懒加载 + 占位符 |

### 7.2 悬停效果

| 元素 | 效果 |
|------|------|
| 文章标题 | 颜色变深 + 下划线 |
| 标签徽章 | 背景色加深 |
| 导航链接 | 颜色变化 |

### 7.3 空状态

| 场景 | 显示内容 |
|------|---------|
| 无文章 | "暂无文章" |
| 标签无文章 | "该标签下暂无文章" |
| 404 页面 | "页面不存在" + 返回首页链接 |

---

## 8. 无障碍性

### 8.1 WCAG AA 检查清单

- [ ] 颜色对比度 ≥ 4.5:1（正文）
- [ ] 颜色对比度 ≥ 3:1（大文字）
- [ ] 所有图片有 alt 属性
- [ ] 链接有明确的文字描述
- [ ] 页面有正确的标题层级
- [ ] 可通过键盘导航
- [ ] 焦点状态可见

### 8.2 语义化 HTML

```html
<header>  <!-- 页头 -->
<nav>     <!-- 导航 -->
<main>    <!-- 主内容 -->
<article> <!-- 文章 -->
<aside>   <!-- 侧边栏（如有） -->
<footer>  <!-- 页脚 -->
<time>    <!-- 日期时间 -->
```

---

## 9. 目录结构

```
src/
├── app/
│   ├── page.tsx              # 首页
│   ├── layout.tsx            # 根布局
│   ├── globals.css           # 全局样式
│   ├── not-found.tsx         # 404 页面
│   ├── essays/
│   │   └── [slug]/
│   │       └── page.tsx      # 文章详情
│   ├── tags/
│   │   ├── page.tsx          # 标签列表
│   │   └── [tag]/
│   │       └── page.tsx      # 标签详情
│   ├── archive/
│   │   └── page.tsx          # 归档
│   └── about/
│       └── page.tsx          # 关于
├── components/
│   ├── ui/                   # shadcn/ui 组件
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── essay/
│       ├── EssayCard.tsx
│       ├── EssayContent.tsx
│       ├── EssayMeta.tsx
│       └── TagBadge.tsx
├── lib/
│   ├── content.ts            # 内容加载
│   ├── markdown.ts           # Markdown 解析
│   └── utils.ts              # 工具函数
├── types/
│   └── essay.ts              # 类型定义
└── styles/
    └── prose.css             # 文章排版
```

---

## 10. 验收检查清单

### 前置条件
- [x] 三个必需文档已加载（meta.md, real.md, cog.md）
- [x] 应用类型已判断（MPA）
- [x] 导航结构已确定（顶部导航）
- [x] OKLCH 配色方案已定义

### 设计系统
- [ ] 设计令牌已定义
- [ ] 字体系统使用系统字体
- [ ] 响应式断点已定义

### 页面设计
- [ ] 首页布局完成
- [ ] 文章详情页布局完成
- [ ] 标签页布局完成
- [ ] 归档页布局完成
- [ ] 关于页布局完成
- [ ] 404 页面设计完成

### 组件
- [ ] Header 组件规格完成
- [ ] EssayCard 组件规格完成
- [ ] EssayContent 组件规格完成
- [ ] TagBadge 组件规格完成

### 无障碍
- [ ] 符合 WCAG AA 标准
- [ ] 语义化 HTML 结构

---

## 附录

### A. 参考文档

- `.42cog/meta/meta.md` - 项目元信息
- `.42cog/real/real.md` - 现实约束
- `.42cog/cog/cog.md` - 认知模型
- `spec/pm/pr.spec.md` - 产品需求规格书
- `spec/pm/userstory.spec.md` - 用户故事
- `spec/dev/sys.spec.md` - 系统架构

### B. 技术栈

- Next.js 15+ (App Router, SSG)
- Tailwind CSS v4
- shadcn/ui
- TweakCN 实时预览

---

**文档版本：** v1.0.0
**创建日期：** 2024-12-12
**维护者：** 路屿
