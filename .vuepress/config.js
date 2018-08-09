const fs = require('fs')
const path = require("path")
const resolve = (p) => path.resolve(__dirname,"..",p)

const docsPath = resolve('')
const blogDirs = fs.readdirSync(docsPath)
let sidebar = {}
blogDirs.forEach((val, index) => {
  const stats = fs.statSync(`${docsPath}/${val}`)
  if (stats.isDirectory()) {
    if (['.vuepress', '.git'].indexOf(val) !== -1 ) return
    sidebar[`/${val}/`] = ['']
    const sidebarList = fs.readdirSync(`${docsPath}/${val}`)
    sidebarList.forEach((item, i) => {
      if (['README.md'].indexOf(item) !== -1 ) return
      const stats = fs.statSync(`${docsPath}/${val}/${item}`)
      if (stats.isFile()) {
        sidebar[`/${val}/`].push(item)
      }
    })
  }
})

module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'icon', href: `` }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '郝先生',
      description: '不积跬步无以至千里',
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' },
      { text: 'Github', link: 'https://haoyulong1112.github.io/notes/' }
    ],
    sidebar: sidebar
  }
}
