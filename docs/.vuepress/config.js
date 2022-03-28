module.exports = {
  title: 'SXUOJ --- 构建中...',
  lang: 'zh-CN',
  description: '简洁、高效、安全',
  
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/plugin-search',
      {
       locales: {
         '/': {
           placeholder: 'Search',
         },
         '/zh/': {
           placeholder: '搜索',
          },
        },
      },
    ],
  ],

  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/SXUOJ/SXUOJ.github.io',
    branch: 'master',
    navbar: [
      { text: '首页', link: '/'},
      { text: 'Api说明', link: '/api/api.md' },
      { text: 'Demo', link: 'https://sxu.sx.cn' },
    ],
  },
}

