// 首页版块文案（简体）。
// 繁体版由 scripts/gen-zh-tw.mjs 生成 home-data.zh-TW.mjs。

export const paths = [
  {
    tag: '入门篇 · 11 篇',
    title: '先搞懂它是个什么东西',
    desc: '从「它只是在预测下一个字」讲起。把它当成一个刚入职的天才新人——很能干，但不懂你们的规矩、你不说清就自由发挥、答不上来还会编。',
    items: [
      'Token 与上下文窗口：它为什么会忘',
      '幻觉：它为什么会编，什么时候最容易编',
      'Prompt 五要素：把话说到它不用猜',
      '十分钟实操：乱记录变成能派活的纪要'
    ],
    link: '/start/',
    linkText: '进入入门篇',
    note: '读完能一句话讲清它为什么会编'
  },
  {
    tag: '提示词篇 · 11 篇',
    title: '让结果每次都能用',
    desc: '能写出一条「这次挺好」的提示词，和能写出一条「谁跑、跑几次都稳定」的提示词，是两件事。这一篇讲后者。',
    items: [
      '把形容词换成结构，稳定性自己就回来了',
      '每个禁止配一个出路，治幻觉和乱填',
      '给例子比给形容词管用，但有四条规矩',
      '建一个五条的测试集，把手艺变成工程'
    ],
    link: '/prompt/',
    linkText: '进入提示词篇',
    note: '适合已经用了一阵、开始被不稳定折磨的人'
  },
  {
    tag: 'Skill 篇 · 11 篇',
    title: '把跑通的一步打包',
    desc: '同一段话贴了第三次，就该把它存起来了。Skill 是给 AI 的那本 SOP 手册：一次写好，一句话触发，团队用的是同一版。',
    items: [
      'description 决定它会不会被用上',
      '正文只写「我们这儿不一样」的部分',
      '手把手做两个：会议纪要、原型转 PRD',
      '先测出它会错在哪，再写刚好能修好的内容'
    ],
    link: '/skill/',
    linkText: '进入 Skill 篇',
    note: '前提是那条提示词已经调稳了'
  },
  {
    tag: 'Workflow 篇 · 11 篇',
    title: '把几步串成流水线',
    desc: '大多数人以为自己需要一个 Agent，其实需要的是一条 Workflow——你把步骤定死，它照着走。慢一点，但每次都一样，错了知道停在第几步。',
    items: [
      '拆步骤：说不清产出，就是拆错了',
      '中间产物要可读、可查、可重跑',
      '每一步都设闸，别等最后才看',
      '人在环上：哪几步必须人点头'
    ],
    link: '/workflow/',
    linkText: '进入 Workflow 篇',
    note: '串联会放大不稳定，先把每一步调稳'
  },
  {
    tag: 'Agent 篇 · 11 篇',
    title: '写不出步骤的那一步',
    desc: '剩下那种你画不出流程图的活——下一步干什么，取决于上一步看到了什么。这时候才轮到 Agent：给目标、划边界、设上限、然后放手。MCP 也在这一篇。',
    items: [
      '给目标：最该花力气的是「什么算做完」',
      '能靠「不给工具」解决的，别靠说服解决',
      '失控的四种形状，和四道必设的闸',
      '没有依据的输出，验收成本高到不值得用'
    ],
    link: '/agent/',
    linkText: '进入 Agent 篇',
    note: '能力靠模型，工具和边界靠你'
  }
]

export const tasks = [
  { title: '它为什么一本正经地编？', desc: '幻觉不是 bug，是机制的副产物', link: '/start/05-hallucination.html' },
  { title: '聊久了它就忘，怎么办？', desc: '上下文窗口，和它其实没有记忆这件事', link: '/start/04-context.html' },
  { title: '我想马上做出个东西', desc: '十分钟：乱记录变成能派活的纪要', link: '/start/08-first-task.html' },
  { title: '市面上都有哪些模型？', desc: '国外国内各家是谁，以什么见长', link: '/models/' },
  { title: '文本、多模态、语音有什么区别', desc: '哪一类模型解决哪一类问题', link: '/models/03-modalities.html' },
  { title: '我该用哪家？', desc: '先按硬约束筛，再二十分钟测一遍', link: '/models/04-how-to-choose.html' },
  { title: '有哪些工具能装？', desc: '只收有桌面版的：能读你文件那一类', link: '/tools/02-general.html' },
  { title: 'Suno、HeyGen 这些算什么', desc: '卖的不是模型，是封装好的流水线', link: '/tools/03-specialized.html' },
  { title: '桌面工具会不会把我文件搞坏', desc: '沙箱、目录白名单、版本控制五条底线', link: '/tools/04-choose.html' },
  { title: '同一条提示词，结果时好时坏', desc: '不稳定和「提示词太松」是同一件事', link: '/prompt/01-what-good-looks-like.html' },
  { title: '写了「不要编造」，它还是编', desc: '每个禁止，都要配一个替代动作', link: '/prompt/06-constraints.html' },
  { title: '同一段话我贴了第三次', desc: '该做成 Skill 了：五个信号，三种例外', link: '/skill/02-when.html' },
  { title: '我的 Skill 从来不触发', desc: '九成是那一句 description 没写对', link: '/skill/04-description.html' },
  { title: '我一直在复制粘贴中间结果', desc: '那个动作就是流水线里缺的一根管子', link: '/workflow/02-when.html' },
  { title: '我该上 Agent 还是 Workflow？', desc: '区别只有一个：谁来决定走几步', link: '/workflow/10-when-agent.html' },
  { title: 'Agent 跑起来就停不下来', desc: '失控的四种形状，和四道必设的闸', link: '/agent/06-limits.html' },
  { title: 'MCP 到底是什么？要不要学', desc: '一个统一的插头，以及装之前该看什么', link: '/agent/04-mcp.html' },
  { title: '这个词又是什么意思？', desc: '32 条术语，一页查完', link: '/reference/glossary.html' }
]

