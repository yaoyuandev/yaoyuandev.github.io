import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "遥远之境",
  titleTemplate: ' 遥远之境',
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '文集', link: 'https://www.yuque.com/yaoyuanyy/blog'},
      {text: '软件', link: 'software/'},
      {text: '笔记', link: 'guide/'},
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaoyuandev' },
    ],
    footer: {
      message: 'Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo" target="_blank">沪公网安备000000号</a> | <a href="https://beian.miit.gov.cn" target="_blank">沪ICP备2023008808号-1</a>',
    }
  }
})
