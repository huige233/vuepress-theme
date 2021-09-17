---
home: false
heroImage: /hero.png
actionText: 开始 →
actionLink: /guide/
features:
- title: 简明优先
  details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。
- title: Vue 驱动
  details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
- title: 性能高效
  details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

::: tip
test tip
:::

::: warning
test warning
:::

::: danger
test dange warning
:::

### 像数 1, 2, 3 一样容易 :tada: :100::fire:

```bash //与csdn md编辑器冲突 去掉此行注释即可
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

::: warning 注意
请确保你的 Node.js 版本 >= 8.6。
:::