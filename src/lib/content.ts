// 内容加载工具（Mock 数据版本）
import { Essay, EssayMeta, Tag, ArchiveGroup } from '@/types/essay';

// Mock 文章数据
const MOCK_ESSAYS: Essay[] = [
  {
    slug: 'narrative-and-self',
    title: '叙事与自我：故事如何塑造我们',
    content: `
## 引言

我们每个人都是自己故事的作者。从清晨醒来的那一刻起，我们就开始编织当天的叙事——我是谁，我要做什么，我为什么这样做。

## 叙事的力量

叙事不仅仅是讲故事。它是我们理解世界、理解自己的基本方式。当我们说"我是一个作家"或"我是一个探索者"时，我们不只是在描述职业或爱好，而是在构建身份。

> 我们不是因为知道自己是谁才讲述故事，而是通过讲述故事来发现自己是谁。

## 框架的作用

框架是叙事的骨架。没有框架，故事就会散落成碎片。好的框架能够：

1. 组织复杂的信息
2. 揭示隐藏的联系
3. 指导行动的方向

## 结语

理解叙事与自我的关系，不是为了找到"正确答案"，而是为了更好地理解问题背后的机制。
    `.trim(),
    excerpt: '探索叙事如何塑造我们对自我的理解，以及框架在其中扮演的角色。',
    publishedAt: new Date('2024-12-10'),
    tags: ['narrative', 'self', 'framework'],
  },
  {
    slug: 'framework-thinking',
    title: '框架思维：拆解复杂问题的艺术',
    content: `
## 什么是框架思维

框架思维是一种将复杂问题分解为可管理部分的能力。它不是简单的分类，而是揭示结构、发现模式的过程。

## 为什么需要框架

面对复杂问题时，我们常常感到无从下手。框架提供了一个起点，一个可以依靠的结构。

## 如何构建框架

1. **识别核心要素**：找出问题中最关键的部分
2. **发现关系**：理解要素之间如何相互影响
3. **建立层次**：组织要素的优先级和依赖关系

## 框架的局限

框架是工具，不是答案。过度依赖框架可能会限制思维的灵活性。
    `.trim(),
    excerpt: '框架思维是拆解复杂问题的艺术，但它也有其局限性。',
    publishedAt: new Date('2024-12-05'),
    tags: ['framework', 'thinking'],
  },

  {
    slug: 'character-and-story',
    title: '人物与故事：角色如何驱动叙事',
    content: `
## 人物的核心地位

在任何故事中，人物都是核心。没有人物，就没有行动；没有行动，就没有故事。

## 角色的维度

一个立体的角色需要多个维度：

- **外在特征**：外貌、行为、习惯
- **内在动机**：欲望、恐惧、信念
- **成长弧线**：从开始到结束的变化

## 人物与读者的连接

好的人物能够让读者产生共鸣。这种共鸣不一定来自相似性，而是来自真实性。
    `.trim(),
    excerpt: '探讨人物在叙事中的核心地位，以及如何创造立体的角色。',
    publishedAt: new Date('2024-11-28'),
    tags: ['character', 'narrative', 'story'],
  },
  {
    slug: 'agency-and-freedom',
    title: '能动性与自由：在结构中寻找空间',
    content: `
## 结构与自由的张力

我们生活在各种结构之中——社会结构、语言结构、思维结构。这些结构既是限制，也是可能性的条件。

## 能动性的含义

能动性不是无限的自由，而是在约束中做出选择的能力。

## 寻找空间

在任何结构中，都存在可以行动的空间。关键是：

1. 认识结构的存在
2. 理解结构的运作方式
3. 找到可以施加影响的节点
    `.trim(),
    excerpt: '在结构与自由之间，能动性如何发挥作用。',
    publishedAt: new Date('2024-11-20'),
    tags: ['agency', 'freedom', 'structure'],
  },
  {
    slug: 'deep-understanding',
    title: '深度理解：超越快速解决',
    content: `
## 快与慢

现代社会推崇速度。快速学习、快速解决、快速迭代。但有些东西需要时间。

## 深度的价值

深度理解不是效率的敌人，而是真正效率的基础。表面的快速往往导致反复的返工。

## 如何培养深度

- 允许自己慢下来
- 追问"为什么"而不只是"怎么做"
- 接受不确定性和复杂性
    `.trim(),
    excerpt: '在追求速度的时代，深度理解为何依然重要。',
    publishedAt: new Date('2024-11-15'),
    tags: ['understanding', 'thinking', 'depth'],
  },
];

// 获取所有文章元数据
export function getAllEssays(): EssayMeta[] {
  return MOCK_ESSAYS.map(({ slug, title, excerpt, publishedAt, tags }) => ({
    slug, title, excerpt, publishedAt, tags,
  })).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

// 获取单篇文章
export function getEssayBySlug(slug: string): Essay | undefined {
  return MOCK_ESSAYS.find((essay) => essay.slug === slug);
}

// 获取所有标签
export function getAllTags(): Tag[] {
  const tagCount: Record<string, number> = {};
  MOCK_ESSAYS.forEach((essay) => {
    essay.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  return Object.entries(tagCount)
    .map(([slug, count]) => ({ slug, name: slug, count }))
    .sort((a, b) => b.count - a.count);
}

// 按标签获取文章
export function getEssaysByTag(tag: string): EssayMeta[] {
  return getAllEssays().filter((essay) => essay.tags.includes(tag));
}

// 获取归档分组
export function getArchiveGroups(): ArchiveGroup[] {
  const groups: Record<string, EssayMeta[]> = {};
  getAllEssays().forEach((essay) => {
    const key = `${essay.publishedAt.getFullYear()}-${essay.publishedAt.getMonth() + 1}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(essay);
  });
  return Object.entries(groups)
    .map(([key, essays]) => {
      const [year, month] = key.split('-').map(Number);
      return { year, month, essays };
    })
    .sort((a, b) => b.year - a.year || b.month - a.month);
}

// 获取所有文章 slugs（用于静态生成）
export function getAllEssaySlugs(): string[] {
  return MOCK_ESSAYS.map((essay) => essay.slug);
}

// 获取所有标签 slugs（用于静态生成）
export function getAllTagSlugs(): string[] {
  return getAllTags().map((tag) => tag.slug);
}
