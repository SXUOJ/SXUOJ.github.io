module.exports = {
  title: 'SxuOJ',
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
    repo: 'https://github.com/Sxu-Online-Judge/sxu-online-judge.io',
    branch: 'master',
    navbar: [
      { text: 'Demo', link: 'https://sxu.sx.cn' },
    ],
  },
}

