# CLAUDE.md

本文件为 Claude Code 提供项目上下文指导。

## 项目概述

这是一个项目工作空间，包含文档、规格说明和开发资源。

## 开发环境

- **设备**：搭载 Apple 芯片的 Mac 电脑
- **操作系统**：macOS
- **Node.js 管理**：通过 bun 进行安装管理
- **Python 环境**：通过 uv 配置
- **Git 代码托管平台**：cnb.cool

## 项目结构

```
├── .42cog/          # 认知敏捷法文档
├── .42plugin/       # 插件和 Skills
├── chat/            # 聊天相关
├── notes/           # 笔记文档
├── scripts/         # 脚本文件
├── source/          # 源文件
├── spec/            # 规格说明文档
│   ├── dev/         # 开发规格
│   └── pm/          # 产品管理规格
└── src/             # 源代码
```

## 注意事项

- 所有沟通和回复请使用**中文**
- 使用 `bun` 而非 `npm` 或 `yarn` 管理 Node.js 依赖
- 使用 `uv` 而非 `pip` 管理 Python 依赖
- Git 远程仓库使用 cnb.cool 平台

## 常用命令

```bash
# Node.js 依赖管理
bun install          # 安装依赖
bun add <package>    # 添加依赖
bun run <script>     # 运行脚本

# Python 环境管理
uv venv              # 创建虚拟环境
uv pip install       # 安装依赖
uv run               # 运行 Python 脚本
```
