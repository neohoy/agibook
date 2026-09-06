// 站点的导航与侧边栏。
//
// 每个条目写成 [简体, English] 一对：
//   - 简体：手写，唯一来源
//   - 繁体：由简体经 OpenCC s2twp 生成，术语原词保留（和正文同一套规则）
//   - 英文：手写。当前站点只发布简体 / 繁体两个版本，英文那一列先备着，
//     等 docs/en/ 补齐后在 config.mts 里注册 en locale 即可启用。
import OpenCC from 'opencc-js'
import { UI_LABELS, FIXES } from '../../scripts/i18n-terms.mjs'

const converter = OpenCC.Converter({ from: 'cn', to: 'twp' })

// 导航里的术语原词同样保留，判定规则和正文完全一致：
// 只有被「」标注的词才保留，否则整份侧边栏会出现「上下文」和「上下文」混排。
const PROTECT = new Set(UI_LABELS)

// 占位符用私有区字符，导航文案里不会出现，OpenCC 也不会动它们
const OPEN = ''
const CLOSE = ''
const RESTORE = new RegExp(OPEN + '(\\d+)' + CLOSE, 'g')

/** 转繁体，但保留「」里的术语原词。规则与 scripts/gen-zh-tw.mjs 一致 */
export function toTW(s: string): string {
  const store: string[] = []
  let t = s

  t = t.replace(/「([^」]+)」/g, (m, inner) =>
    PROTECT.has(inner.trim()) ? OPEN + (store.push(m) - 1) + CLOSE : m
  )

  t = converter(t)
  for (const [from, to] of FIXES) t = t.split(from).join(to)

  return t.replace(RESTORE, (_, i) => store[+i])
}

export type Locale = 'zh-CN' | 'zh-TW' | 'en'

/** [简体, English] */
type Pair = [string, string]

export const prefixOf = (loc: Locale) => (loc === 'en' ? '/en' : loc === 'zh-TW' ? '/zh-TW' : '')

const pick = ([zh, en]: Pair, loc: Locale) =>
  loc === 'en' ? en : loc === 'zh-TW' ? toTW(zh) : zh

// ---------------------------------------------------------------- 导航

const REFERENCE_NAV: [Pair, string][] = [
  [['术语表', 'Glossary'], '/reference/glossary'],
  [['提示词模板库', 'Prompt library'], '/reference/prompts'],
  [['常见问题 FAQ', 'FAQ'], '/reference/faq'],
  [['参考来源与致谢', 'Sources & credits'], '/reference/credits']
]

export function buildNav(loc: Locale) {
  const p = prefixOf(loc)
  return [
    { text: pick(['首页', 'Home'], loc), link: p || '/' },
    {
      text: pick(['入门篇', 'Fundamentals'], loc),
      link: `${p}/start/`,
      activeMatch: `${p}/start/`
    },
    {
      text: pick(['模型与工具', 'Models & tools'], loc),
      activeMatch: `${p}/(models|tools)/`,
      items: [
        { text: pick(['模型篇 · 有哪些模型', 'The models'], loc), link: `${p}/models/` },
        { text: pick(['工具篇 · 有哪些工位', 'The tools'], loc), link: `${p}/tools/` }
      ]
    },
    {
      text: pick(['提示词篇', 'Prompting'], loc),
      link: `${p}/prompt/`,
      activeMatch: `${p}/prompt/`
    },
    {
      text: pick(['Skill 篇', 'Skills'], loc),
      link: `${p}/skill/`,
      activeMatch: `${p}/skill/`
    },
    {
      text: pick(['Workflow 篇', 'Workflows'], loc),
      link: `${p}/workflow/`,
      activeMatch: `${p}/workflow/`
    },
    {
      text: pick(['Agent 篇', 'Agents'], loc),
      link: `${p}/agent/`,
      activeMatch: `${p}/agent/`
    },
    {
      text: pick(['参考', 'Reference'], loc),
      activeMatch: `${p}/reference/`,
      items: REFERENCE_NAV.map(([pair, link]) => ({ text: pick(pair, loc), link: p + link }))
    }
  ]
}

// ---------------------------------------------------------------- 侧边栏

type Row = [Pair, string]

const START: Row[] = [
  [['总览：一小时把大模型搞明白', 'Overview: the whole model in an hour'], '/start/'],
  [['01 · 大模型是什么', '01 · What a large language model is'], '/start/01-what-is-llm'],
  [['02 · 心智模型：一个天才新人', '02 · The mental model: a genius new hire'], '/start/02-mental-model'],
  [['03 · Token：它眼里的世界，也是你的账单', '03 · Tokens: its unit, and your bill'], '/start/03-token'],
  [['04 · 上下文窗口：它为什么会忘', '04 · The context window: why it forgets'], '/start/04-context'],
  [['05 · 幻觉：它为什么会编', '05 · Hallucination: why it makes things up'], '/start/05-hallucination'],
  [['06 · Prompt 五要素', '06 · The five parts of a prompt'], '/start/06-prompt'],
  [['07 · System Prompt 与多轮对话', '07 · System prompts and multi-turn chat'], '/start/07-system-prompt'],
  [['08 · 上手：把乱记录变成能派活的纪要', '08 · Your first real task'], '/start/08-first-task'],
  [['09 · 全景地图：Prompt / Skill / Agent / MCP', '09 · The map: prompt, skill, agent, MCP'], '/start/09-map'],
  [['10 · 选模型、选工具，和十条铁律', '10 · Picking a model, and ten rules'], '/start/10-choose-and-rules']
]

