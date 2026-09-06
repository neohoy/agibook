import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomeExtras from './HomeExtras.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeExtras', HomeExtras)
  }
} satisfies Theme
