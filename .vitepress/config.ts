import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: 'https://yaoyuandev.github.io',
  title: "姚远的个人主页",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '博客', link: 'https://www.yuque.com/yaoyuanyy/blog'},
      {text: '软件', link: '/software/'},
      {text: '教程', link: '/guide/'},
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaoyuandev' },
    ],
    footer: {
      message: 'Powered by <a href="https://vitepress.dev">VitePress</a> | <a href="https://beian.miit.gov.cn">沪ICP证00000000号</a>',
    }
  }
})
