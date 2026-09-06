# 02 · 通用工具

<div class="ab-def">

**只收有桌面版的**——理由见[总览](./)。每个只写"是什么、给谁用、有什么特点"，不写版本号、不排名。**先看你属于哪一类人，再看对应那几个。**

</div>

## 国外

### Claude Code · Anthropic

**是什么**：Anthropic 的编码 Agent。CLI 起家，现在还有桌面应用（macOS / Windows）、网页版和 IDE 插件——同一套能力，四个入口。

**特点**：本书里两个东西出自这条线——[MCP](../agent/04-mcp) 和 [Skill 的 SKILL.md 规范](../skill/03-anatomy)。所以你在 [Skill 篇](../skill/)和 [Agent 篇](../agent/)学的东西，在这里的对应最直接：Skill 放进项目目录就能被自动发现、MCP Server 配上就能用、权限和确认弹窗是内建的。

**给谁**：写代码的；也适合"活主要在本地文件里"的非开发者——它并不只能改代码。

**入口**：[claude.com/product/claude-code](https://claude.com/product/claude-code) · [文档](https://code.claude.com/docs)

**深入**：[Claude Code 中文教程](https://claudebook-e38.pages.dev/)（本站作者写的非官方手册，官方文档重新编排的学习路径，简 / 繁 / 英三语）

---

### Codex · OpenAI

**是什么**：OpenAI 的编码 Agent。跑在 CLI、IDE 插件、ChatGPT 网页、**ChatGPT 桌面应用**（macOS / Windows）以及云端——你可以在本地起个活，也可以丢到云上跑。

**特点**：**多入口 + 云端**是它比较突出的一点。本地跑完可以接着在云上跑，或者反过来。生态上沾 OpenAI 的光，第三方集成多。

**给谁**：写代码的；已经在用 ChatGPT 订阅、不想再开一份账的人。

**入口**：[developers.openai.com/codex](https://developers.openai.com/codex/)

**深入**：[Codex 中文手册](https://neohoy.github.io/codexbook/)（本站作者写的非官方手册，从装上 CLI 到交给 CI，外加官方中文文档镜像）

---

### OpenCode

**是什么**：**开源**的编码 Agent，终端、IDE、桌面三种形态都有。

**特点**：两条很实在——

1. **接谁都行**。号称支持七十多家模型供应商，包括本地跑的模型。你已经有的订阅、你自己的 key、你内网的模型，都能接。
2. **不存你的代码和上下文**。这一条对数据敏感的场景是硬指标。

**给谁**：想自己掌控用哪个模型的；有数据合规要求的；喜欢开源、想改的。

**入口**：[opencode.ai](https://opencode.ai/)

---

### Grok Build · xAI

**是什么**：xAI 的编码 Agent，**终端原生**——一个全屏的终端界面，也能无界面跑脚本。开源（Apache-2.0）。

**特点**：**本地优先**（源码不上传到 xAI 的服务器）、可以同时跑多个并行的 Agent 分头干活。

::: warning 关于"桌面版"
**xAI 官方没有发布 Grok Build 的桌面 GUI**——它是终端工具。社区有人做了第三方桌面壳，但那不是官方的。

如果你的筛选条件是"必须有官方桌面应用"，这一个严格来说不算。列在这里是因为它是这一档里少见的**开源 + 本地优先**选项，而且终端工具对很多人来说并不构成障碍。
:::

**入口**：[docs.x.ai/build](https://docs.x.ai/build/overview) · [GitHub](https://github.com/xai-org/grok-build)

---

## 国内

国内这一片最大的不同是：**除了编码 IDE，还有一类"办公 Agent"** ——面向非开发者，处理的是文档、表格、流程，而不是代码。这一类国外反而少见。

### Trae · 字节跳动

**是什么**：AI 原生的 IDE，桌面应用。国内版和国际版分开。

**特点**：**多模型切换**（不锁死在一家）、**中文优化**，以及除了常规 IDE 模式，还有一个让它自己把活从头干到尾的模式。插件生态比较全。

**给谁**：写代码的，尤其是习惯 IDE、想在多个模型之间切换的。

**入口**：[trae.com.cn](https://www.trae.com.cn/)（国内） · [trae.ai](https://www.trae.ai/)（国际）

---

### Qoder · 阿里

**是什么**：阿里的 AI 编码平台，桌面应用。

**特点**：重心在**项目级的自主开发**——把一个较大的任务委托给它，它自己规划、分解、执行。也支持 [MCP](../agent/04-mcp) 扩展。

跟 Trae 的分工大致是：**Trae 偏"快速出东西"，Qoder 偏"复杂项目的规划和执行"**。但这类定位随版本会变，以实测为准。

**给谁**：写代码的，尤其要做多步骤、跨文件的大改动。

**入口**：[qoder.com](https://qoder.com/)

---

### 豆包 · 字节跳动

**是什么**：字节的 AI 助手，有 PC 客户端。除了常规的聊天助手，还有面向办公场景的产品线（技能、连接器、跟办公套件打通）。

**特点**：**门槛最低的一档**——不需要懂技术，装上就能用，中文场景打磨得细。适合作为很多人从"便签纸"往"工位"迈的第一步。

**给谁**：非技术岗；日常是文档、材料、汇报这类活的人。

**入口**：[doubao.com](https://www.doubao.com/chat/)

**深入**：[豆包工作手册](https://neohoy.github.io/doubaobook/)（本站作者写的非官方手册，界面、技能、连接器、云电脑与飞书打通）

---

### WorkBuddy · 腾讯

**是什么**：腾讯的办公 Agent，桌面应用。定位是"**说一句话，它把活干完**"——它能批量改文件名、整理目录、跑脚本、调外部工具。

**特点**：因为它真能动你的文件，所以**权限沙箱、确认弹窗、自动备份**是它设计里很显眼的一部分。这正好是 [Agent 篇 05 章](../agent/05-boundaries)那套边界的实物版——**能动手的工具，都长这样。**

另外它有技能、连接器、项目、资料库这些概念，对应本书的 [Skill](../skill/) 和 [MCP](../agent/04-mcp)。

**给谁**：非技术岗但活主要落在本地文件上的人（大量文档、素材、报表要处理）。

**入口**：[workbuddy.cn](https://www.workbuddy.cn/)

**深入**：[WorkBuddy 手册](https://neohoy.github.io/workbuddybook/)（本站作者写的非官方手册，三种工作模式、权限沙箱、12 个实战案例）

---

### 还有几个

同一档里的其他选项，一句话带过：

| | 一句话 |
| --- | --- |
| **CodeBuddy**（腾讯） | 腾讯的 AI 编码 IDE，和 Trae / Qoder 同一档 |
| **通义灵码**（阿里） | 阿里的编码助手，插件形态更常见，也有 IDE |
| **Cursor**（国外） | 最早把"AI 原生 IDE"做起来的一批，国内可用性看网络和账号 |

---

## 一张速查表

| | 谁家 | 形态 | 给谁 | 一句话 |
| --- | --- | --- | --- | --- |
| **Claude Code** | Anthropic | CLI + 桌面 + IDE | 开发 / 重度本地文件 | MCP 和 Skill 规范的源头 |
| **Codex** | OpenAI | CLI + 桌面 + 网页 + 云 | 开发 | 多入口，本地云端可切 |
| **OpenCode** | 开源 | 终端 + 桌面 + IDE | 开发 / 要自选模型 | 接七十多家，不存你的代码 |
| **Grok Build** | xAI | 终端（无官方 GUI） | 开发 | 开源、本地优先、多 Agent 并行 |
| **Trae** | 字节 | 桌面 IDE | 开发 | 多模型切换、中文优化 |
| **Qoder** | 阿里 | 桌面 IDE | 开发 | 项目级自主开发 |
| **豆包** | 字节 | 桌面客户端 | **非技术岗** | 门槛最低 |
| **WorkBuddy** | 腾讯 | 桌面 Agent | **非技术岗** | 说一句话把本地的活干完 |

::: tip 上面四个有配套的单独手册
[Claude Code](https://claudebook-e38.pages.dev/) · [Codex](https://neohoy.github.io/codexbook/) · [豆包工作](https://neohoy.github.io/doubaobook/) · [WorkBuddy](https://neohoy.github.io/workbuddybook/)。都是非官方社区教程，选定工具之后再去翻。
:::

<div class="ab-do">

**按人挑，不是按功能挑：**

- **不写代码** → 豆包、WorkBuddy 这一类办公 Agent。别去装 IDE。
- **写代码，想省事** → Claude Code / Codex / Trae / Qoder，挑一个用两周。
- **写代码，在意数据不出去或者要自选模型** → OpenCode、Grok Build 这类开源本地优先的。
- **不确定** → 先别选。回[便签纸](./01-workstation)把方法练熟，撞到墙了自然知道缺什么。

</div>

## 下一步

[03 · 专用工具](./03-specialized)
