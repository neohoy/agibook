#!/usr/bin/env node
// 由 docs/（zh-CN）生成 docs/zh-TW/。
//
// 简体是唯一的手写来源，繁体全量生成。日后若加英文版（docs/en/），它独立手写，不参与转换。
//
// 保护以下内容不做简繁转换：代码类围栏块、行内代码、HTML 标签、URL、
// 界面标签。其余走 OpenCC s2twp（简体 → 繁体含台湾用词）。
//
// 一个例外：```text 和 ```markdown 围栏里的内容照常转换。
// 这两类装的是提示词，是给模型看的自然语言，不是要跟界面上某个字符串对上
// 号的东西。繁体读者复制走的应该是繁体提示词。
// ```bash / ```js 这类真代码仍然整体保护。
//
// 用法：npm run i18n
import fs from 'node:fs'
import path from 'node:path'
import OpenCC from 'opencc-js'
import { UI_LABELS, PROMPT_PHRASES, FIXES } from './i18n-terms.mjs'

const SRC = 'docs'
const OUT = 'docs/zh-TW'
const SKIP = new Set(['zh-TW', 'en', '.vitepress', 'public'])

const convert = OpenCC.Converter({ from: 'cn', to: 'twp' })

// 长词优先，避免「技能」抢在「技能市场」之前被替换掉
const PROTECT = [...UI_LABELS, ...PROMPT_PHRASES].sort((a, b) => b.length - a.length)

// 这几类围栏里的内容要跟着正文一起转成繁体：
//   text / markdown —— 提示词和 SKILL.md 草稿，是给模型看的自然语言
//   bash —— 命令本身是 ASCII，OpenCC 不会动；变的只有注释和示例文案
// 注意：哪天 bash 例子里需要一个必须保持简体的中文字面量（比如 grep 的
// 模式串），把它从这个集合里去掉，或者给那一段单独加保护。
const PROSE_FENCES = new Set(['text', 'markdown', 'bash'])

// 占位符用私有区字符：正文里不会出现，OpenCC 也不会动它们
const OPEN = '\uE000'
const CLOSE = '\uE001'

function transform(md) {
  const store = []
  const stash = (s) => OPEN + (store.push(s) - 1) + CLOSE

  let t = md
  // 代码类围栏整体保护；text / markdown 围栏只保护围栏标记本身，内容照常转换。
  // 支持三个以上反引号的围栏（正文里展示「一份 SKILL.md 长什么样」时会用四个，
  // 里面还嵌着三个反引号的模板），闭合标记必须和开启的长度一致。
  t = t.replace(/^(`{3,})([^\n]*)\n([\s\S]*?)^\1`*$/gm, (m, ticks, lang, body) =>
    PROSE_FENCES.has(lang.trim())
      ? stash(ticks + lang + '\n') + body + stash(ticks)
      : stash(m)
  )
  t = t.replace(/`[^`\n]+`/g, (m) => stash(m)) // 行内代码
  t = t.replace(/<[^>]+>/g, (m) => stash(m)) // HTML 标签本身（标签间文字仍转换）
  t = t.replace(/https?:\/\/[^\s)"'\]]+/g, (m) => stash(m)) // URL

  // 界面标签只在「被当作标签用」时保留简体，普通行文照常转换。
  // 判定依据是排版标记：「X」或 **X**，正文里就是这么标注界面元素的。
  // 否则「项目」「工作空间」「资料库」这类高频词会让整页简繁混排。
  const isLabel = (s) => PROTECT.includes(s.trim())
  t = t.replace(/「([^」\n]+)」/g, (m, inner) => (isLabel(inner) ? stash(m) : m))
  t = t.replace(/\*\*([^*\n]+)\*\*/g, (m, inner) => (isLabel(inner) ? stash(m) : m))
  // 提示词片段无论有没有排版标记都要保留，读者会原样复制
  for (const term of PROMPT_PHRASES) t = t.split(term).join(stash(term))

  t = convert(t)
  for (const [from, to] of FIXES) t = t.split(from).join(to)

  // 还原（占位符可能嵌套，循环到不再变化）
  const re = new RegExp(OPEN + '(\\d+)' + CLOSE, 'g')
  let prev
  do {
    prev = t
    t = t.replace(re, (_, i) => store[+i])
  } while (t !== prev)

  // HTML 标签整体被保护了，但 alt / title 是给读者和屏幕阅读器看的文字，要转
  t = t.replace(/\b(alt|title)="([^"]*)"/g, (_, attr, val) => `${attr}="${convert(val)}"`)

  // 站内链接加 /zh-TW 前缀；/img/、/logo.svg 等静态资源各语言共用，不加
  const keep = /^\/(img\/|zh-TW\/|en\/|logo\.svg)/
  t = t.replace(/\]\((\/[^)]*)\)/g, (m, u) => (keep.test(u) ? m : `](/zh-TW${u})`))
  t = t.replace(/href="(\/[^"]*)"/g, (m, u) => (keep.test(u) ? m : `href="/zh-TW${u}"`))
  // frontmatter 里的 link:（首页 hero 按钮就在这里，漏了会跳回简体版）
  t = t.replace(/^(\s*link:\s*)(\/[^\s]*)$/gm, (m, k, u) => (keep.test(u) ? m : `${k}/zh-TW${u}`))
  return t
}

function walk(dir, rel = '') {
  let n = 0
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue
    const full = path.join(dir, name)
    if (fs.statSync(full).isDirectory()) {
      n += walk(full, path.join(rel, name))
    } else if (name.endsWith('.md')) {
      const outPath = path.join(OUT, rel, name)
      fs.mkdirSync(path.dirname(outPath), { recursive: true })
      fs.writeFileSync(outPath, transform(fs.readFileSync(full, 'utf8')))
      n++
    }
  }
  return n
}

fs.rmSync(OUT, { recursive: true, force: true })
console.log(`已生成 ${walk(SRC)} 个繁体页面 → ${OUT}/`)

// 首页版块文案也生成一份繁体，供 HomeExtras.vue 按语言取用
const HOME_SRC = 'docs/.vitepress/theme/home-data.mjs'
const HOME_OUT = 'docs/.vitepress/theme/home-data.zh-TW.mjs'
const homeSrc = fs.readFileSync(HOME_SRC, 'utf8')
const header =
  '// 本文件由 scripts/gen-zh-tw.mjs 自动生成，请勿手改。\n' +
  '// 改 home-data.mjs 后跑 npm run i18n 重新生成。\n'
fs.writeFileSync(HOME_OUT, header + transform(homeSrc.replace(/^\/\/.*\n/, '')))
console.log(`已生成繁体首页文案 → ${HOME_OUT}`)
