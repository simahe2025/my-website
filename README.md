# AI 与教育手记 · 个人静态网站

纯静态 HTML/CSS/JS，无需任何构建工具，可直接部署到 GitHub Pages。

## 文件结构
```
.
├── index.html        # 首页（三列卡片网格 + 顶部横向导航）
├── category.html     # 分类二级页面（按 ?cat= 参数显示该分类文章列表）
├── about.html        # 关于页
├── data.js           # 文章数据（首页和分类页共用，加文章只改这里）
├── style.css         # 全部样式
├── script.js         # 菜单 + 首页/分类页渲染
└── posts/            # 文章详情页
    ├── post-1.html
    ├── post-2.html
    ├── post-3.html
    └── post-4.html
```

## 部署到 GitHub Pages（3 步）
1. 新建一个仓库，比如叫 `myblog`，把以上所有文件上传进去。
2. 进入仓库 **Settings → Pages**，Source 选 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`，保存。
3. 等一两分钟，访问 `https://你的用户名.github.io/myblog/` 即可。

> 想用 `你的用户名.github.io` 作为主域名，就把仓库名改成 `你的用户名.github.io`，根目录直接就是首页。

## 怎么改成你自己的
- **改文案**：编辑 `about.html` 里的中文。
- **加/改文章**：打开 `data.js`，在 `POSTS` 数组里照着已有格式增删条目即可——首页卡片和分类页列表都会自动更新，不用改两处。每篇的 `cat` 要对应一个分类 key（见 `CATEGORIES`）。
- **写正文**：复制 `posts/post-1.html` 改名为 `post-5.html`，改标题正文，再把 `data.js` 里对应条目的 `url` 指向它。
- **改分类菜单**：导航里的链接是 `category.html?cat=分类key`；要新增分类，在 `data.js` 的 `CATEGORIES` 里加一项，并在各页面顶部导航里加一个链接。
- **换配色**：改 `style.css` 顶部 `:root` 里的颜色变量（`--accent` 是主色调）。

## 说明
本站为原创设计，结构上参考了常见博客布局（文章流 + 分类导航 + 侧边栏），未复制任何第三方网站的代码、设计或内容。
