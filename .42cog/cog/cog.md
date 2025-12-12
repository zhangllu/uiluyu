# 路屿个人网站 - 认知模型文档

<meta>
  <document-id>uiluyu-cog</document-id>
  <version>1.0.0</version>
  <project>路屿个人网站</project>
  <type>认知模型</type>
  <created>2024-12-12</created>
  <depends>real.md</depends>
</meta>

## 文档说明

基于"智能体 + 信息 + 上下文"框架，定义路屿个人网站的认知模型。这是一个用于发布个人随笔的网站，核心关注：人物、故事、思想与叙事。

---

## 一、智能体（Agents）

<agents>

### 1.1 人类智能体

<agent type="human" id="A1">
<name>作者（路屿）</name>
<identifier>唯一作者，无需额外标识</identifier>
<classification>
  <by-role>内容创作者 | 网站管理者</by-role>
</classification>
<capabilities>撰写随笔、管理内容、维护网站</capabilities>
<goals>通过写作提炼结构洞见，探索人物、思想与叙事如何塑造自我</goals>
</agent>

<agent type="human" id="A2">
<name>读者</name>
<identifier>匿名访客，无需注册</identifier>
<classification>
  <by-interest>深度理解型 | 快速浏览型</by-interest>
</classification>
<capabilities>阅读文章、浏览归档</capabilities>
<goals>获取洞见、理解框架、思考问题背后的机制</goals>
</agent>

### 1.2 人工智能体

<agent type="ai" id="A3">
<name>Claude（写作助手）</name>
<identifier>anthropic/claude</identifier>
<classification>
  <by-function>内容协作 | 代码辅助</by-function>
</classification>
<interaction-pattern>对话式协作，中文沟通</interaction-pattern>
</agent>

</agents>

---

## 二、信息（Information）

<information>

### 2.1 核心实体

<entity id="E1">
<name>随笔（Essay）</name>
<unique-code>slug（URL友好的唯一标识，如 "narrative-and-self"）</unique-code>
<classification>
  <by-theme>人物 | 故事 | 思想 | 框架 | 叙事</by-theme>
  <by-depth>洞见型 | 探索型 | 反思型</by-depth>
</classification>
<attributes>
  - 标题（title）
  - 内容（content）
  - 发布日期（publishedAt）
  - 更新日期（updatedAt）
  - 摘要（excerpt）
  - 标签（tags）
</attributes>
<relations>随笔 N:N 标签</relations>
</entity>

<entity id="E2">
<name>标签（Tag）</name>
<unique-code>slug（如 "framework", "narrative"）</unique-code>
<classification>
  <by-type>主题标签 | 形式标签</by-type>
</classification>
<attributes>
  - 名称（name）
  - 描述（description）
</attributes>
<relations>标签 N:N 随笔</relations>
</entity>

<entity id="E3">
<name>归档（Archive）</name>
<unique-code>年月组合（如 "2024-12"）</unique-code>
<classification>
  <by-period>年度 | 月度</by-period>
</classification>
<attributes>
  - 时间段
  - 文章数量
</attributes>
<relations>归档 1:N 随笔</relations>
</entity>

### 2.2 信息流动

<information-flow>
<flow id="F1" name="内容发布">
  作者 → 撰写随笔 → 网站 → 渲染页面 → 读者
</flow>
<flow id="F2" name="内容浏览">
  读者 → 访问网站 → 选择文章/标签/归档 → 阅读内容
</flow>
</information-flow>

</information>

---

## 三、上下文（Context）

<context>

### 3.1 应用上下文

静态个人网站，托管于 cnb.cool，面向公开访问。

### 3.2 技术上下文

- 前端框架：待定（建议 Next.js 或 Astro）
- 内容管理：Markdown 文件
- 部署：cnb.cool Pages 或类似服务
- 无后端数据库，纯静态生成

### 3.3 用户体验上下文

- 情感目标：沉静、专注、深度
- 交互风格：简洁、无干扰、以内容为中心
- 阅读体验：舒适的排版、清晰的层次

</context>

---

## 四、权重矩阵

<weights>

| 实体/交互 | 权重 | 说明 |
|-----------|------|------|
| 随笔内容 | 10 | 核心价值，最高优先级 |
| 阅读体验 | 9 | 直接影响内容传达 |
| 标签分类 | 6 | 辅助内容发现 |
| 归档浏览 | 5 | 次要导航方式 |
| 视觉设计 | 4 | 服务于内容，不喧宾夺主 |

</weights>

---

## 五、验收检查

- [ ] 随笔实体有唯一 slug 标识
- [ ] 标签分类符合作者写作主题
- [ ] 信息流动清晰简洁
- [ ] 技术选型符合静态网站需求
- [ ] 用户体验聚焦深度阅读
