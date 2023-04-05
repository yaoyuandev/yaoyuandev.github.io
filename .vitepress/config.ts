import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "遥远之境",
  titleTemplate: '姚远的个人空间',
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '博客', link: 'https://www.yuque.com/yaoyuanyy/blog'},
      {text: '软件', link: 'software/'},
      {text: '教程', link: 'guide/'},
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaoyuandev' },
    ],
    footer: {
      message: 'Powered by <a href="https://vitepress.dev">VitePress</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo">沪公网安备000000号</a> | <a href="https://beian.miit.gov.cn">沪ICP证00000000号</a>',
    }
  }
})
