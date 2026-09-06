# 大模型手册 · agibook

一份**不绑定任何厂商**的大模型教程，基于 [VitePress](https://vitepress.dev) 构建。简体 / 繁體 双语。

> 五篇一条路：**入门篇**讲清它是什么、为什么会忘会编；**提示词篇**讲怎么把一条提示词调到谁跑都稳定；**Skill 篇**讲怎么把跑通的一步打包成一句话触发的能力；**Workflow 篇**讲怎么把几步串成能验收、错了知道停在哪的流水线；**Agent 篇**讲写不出步骤的那一步怎么放手——给目标、划边界、设上限、做验收（MCP 也在这一篇）。
> 书里的方法在 GPT、Claude、Gemini、DeepSeek、豆包、通义、Kimi 上都成立。

写作原则：**不写会过期的东西**（版本号、价格、上下文窗口的确切数字、模型排行榜一律不写死），只写不会过时的部分。

## 同作者的工具手册

这本书讲**方法**，下面几本讲**某一个工具怎么用**，[工具篇](docs/tools/)里有对应的链接：

[Claude Code 中文教程](https://claudebook-e38.pages.dev/) ·
[Codex 中文手册](https://neohoy.github.io/codexbook/) ·
[豆包工作手册](https://neohoy.github.io/doubaobook/) ·
[WorkBuddy 手册](https://neohoy.github.io/workbuddybook/) ·
[OpenDesign 手册](https://neohoy.github.io/opendesignbook/)

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173/agibook/
npm run build    # 产物在 docs/.vitepress/dist
npm run preview
```

`npm run dev` 和 `npm run build` 会先跑一次 `npm run i18n`，由简体正文生成 `docs/zh-TW/`。繁体目录是生成物，已 gitignore，**不要手改**。

站点部署在 GitHub Pages 子路径 `/agibook/`。换自定义域名或 Vercel / Netlify 时用 `DOCS_BASE=/ npm run build`。

## 目录结构

```
docs/
├── index.md                 首页（hero + HomeExtras 组件）
├── start/                   入门篇（11 篇）
├── models/                  模型篇（5 篇，会过期，只写"谁是谁"）
├── tools/                   工具篇（5 篇，同上）
├── prompt/                  提示词篇（11 篇）
├── skill/                   Skill 篇（11 篇）
├── workflow/                Workflow 篇（11 篇）
├── agent/                   Agent 篇（11 篇，含 MCP）
├── reference/               术语表、提示词模板库、FAQ、来源与致谢
├── zh-TW/                   繁体版（生成物，不进仓库）
├── public/
│   └── logo.svg
└── .vitepress/
    ├── config.mts           站点配置：双语 locale、搜索、SEO
    ├── i18n.mts             导航与侧边栏（[简体, English] 成对定义）
    └── theme/
        ├── index.ts         主题入口
        ├── custom.css       品牌色、首页版块、正文排版、两个自定义块
        ├── HomeExtras.vue   首页自定义版块
        ├── home-data.mjs    首页文案（简体，手写）
        └── home-data.zh-TW.mjs  首页文案（繁体，生成物）
scripts/
├── gen-zh-tw.mjs            简体 → 繁体
└── i18n-terms.mjs           保护词表与 OpenCC 过度转换修正
```

## 内容结构

| 章节 | 篇数 | 内容 |
| --- | --- | --- |
| [入门篇](docs/start/) | 11 | 大模型是什么、天才新人心智模型、Token、上下文窗口、幻觉、Prompt 五要素、System Prompt、会议纪要实操、四阶段全景地图、选型与十条铁律 |
| [模型篇](docs/models/) | 5 | 国外各家、国内各家、按能力分类（文本 / 推理 / 多模态 / 语音 / 嵌入 / 代码）、怎么用这张地图选型 |
| [工具篇](docs/tools/) | 5 | 工位这个概念、通用工具（只收有桌面版的）、专用工具（音乐 / 数字人 / 短剧视频 / 设计）、怎么挑怎么换 |
| [提示词篇](docs/prompt/) | 11 | 好提示词的标准、结构与分隔、Few-shot、让它先想再答、格式钉死、约束与验收、长材料、调试方法、反模式与偏方、完整流程与清单 |
| [Skill 篇](docs/skill/) | 11 | Skill 是什么、什么时候做、三层解剖、description 写法、手把手做纪要 Skill、进阶原型转 PRD、评测驱动、迭代维护、各家落地对照、十个坑 |
| [Workflow 篇](docs/workflow/) | 11 | Workflow 是什么、什么时候串、拆步骤粒度、中间产物、每步设闸、出错兜底、人在环上、纪要→待办→派活实操、用什么串、什么时候升级成 Agent |
| [Agent 篇](docs/agent/) | 11 | 一圈里发生了什么、给目标、工具设计、MCP、划边界、设上限、长跑的上下文、轨迹与复盘、怎么验收、从玩具到能用 |
| [参考](docs/reference/) | 4 | 术语表（32 条）、提示词模板库（11 组）、FAQ、参考来源与致谢 |

主线五篇是一条路，顺序有讲究：**搞懂它是什么 → 把话说清楚 → 说清楚了才值得打包 → 一步跑稳了才谈得上串成几步 → 步骤实在写不出来的那一步，最后才交给 Agent**。倒过来做只会更糟：每一层都会把下一层的不稳定放大。

**模型篇和工具篇不在这条路上**，是两份可以随时回来查的地图——模型是"人"，工具是"工位"。它们是全书仅有的会过期的部分，所以都只写"谁是谁、给谁用"，不写版本号、跑分、价格和排名，每条配官方入口让读者自己核。改动时请守住这条。

入门篇内部的组织逻辑是四个阶段——**跟它说话 → 认清它的边界 → 让它能干活 → 让它自己跑**，每个概念存在都是因为上一阶段不够用。

## 正文里的两个自定义块

写正文时可以直接用（注意 `<div>` 前后要留空行，里面的内容才会按 Markdown 解析）：

```markdown
<div class="ab-def">

**术语**（English）一句话定义。放在概念页开头。

</div>

<div class="ab-do">

行动建议。会自动带上「所以你该怎么做」的标签。

</div>
```

## 繁体转换

简体是唯一手写来源，`docs/zh-TW/` 全量生成。转换规则：

- **代码围栏、行内代码、HTML 标签、URL** 整体保护，不转换；
- **`text` / `markdown` / `bash` 围栏例外** —— 里面装的是发给模型的提示词，繁体读者复制走的应该是繁体提示词，所以照常转换；
- **术语原词**（用「」或 `**`  标注的）保留，词表在 `scripts/i18n-terms.mjs`；
- **站内链接**自动加 `/zh-TW` 前缀。

改完简体正文跑 `npm run i18n` 重新生成。发现某个词转坏了，往 `i18n-terms.mjs` 的 `FIXES` 里加一条。

## 待办

- [ ] RAG 落地
- [ ] 更多实战案例
- [ ] 实战案例篇
- [ ] 英文版（`docs/en/`，导航与侧边栏的英文文案已在 `i18n.mts` 里成对写好，补完页面后在 `config.mts` 里注册 `en` locale 即可）
