<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import * as zhCN from './home-data.mjs'
import * as zhTW from './home-data.zh-TW.mjs'

const { lang } = useData()

const loc = computed<'zh-CN' | 'zh-TW'>(() => (lang.value === 'zh-TW' ? 'zh-TW' : 'zh-CN'))
const d = computed(() => (loc.value === 'zh-TW' ? zhTW : zhCN))
const prefix = computed(() => (loc.value === 'zh-TW' ? '/zh-TW' : ''))

const paths = computed(() => d.value.paths)
const tasks = computed(() => d.value.tasks)
const flow = computed(() => d.value.flow)
const sources = computed(() => d.value.sources)
const ui = computed(() => d.value.ui)
</script>

<template>
  <div class="ab-home">
    <!-- localeNote 里只有 <strong>，文案写在同目录的 home-data 里，不来自外部输入 -->
    <p class="ab-locale-note" v-html="ui.localeNote" />

    <div class="ab-stats">
      <div class="ab-stat" v-for="s in ui.stats" :key="s.label">
        <b>{{ s.n }}</b><span>{{ s.label }}</span>
      </div>
    </div>

    <section class="ab-section">
      <p class="ab-eyebrow">Reading path / 01—03</p>
      <h2>{{ ui.pathsTitle }}</h2>
      <p class="ab-lede">{{ ui.pathsLede }}</p>
      <div class="ab-paths">
        <div class="ab-path" v-for="p in paths" :key="p.title">
          <span class="ab-path-tag">{{ p.tag }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
          <ul>
            <li v-for="i in p.items" :key="i">{{ i }}</li>
          </ul>
          <a class="ab-path-link" :href="withBase(prefix + p.link)">{{ p.linkText }} →</a>
          <p class="ab-path-note">{{ p.note }}</p>
        </div>
      </div>
    </section>

    <section class="ab-section">
      <p class="ab-eyebrow">Start from a question</p>
      <h2>{{ ui.tasksTitle }}</h2>
      <p class="ab-lede">{{ ui.tasksLede }}</p>
      <div class="ab-tasks">
        <a class="ab-task" v-for="t in tasks" :key="t.title" :href="withBase(prefix + t.link)">
          <strong>{{ t.title }}</strong>
          <span>{{ t.desc }}</span>
        </a>
      </div>
    </section>

    <section class="ab-section">
      <p class="ab-eyebrow">Four stages</p>
      <h2>{{ ui.flowTitle }}</h2>
      <p class="ab-lede">{{ ui.flowLede }}</p>
      <div class="ab-flow">
        <div class="ab-flow-step" v-for="f in flow" :key="f.title">
          <h4>{{ f.title }}</h4>
          <p>{{ f.desc }}</p>
          <span class="ab-flow-terms">{{ f.terms }}</span>
        </div>
      </div>
    </section>

    <section class="ab-section">
      <p class="ab-eyebrow">Sources</p>
      <h2>{{ ui.sourcesTitle }}</h2>
      <p class="ab-lede">{{ ui.sourcesLede }}</p>
      <div class="ab-sources">
        <a
          class="ab-source"
          v-for="s in sources"
          :key="s.n"
          :href="s.url"
          target="_blank"
          rel="noreferrer"
        >
          <em>{{ s.n }}</em>
          <span class="ab-source-body">
            <strong>{{ s.title }}</strong>
            <span>{{ s.from }}</span>
          </span>
        </a>
      </div>
    </section>

    <div class="ab-outro">
      <h2>{{ ui.outroTitle }}</h2>
      <p>{{ ui.outroLede }}</p>
      <a class="ab-btn" :href="withBase(prefix + '/start/08-first-task.html')">{{ ui.outroBtn1 }}</a>
      <a class="ab-btn ab-btn-ghost" :href="withBase(prefix + '/reference/prompts.html')">
        {{ ui.outroBtn2 }}
      </a>
    </div>
  </div>
</template>
