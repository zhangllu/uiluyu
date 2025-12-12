# 路屿个人网站 - 现实约束文档

<meta>
  <document-id>uiluyu-real</document-id>
  <version>1.0.0</version>
  <project>路屿个人网站</project>
  <type>现实约束</type>
  <created>2024-12-12</created>
</meta>

## 文档说明

本文档定义路屿个人网站项目的现实约束，确保 AI 协作时遵守关键规则，避免造成现实损害。

<constraints>

## 必选约束（4条）

<constraint required="true" id="C1">
<title>内容原创性</title>
<description>所有发布的随笔内容必须为原创或明确标注引用来源</description>
<rationale>个人网站代表作者身份，抄袭会损害作者声誉</rationale>
<violation-consequence>知识产权纠纷、个人品牌受损</violation-consequence>
</constraint>

<constraint required="true" id="C2">
<title>隐私保护</title>
<description>不得在公开内容中暴露他人隐私信息（真实姓名、联系方式等）</description>
<rationale>保护文章中涉及人物的隐私权</rationale>
<violation-consequence>法律风险、人际关系损害</violation-consequence>
</constraint>

<constraint required="true" id="C3">
<title>版本控制</title>
<description>所有代码变更必须通过 Git 提交，使用 cnb.cool 作为远程仓库</description>
<rationale>确保代码可追溯、可回滚</rationale>
<violation-consequence>代码丢失、无法恢复历史版本</violation-consequence>
</constraint>

<constraint required="true" id="C4">
<title>环境一致性</title>
<description>Node.js 使用 bun 管理，Python 使用 uv 管理</description>
<rationale>保持开发环境一致，避免依赖冲突</rationale>
<violation-consequence>环境不一致导致部署失败</violation-consequence>
</constraint>

## 可选约束（3条）

<constraint required="false" id="C5">
<title>中文优先</title>
<description>所有文档、注释、提交信息优先使用中文</description>
<rationale>符合作者写作习惯，便于内容管理</rationale>
</constraint>

<constraint required="false" id="C6">
<title>简洁设计</title>
<description>UI 设计遵循简洁原则，突出内容本身</description>
<rationale>个人随笔网站应以阅读体验为核心</rationale>
</constraint>

<constraint required="false" id="C7">
<title>渐进增强</title>
<description>优先保证核心阅读功能，再逐步添加交互特性</description>
<rationale>避免过度设计，聚焦作品产出</rationale>
</constraint>

</constraints>

## 技术环境

<environment>
<stack>
  - 设备：Apple 芯片 Mac
  - Node.js 管理：bun
  - Python 管理：uv
  - 代码托管：cnb.cool
  - 仓库地址：https://cnb.cool/luyu1008/uiluyu
</stack>
</environment>

## 约束检查清单

- [ ] 内容是否原创或已标注来源
- [ ] 是否保护了他人隐私
- [ ] 代码是否已提交到 Git
- [ ] 是否使用正确的包管理工具