const MODELS: Row[] = [
  [['总览：模型地图', 'Overview: the model map'], '/models/'],
  [['01 · 国外的几家', '01 · The overseas labs'], '/models/01-overseas'],
  [['02 · 国内的几家', '02 · The Chinese labs'], '/models/02-china'],
  [['03 · 按能力分类', '03 · By capability'], '/models/03-modalities'],
  [['04 · 怎么用这张地图', '04 · Using the map'], '/models/04-how-to-choose']
]

const TOOLS: Row[] = [
  [['总览：工位', 'Overview: the workstation'], '/tools/'],
  [['01 · 工位凭什么不一样', '01 · Why a desktop tool is different'], '/tools/01-workstation'],
  [['02 · 通用工具', '02 · General-purpose tools'], '/tools/02-general'],
  [['03 · 专用工具', '03 · Specialized tools'], '/tools/03-specialized'],
  [['04 · 怎么挑、怎么换', '04 · Picking and switching'], '/tools/04-choose']
]

const PROMPT: Row[] = [
  [['总览：从「能用」到「每次都能用」', 'Overview: from working to reliable'], '/prompt/'],
  [['01 · 好提示词的标准', '01 · What good looks like'], '/prompt/01-what-good-looks-like'],
  [['02 · 结构与分隔', '02 · Structure and delimiters'], '/prompt/02-structure'],
  [['03 · 给例子：Few-shot', '03 · Show, don\'t describe'], '/prompt/03-examples'],
  [['04 · 让它先想再答', '04 · Make it think first'], '/prompt/04-thinking'],
  [['05 · 把输出格式钉死', '05 · Pin down the output'], '/prompt/05-format'],
  [['06 · 约束与验收', '06 · Constraints that hold'], '/prompt/06-constraints'],
  [['07 · 长材料怎么喂', '07 · Feeding long inputs'], '/prompt/07-long-input'],
  [['08 · 像调 bug 一样调提示词', '08 · Debug it like code'], '/prompt/08-iterate'],
  [['09 · 反模式与民间偏方', '09 · Anti-patterns and folk remedies'], '/prompt/09-antipatterns'],
  [['10 · 完整流程与自检清单', '10 · The workflow and the checklist'], '/prompt/10-checklist']
]

const SKILL: Row[] = [
  [['总览：从每次重讲，到一次写好', 'Overview: write it once'], '/skill/'],
  [['01 · Skill 是什么', '01 · What a skill is'], '/skill/01-what-is-skill'],
  [['02 · 什么时候该做成 Skill', '02 · When to build one'], '/skill/02-when'],
  [['03 · 一个 Skill 的解剖', '03 · Anatomy of a skill'], '/skill/03-anatomy'],
  [['04 · description 怎么写', '04 · Writing the description'], '/skill/04-description'],
  [['05 · 手把手写第一个', '05 · Build your first one'], '/skill/05-write-one'],
  [['06 · 进阶：原型转 PRD', '06 · Advanced: prototype to PRD'], '/skill/06-prd-skill'],
  [['07 · 先写测试再写正文', '07 · Test first, write second'], '/skill/07-test'],
  [['08 · 迭代与维护', '08 · Iterating and maintaining'], '/skill/08-iterate'],
  [['09 · 各家怎么落地', '09 · Where skills live'], '/skill/09-platforms'],
  [['10 · 十个坑', '10 · Ten pitfalls'], '/skill/10-pitfalls']
]

const WORKFLOW: Row[] = [
  [['总览：把几步串成一条流水线', 'Overview: chaining the steps'], '/workflow/'],
  [['01 · Workflow 是什么', '01 · What a workflow is'], '/workflow/01-what-is-workflow'],
  [['02 · 什么时候该串起来', '02 · When to chain'], '/workflow/02-when'],
  [['03 · 拆步骤：粒度怎么定', '03 · Decomposition and granularity'], '/workflow/03-decompose'],
  [['04 · 步骤之间传什么', '04 · What passes between steps'], '/workflow/04-handoff'],
  [['05 · 每一步都要能验收', '05 · A gate after every step'], '/workflow/05-checkpoints'],
  [['06 · 出错、重试与兜底', '06 · Failures, retries, fallbacks'], '/workflow/06-failures'],
  [['07 · 人在环上', '07 · Human in the loop'], '/workflow/07-human-in-the-loop'],
  [['08 · 实操：纪要 → 待办 → 派活', '08 · Hands-on: notes to assignments'], '/workflow/08-hands-on'],
  [['09 · 用什么串', '09 · What to build it with'], '/workflow/09-tools'],
  [['10 · 什么时候该升级成 Agent', '10 · When to reach for an agent'], '/workflow/10-when-agent']
]