export const flow = [
  {
    title: '跟它说话',
    desc: '你给什么，它接什么。同一个模型，话说得清不清楚，结果天差地别。',
    terms: 'Prompt · System Prompt · Few-shot'
  },
  {
    title: '认清它的边界',
    desc: '说得再好它也会忘、也会编。知道边界在哪，那些技巧就不用背了。',
    terms: 'Token · 上下文窗口 · 幻觉'
  },
  {
    title: '让它能干活',
    desc: '光会说不够，得让输出能被程序用，也得让它知道它本来不知道的事。',
    terms: '结构化输出 · Function Calling · RAG · 微调'
  },
  {
    title: '让它连着跑',
    desc: '每一步都要你盯太累。先把步骤定死连起来；实在定不下来的那一步，才交给它自己拆——然后给它划边界、设上限。',
    terms: 'Skill · Workflow · Agent · MCP'
  }
]

export const sources = [
  {
    n: '01',
    title: '大模型关键词全解',
    from: '卡码网笔记 · 本书术语分类框架的参考',
    url: 'https://notes.kamacoder.com/llm/intro/llm_keywords.html'
  },
  {
    n: '02',
    title: 'Prompt engineering',
    from: 'OpenAI 官方指南 · 提示词写法',
    url: 'https://platform.openai.com/docs/guides/prompt-engineering'
  },
  {
    n: '03',
    title: 'Prompt engineering overview',
    from: 'Anthropic 官方指南 · 提示词写法',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview'
  },
  {
    n: '04',
    title: 'Prompt Engineering Guide（中文）',
    from: '社区维护 · 各类提示词技巧的合集',
    url: 'https://www.promptingguide.ai/zh'
  },
  {
    n: '05',
    title: 'Agent Skills 概览',
    from: 'Anthropic 官方文档 · Skill 三层结构的依据',
    url: 'https://platform.claude.com/docs/en/docs/agents-and-tools/agent-skills/overview'
  },
  {
    n: '06',
    title: 'Skill 编写最佳实践',
    from: 'Anthropic 官方文档 · description 写法与评测驱动',
    url: 'https://platform.claude.com/docs/en/docs/agents-and-tools/agent-skills/best-practices'
  },
  {
    n: '07',
    title: 'Model Context Protocol',
    from: 'MCP 官方站 · 想深挖 MCP 从这里进',
    url: 'https://modelcontextprotocol.io/'
  },
  {
    n: '08',
    title: 'Lost in the Middle',
    from: '论文 · 长上下文里「中间读漏」现象的出处',
    url: 'https://arxiv.org/abs/2307.03172'
  }
]

export const ui = {
  localeNote:
    '<strong>关于本站</strong>：一份讲通用概念的大模型入门手册，<strong>不绑定任何一家模型或工具</strong>——' +
    '书里的方法在 GPT、Claude、Gemini、DeepSeek、豆包、通义、Kimi 上都成立。' +
    '刻意不写版本号、价格和排行榜，那些下个月就变；只写不会过时的部分。' +
    '正文里用「」标注的是术语原词，方便你拿去搜。',
  stats: [
    { n: '65', label: '篇正文' },
    { n: '4', label: '个认知阶段' },
    { n: '32', label: '条术语' },
    { n: '11', label: '组可复制提示词' }
  ],
  pathsTitle: '五篇，一条路',
  pathsLede:
    '顺序是有讲究的：先搞懂它是什么，才谈得上把话说清楚；话说清楚了才值得打包；一步跑稳了才谈得上串成几步；步骤实在写不出来的那一步，最后才交给 Agent。跳着读可以，但别倒过来——每一层都会把下一层的不稳定放大。另有两篇不在主线上的地图——「模型篇」讲有哪些模型（人），「工具篇」讲有哪些工位（壳），随时可以回来查。',
  tasksTitle: '带着问题进来',
  tasksLede: '这些是最常撞上的墙。点进去就是答案那一章，不用先读完前面。',
  flowTitle: '所有那些词，其实排成一条线',
  flowLede:
    '刷到的名词多到吓人，但它们有顺序：每个东西存在，都是因为上一阶段不够用。看懂这条线，你就知道哪些现在该学、哪些知道有这么个东西就行。',
  sourcesTitle: '内容来自哪里',
  sourcesLede:
    '骨架来自一套线下培训讲义（那个「天才新人」的比喻和五要素），术语的分类框架参考了卡码网的关键词梳理，Skill 的结构依据各家官方文档中写得最细的那一套，其余是实际使用记录。完整说明见「参考来源与致谢」。',
  outroTitle: '别读了，去跑一遍',
  outroLede:
    '读一百页不如亲手跑通一次。挑一段你手头真实的乱记录——上周的会、这周的工作流水、一个说不清的需求——照着入门篇第 8 章做十分钟。做完你对它的理解会比读完整本书还多。',
  outroBtn1: '十分钟做出第一个成品',
  outroBtn2: '提示词模板库'
}
