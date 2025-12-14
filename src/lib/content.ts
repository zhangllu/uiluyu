// 内容加载工具（Mock 数据版本）
import { Essay, EssayMeta, Tag, ArchiveGroup } from '@/types/essay';

// Mock 文章数据
const MOCK_ESSAYS: Essay[] = [
  {
    slug: 'mental-health-lessons-dont-work',
    title: '学校心理健康课为何收效甚微',
    content: `
## 主流做法的困境

越来越多的学校开设心理健康课程，教授正念冥想、情绪管理技巧。然而研究显示，这些干预措施的效果远不如预期。

## 问题出在哪里

将心理健康问题个体化处理，忽视了更深层的社会结构因素：

- 学业压力的制度性来源
- 家庭经济状况的影响
- 社交媒体环境的冲击
- 对"成功"的单一定义

## 另一种视角

与其教孩子"适应"压力，不如追问：这些压力从何而来？是否合理？

> 当我们只关注个体的"韧性"，就默认了环境的不可改变。

## 可能的出路

真正的改变需要同时作用于个体和系统。这不是非此即彼的选择，而是需要多层次的介入。
    `.trim(),
    excerpt: '学校心理健康课程为何难以奏效？问题可能不在课程本身，而在于我们如何理解"心理健康"。',
    publishedAt: new Date('2024-12-10'),
    tags: ['心理健康', '教育', '青少年'],
  },
  {
    slug: 'anxiety-generation',
    title: '焦虑的一代：是孩子变脆弱了吗',
    content: `
## 流行的解释

"现在的孩子太脆弱了"——这是常见的说法。智能手机、过度保护、缺乏挫折教育，被认为是罪魁祸首。

## 被忽视的背景

但这种解释忽略了几个关键事实：

1. **竞争加剧**：教育资源的争夺比以往更激烈
2. **未来不确定性**：稳定的职业路径正在消失
3. **社会比较**：社交媒体放大了比较的范围和频率

## 谁在定义"脆弱"

当我们说孩子"脆弱"时，标准是什么？是他们无法承受的压力本身不合理，还是他们的反应不合理？

## 重新框架

也许问题不是"如何让孩子更坚强"，而是"什么样的环境能让孩子健康成长"。
    `.trim(),
    excerpt: '当我们说这一代孩子更焦虑时，是孩子变了，还是世界变了？',
    publishedAt: new Date('2024-12-05'),
    tags: ['焦虑', '青少年', '社会'],
  },
  {
    slug: 'parenting-paradox',
    title: '育儿悖论：为何越努力越焦虑',
    content: `
## 密集育儿的兴起

现代父母投入在孩子身上的时间、金钱和精力，远超过去任何时代。但焦虑感也达到了前所未有的高度。

## 悖论的根源

- **风险社会**：未来的不确定性被转化为当下的育儿压力
- **个体化责任**：社会问题被重新定义为家庭责任
- **专家话语**：育儿被"科学化"，父母的直觉被边缘化

## 阶层的维度

育儿焦虑并非均匀分布。中产阶级家庭承受着特殊的压力——既要维持地位，又担心下滑。

## 可能的松绑

认识到焦虑的社会根源，不是为了推卸责任，而是为了找到更合理的应对方式。
    `.trim(),
    excerpt: '为什么父母越来越焦虑？答案可能不在育儿方法，而在社会结构。',
    publishedAt: new Date('2024-11-28'),
    tags: ['育儿', '焦虑', '社会'],
  },
  {
    slug: 'education-and-inequality',
    title: '教育能打破阶层固化吗',
    content: `
## 教育的承诺

"知识改变命运"——这是现代社会最有力的叙事之一。教育被视为社会流动的阶梯。

## 现实的复杂性

然而数据显示，教育的"均等化"效应正在减弱：

- 优质教育资源的获取本身就不平等
- 学历通胀降低了文凭的价值
- 社会资本和文化资本的作用日益凸显

## 不是否定教育

指出教育的局限，不是要否定教育的价值，而是要避免将所有责任都压在个体身上。

## 系统性思考

真正的教育公平，需要配合更广泛的社会政策。单靠教育本身，无法解决教育之外的问题。
    `.trim(),
    excerpt: '教育是社会流动的阶梯，还是阶层再生产的工具？答案可能比我们想象的更复杂。',
    publishedAt: new Date('2024-11-20'),
    tags: ['教育', '阶层', '社会'],
  },
  {
    slug: 'listen-to-teenagers',
    title: '倾听青少年：他们在说什么',
    content: `
## 被忽视的声音

在关于青少年的讨论中，青少年自己的声音常常是缺席的。我们谈论他们，却很少真正听他们说。

## 他们在表达什么

当青少年说"压力大"时，他们可能在说：

- 我的感受不被认可
- 我看不到努力的意义
- 我不知道自己想要什么
- 我害怕让人失望

## 倾听的障碍

为什么倾听这么难？

1. 成人的"过来人"心态
2. 急于给出解决方案
3. 对"负面情绪"的不适

## 倾听本身就是支持

有时候，青少年需要的不是建议，而是被看见、被理解。这本身就是一种有力的支持。
    `.trim(),
    excerpt: '在关于青少年的讨论中，我们是否真正听到了他们的声音？',
    publishedAt: new Date('2024-11-15'),
    tags: ['青少年', '倾听', '心理'],
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
