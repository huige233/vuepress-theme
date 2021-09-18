// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '编程内容',
    link: '/web/', 
    items: [
      {text: '技术文档', link: '/web/#技术文档'},
      {text: 'CSS', link: '/web/#CSS'},
      {text: 'JavaScripts', link: '/web/#JavaScript文章'},
      {text: 'other', link: '/web/#other'},
      {text: '学习笔记', link: '/web/#学习笔记'},
    ]
    //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
      {text: '收藏',link: '/pages/beb6c0bd8a66cea6/'},
      { text: '关于', link: '/about/' },
      {text: '肯定有帮助', link: 'https://baidu.com'},
      {text: 'CSDN', link: 'https://blog.csdn.net/'},
      {text: 'MyGithub', link: 'https://github.com/huige233'}	  
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
