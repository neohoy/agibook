import { defineConfig } from 'vitepress'
import { buildThemeConfig, toTW } from './i18n.mts'

const ZH_DESC =
  '大模型入门手册：从「它只是在预测下一个字」讲起，把 Token、上下文窗口、幻觉、Prompt 五要素、System Prompt、Agent、MCP 这些词一次讲清楚，配一个从乱记录到会议纪要的完整实操。不绑定任何一家模型。'
const EN_DESC =
  'A vendor-neutral guide to large language models in five parts: the fundamentals (tokens, context, hallucination, the five parts of a prompt), reliable prompting, packaging what works into reusable skills, chaining steps into a workflow you can inspect, and — for the step you cannot script — running an agent with real boundaries, limits and acceptance criteria. Includes MCP.'

export default defineConfig({
  // 部署在 GitHub Pages 子路径 neohoy.github.io/agibook/
  // 换自定义域名或 Vercel / Netlify 时用 DOCS_BASE=/ 覆盖
  base: process.env.DOCS_BASE || '/agibook/',
  cleanUrls: false,
  lastUpdated: true,
  ignoreDeadLinks: false,

  head: [
    ['meta', { name: 'theme-color', content: '#0E7C7B' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '大模型手册｜从入门到 Prompt、Skill、Workflow、Agent 的通用教程' }],
    ['meta', { property: 'og:description', content: ZH_DESC }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '大模型,LLM,大模型入门,大模型对比,国产大模型,GPT,Claude,Gemini,Grok,DeepSeek,豆包,通义千问,Qwen,混元,Kimi,智谱,GLM,MiniMax,文心一言,星火,多模态大模型,语音大模型,ASR,TTS,Embedding,Claude Code,Codex,OpenCode,Grok Build,Trae,Qoder,WorkBuddy,Cursor,AI IDE,Suno,HeyGen,数字人,AI 短剧,Flova,LibTV,OpenDesign,提示词,Prompt,提示词工程,Prompt Engineering,Few-shot,思维链,Token,上下文窗口,幻觉,System Prompt,Skill,SKILL.md,Agent Skills,Workflow,工作流,AI 工作流,编排,RAG,Function Calling,工具调用,Agent,智能体,AI Agent,MCP,Model Context Protocol,MCP Server,AI 教程,会议纪要,PRD'
      }
    ]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '大模型手册',
      titleTemplate: ':title | 大模型手册',
      description: ZH_DESC,
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: '大模型手册',
        ...buildThemeConfig('zh-CN')
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      title: toTW('大模型手册'),
      titleTemplate: `:title | ${toTW('大模型手册')}`,
      description: toTW(ZH_DESC),
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: toTW('大模型手册'),
        ...buildThemeConfig('zh-TW')
      }
    }
    // en 版本待补：写完 docs/en/ 后在这里注册即可，
    // 导航与侧边栏的英文文案已在 i18n.mts 里成对写好。
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '展开详情',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          },
          'zh-TW': {
            translations: {
              button: { buttonText: '搜尋文件', buttonAriaLabel: '搜尋文件' },
              modal: {
                noResultsText: '沒有找到相關結果',
                resetButtonTitle: '清除查詢條件',
                displayDetails: '展開詳情',
                footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' }
              }
            }
          }
        }
      }
    }
  }
})