const AGENT: Row[] = [
  [['总览：放手，但别撒手', 'Overview: hands off, not hands up'], '/agent/'],
  [['01 · 一圈里发生了什么', '01 · What happens in one loop'], '/agent/01-anatomy'],
  [['02 · 给目标', '02 · Writing the goal'], '/agent/02-goal'],
  [['03 · 给它手：工具怎么设计', '03 · Designing its tools'], '/agent/03-tools'],
  [['04 · MCP：一个统一的插头', '04 · MCP: one plug for everything'], '/agent/04-mcp'],
  [['05 · 划边界', '05 · Drawing boundaries'], '/agent/05-boundaries'],
  [['06 · 设上限：失控的四种形状', '06 · Limits: four ways it runs away'], '/agent/06-limits'],
  [['07 · 长跑的上下文', '07 · Context on a long run'], '/agent/07-context'],
  [['08 · 看得见：轨迹与复盘', '08 · Traces and post-mortems'], '/agent/08-observe'],
  [['09 · 怎么验收', '09 · Accepting the result'], '/agent/09-accept'],
  [['10 · 从玩具到能用', '10 · From toy to trusted'], '/agent/10-ship']
]

const REFERENCE: Row[] = REFERENCE_NAV

const GROUP_TITLES: Record<string, Pair> = {
  start: ['入门篇', 'Fundamentals'],
  models: ['模型篇', 'The models'],
  tools: ['工具篇', 'The tools'],
  prompt: ['提示词篇', 'Prompting'],
  skill: ['Skill 篇', 'Skills'],
  workflow: ['Workflow 篇', 'Workflows'],
  agent: ['Agent 篇', 'Agents'],
  reference: ['参考', 'Reference']
}

const group = (key: keyof typeof GROUP_TITLES, rows: Row[], loc: Locale) => {
  const p = prefixOf(loc)
  return [
    {
      text: pick(GROUP_TITLES[key], loc),
      collapsed: false,
      items: rows.map(([pair, link]) => ({ text: pick(pair, loc), link: p + link }))
    }
  ]
}

export function buildSidebar(loc: Locale) {
  const p = prefixOf(loc)
  return {
    [`${p}/start/`]: group('start', START, loc),
    [`${p}/models/`]: group('models', MODELS, loc),
    [`${p}/tools/`]: group('tools', TOOLS, loc),
    [`${p}/prompt/`]: group('prompt', PROMPT, loc),
    [`${p}/skill/`]: group('skill', SKILL, loc),
    [`${p}/workflow/`]: group('workflow', WORKFLOW, loc),
    [`${p}/agent/`]: group('agent', AGENT, loc),
    [`${p}/reference/`]: group('reference', REFERENCE, loc)
  }
}

// ---------------------------------------------------------------- 主题文案

const FOOTER: Record<Locale, { message: string; copyright: string }> = {
  'zh-CN': {
    message: '一份讲通用概念的入门手册 · 不绑定任何一家模型或工具 · 例子可直接照抄',
    copyright: 'Copyright © 2026 大模型手册'
  },
  'zh-TW': {
    message: toTW('一份讲通用概念的入门手册 · 不绑定任何一家模型或工具 · 例子可直接照抄'),
    copyright: toTW('Copyright © 2026 大模型手册')
  },
  en: {
    message: 'A vendor-neutral primer on large language models · every example is copy-paste ready',
    copyright: 'Copyright © 2026 The LLM Handbook'
  }
}

const UI: Record<Locale, Record<string, string>> = {
  'zh-CN': {
    outline: '本页目录',
    prev: '上一篇',
    next: '下一篇',
    appearance: '外观',
    toLight: '切换到浅色模式',
    toDark: '切换到深色模式',
    menu: '目录',
    top: '回到顶部',
    lang: '切换语言',
    updated: '最后更新于'
  },
  'zh-TW': {
    outline: '本頁目錄',
    prev: '上一篇',
    next: '下一篇',
    appearance: '外觀',
    toLight: '切換到淺色模式',
    toDark: '切換到深色模式',
    menu: '目錄',
    top: '回到頂部',
    lang: '切換語言',
    updated: '最後更新於'
  },
  en: {
    outline: 'On this page',
    prev: 'Previous',
    next: 'Next',
    appearance: 'Appearance',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    menu: 'Menu',
    top: 'Back to top',
    lang: 'Change language',
    updated: 'Last updated'
  }
}

export function buildThemeConfig(loc: Locale) {
  const ui = UI[loc]
  return {
    nav: buildNav(loc),
    sidebar: buildSidebar(loc),
    outline: { level: [2, 3] as [number, number], label: ui.outline },
    docFooter: { prev: ui.prev, next: ui.next },
    darkModeSwitchLabel: ui.appearance,
    lightModeSwitchTitle: ui.toLight,
    darkModeSwitchTitle: ui.toDark,
    sidebarMenuLabel: ui.menu,
    returnToTopLabel: ui.top,
    langMenuLabel: ui.lang,
    lastUpdated: {
      text: ui.updated,
      formatOptions: { dateStyle: 'short', timeStyle: 'short' } as const
    },
    footer: FOOTER[loc]
  }
}
