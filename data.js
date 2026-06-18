// ===== 文章数据：以后加文章只改这里 =====
// cat 要和导航的分类 key 对应；img 是封面渐变样式 class（g1~g6）
window.POSTS = [
  {
    cat: "ai-edu", subcat: "ai-student", catName: "AI+教育", img: "g1",
    title: "辅导员如何用 AI 做学生画像而不越界",
    excerpt: "数据能帮我们更早发现需要关注的学生，但画像的边界在哪里？记一次把 AI 用进谈心谈话准备的过程，以及我给自己定的三条红线。",
    date: "2026-06-13", url: "posts/post-1.html"
  },
  {
    cat: "tools", subcat: "tool-flow", catName: "工具心得", img: "g2",
    title: "我每天 3 小时 AI 工作流，到底在用什么",
    excerpt: "从语音日记转写、文档排版脚本到多智能体协作，拆解我把 AI 嵌进一天工作的具体环节，以及哪些环节其实没必要上 AI。",
    date: "2026-06-09", url: "posts/post-2.html"
  },
  {
    cat: "teaching", subcat: "class-design", catName: "教学实践", img: "g3",
    title: "一门 AI 公选课的第一周，我重写了三遍教案",
    excerpt: "学生背景差异远比想象大。记录我怎么把一节“教 AI 工具”的课，改成“和学生一起想清楚为什么用”。",
    date: "2026-06-02", url: "posts/post-3.html"
  },
  {
    cat: "notes", catName: "随笔杂谈", img: "g4",
    title: "框架思维是我的长处，也是我的盲区",
    excerpt: "我习惯先搭结构再动手，这让我效率很高，却也容易错过当下那个没说出口的情绪。一篇关于系统思维与临场感知的自我复盘。",
    date: "2026-05-28", url: "posts/post-4.html"
  },
  {
    cat: "ai-edu", subcat: "ai-research", catName: "AI+教育", img: "g5",
    title: "AI 辅助心理健康教育：1159 份问卷告诉我的事",
    excerpt: "一个省级课题做完，最有价值的不是结论，而是过程中被推翻的几个假设。",
    date: "2026-05-20", url: "posts/post-1.html"
  },
  {
    cat: "course", catName: "公开课", img: "g6",
    title: "公开课实录：和学生一起拆解一个提示词",
    excerpt: "与其讲“提示词工程”，不如当场把一句话改五遍，让学生看见好坏之间发生了什么。",
    date: "2026-05-12", url: "posts/post-2.html"
  },
  {
    cat: "tools", subcat: "tool-review", catName: "工具心得", img: "g2",
    title: "三款 AI 笔记工具横评：我最后留下了哪一个",
    excerpt: "试用了一圈主流 AI 笔记工具，从录入、检索到回顾分别打分，记下各自适合谁、不适合谁。",
    date: "2026-05-06", url: "posts/post-2.html"
  },
  {
    cat: "teaching", subcat: "class-record", catName: "教学实践", img: "g3",
    title: "课堂实录：当学生问“AI 写的算不算我的作业”",
    excerpt: "一次没有预设答案的课堂讨论。我没有给结论，而是和学生一起把这个问题拆开看。",
    date: "2026-04-29", url: "posts/post-3.html"
  }
];

// ===== 研究项目页数据：佐证材料（姜湉）=====
window.RESEARCH = {
  papers: {
    summary: "2024–2025 年公开发表论文 11 篇：期刊 / 报纸 5 篇，会议论文 3 篇，其余收录于学术期刊。",
    rows: [
      { type:"期刊", title:"音乐师范生心理育人方式的探索——以“悦音智语”师范生心理实践工作坊为例", rank:"第一作者", date:"2024.03", journal:"科学新生活（CN 11-4682/Z）", org:"中国科学报社" },
      { type:"期刊", title:"教育数字化背景下学生工作探索——以师范大学音乐学院为例", rank:"第一作者", date:"2024.01", journal:"教育考试与评价（CN 51-1766/G4）", org:"四川省招生考试指导中心" },
      { type:"报纸", title:"数据要素赋能广东乡村音乐教育", rank:"第一作者", date:"2024.04", journal:"羊城晚报", org:"羊城晚报社" },
      { type:"期刊", title:"基于“五位一体”的音乐师范生教育评价改革实践探索", rank:"第一作者", date:"2024.12", journal:"教育理论与研究（ISSN 2995-3448）", org:"艺术与设计出版社" },
      { type:"会议", title:"智能体驱动广东乡村音乐教育数字化转型路径探索", rank:"第一作者", date:"2024.08", journal:"第十四届全国思想政治教育高端论坛", org:"教育部人文社科重点研究基地（清华大学等）" },
      { type:"会议", title:"红色资源融入高校《习近平新时代中国特色社会主义思想概论》教育教学的应用场景研究", rank:"第一作者", date:"2024.11", journal:"2024 年高校党史教育研讨会", org:"教育部习近平新时代中国特色社会主义思想研究中心等" },
      { type:"会议", title:"数据要素赋能广东乡村教育", rank:"第一作者", date:"2024.11", journal:"第十九届南方改革论坛（“南方改革杯”优秀论文）", org:"广东省体制改革研究会" },
      { type:"期刊", title:"乡村振兴视角下数智赋能广东音乐教育", rank:"第一作者", date:"2024.12", journal:"探索科学（2024 年第 33 期）", org:"电子工业出版社" },
      { type:"期刊", title:"基于人工智能的音乐疗愈心理育人模式实践探索", rank:"第一作者", date:"2025.08", journal:"信息技术时代（2025 年第 8 期）", org:"深圳湾科技发展有限公司" },
      { type:"期刊", title:"智能体赋能大学生音乐疗愈心理育人的实践探索", rank:"第一作者", date:"2025.09", journal:"网络科技时代（2025 年第 9 期）", org:"网络科技出版社" },
      { type:"期刊", title:"数智赋能视角下大学生网络行为画像与精准育人策略研究——基于 1159 份问卷的实证分析", rank:"第一作者", date:"2025.12", journal:"教育理论与研究（ISSN 2995-3448）", org:"艺术与设计出版社" }
    ]
  },
  projects: {
    summary: "科研项目立项 13 项，其中主持 8 项、指导学生立项 5 项，覆盖省级、市级与校级项目。",
    rows: [
      { title:"广东省普通高校青年创新人才项目——人工智能辅助下的大学生心理健康教育途径探索（2023WQNCX055）", rank:"主持", fund:"2 万", status:"已结项（2026.3）", source:"广东省教育厅 · 2023.9" },
      { title:"奏响乡村振兴新旋律——数据要素赋能广东乡村音乐教育（党建研究后资助项目 2024BKHQ090）", rank:"主持", fund:"0.5 万", status:"立项", source:"广东省高校党建研究会 · 2024.3" },
      { title:"“鼓韵新声”——瑶族长鼓舞的数字化传承与文创产品开发研究", rank:"主持", fund:"0.5 万", status:"立项", source:"广东第二师范学院 · 大创项目 · 2025.4" },
      { title:"“艺”起来组“局”——基于活态传承的广府私伙局开展模式分析与实践探索", rank:"第二", fund:"0.5 万", status:"立项", source:"广东第二师范学院 · 大创项目 · 2024.5" },
      { title:"数据要素赋能乡村音乐教育的应用探索", rank:"主持", fund:"0.5 万", status:"立项", source:"广东第二师范学院 · 大创项目 · 2024.5" },
      { title:"2024 年广东省教育科学规划课题（高等教育专项）——“百千万工程”背景下基于智能驱动的广东乡村音乐教育数字化转型实践研究（2024GXJK152）", rank:"主持", fund:"3 万", status:"立项", source:"广东省教育厅 · 2024.8" },
      { title:"共青团科研立项·“青聚力”组织建设类团支部主题团日活动创新实践——传唱学堂乐歌 携手奋进新征程", rank:"主持", fund:"—", status:"立项", source:"广东第二师范学院共青团 · 2024" },
      { title:"“五育并举”视域下音乐疗愈与人工智能融合的师范生心理育人模式构建（校内科研项目·学生工作专项 2025XKY008）", rank:"主持", fund:"—", status:"立项", source:"广东第二师范学院 · 2025" },
      { title:"“心灵作曲家”——跨学科合作下的 AI 式歌曲创编与疗愈研究", rank:"主持", fund:"—", status:"立项", source:"广东二师 · 学生工作部易班网络育人项目 · 2025" },
      { title:"佛山市哲学社会科学规划项目", rank:"—", fund:"0.8 万", status:"立项", source:"佛山市哲学社会科学 · 2026" },
      { title:"瑶族长鼓舞纪念币外观设计专利证书（指导学生）", rank:"指导", fund:"—", status:"知识产权授权", source:"国家知识产权局 · 2025" },
      { title:"指导学生·大学生创新创业项目", rank:"指导", fund:"0.15 万", status:"立项", source:"广东第二师范学院 · 大创项目 · 2026" },
      { title:"指导学生·大学生创新创业项目", rank:"指导", fund:"0.15 万", status:"立项", source:"广东第二师范学院 · 大创项目 · 2026" }
    ]
  },
  awards: {
    summary: "获奖 13 项，覆盖省级、校级及行业竞赛，方向集中在思政育人与 AI+教育实践。",
    rows: [
      { title:"“粤享受”粤剧艺术多维社交学习平台", rank:"第一", year:"2024", award:"三等奖 · 校级（“挑战杯·创青春”广东省大学生创业计划竞赛校内赛）", org:"广东第二师范学院" },
      { title:"思政引领构建“三全育人”数智化学工路径探索——以师范大学音乐学院为例", rank:"第一", year:"2024", award:"优秀奖 · 省级（广东省高校思想政治工作优秀论文）", org:"华南师范大学 · 广东省高校思政教育研究会" },
      { title:"音乐师范生心理育人方式的探索——“悦音智语”心理实践工作坊", rank:"第一", year:"2024", award:"优秀奖 · 省级（广东省高校思想政治工作优秀案例）", org:"华南师范大学 · 广东省高校思政教育研究会" },
      { title:"思政引领构建“三全育人”数智化学工路径探索", rank:"第一", year:"2024", award:"三等奖 · 省级（2024“数字思政”创新发展论坛）", org:"赣南师范大学 · 江西省高校辅导员研修基地" },
      { title:"“青聚力”组织建设类团支部主题团日活动创新实践——传唱学堂乐歌 携手奋进新征程", rank:"第一", year:"2024", award:"校级", org:"广东第二师范学院共青团" },
      { title:"基于“五位一体”的音乐师范生教育评价改革实践探索", rank:"第一", year:"2024", award:"三等奖（广东省 2024 年教育评价改革主题征文）", org:"广东省教育厅" },
      { title:"守正创新，数智融合——音乐师范生智能素养提升“234”模式探索与实践", rank:"第一", year:"2024", award:"“新师范”建设优秀案例", org:"广东省本科高校“新师范”建设指导委员会" },
      { title:"数据要素赋能广东乡村教育", rank:"第一", year:"2024", award:"优秀论文（十九届南方改革论坛“南方改革杯”）", org:"广东省体制改革研究会" },
      { title:"音乐师范生教育评价改革实践探索", rank:"第一", year:"2024", award:"二等奖 · 省级", org:"华南师范大学 · 广东省高校思政教育研究会" },
      { title:"《科研失信零容忍，创新发展有保障》", rank:"第一", year:"2025.11", award:"参赛作品（广东省科技政策宣讲大赛）", org:"广东省科技厅" },
      { title:"音乐师范生教育评价改革实践探索", rank:"—", year:"2025.03", award:"二等奖 · 省级", org:"华南师范大学 · 广东省高校思政教育研究会" },
      { title:"数智创新《一脉清》", rank:"第一", year:"2026.03", award:"三等奖 · 省级（第五届粤港澳大湾区大学生艺术节）", org:"第五届粤港澳大湾区大学生艺术节 · 广东省教育厅" },
      { title:"教育部思政工作精品项目 · 思政案例", rank:"第一", year:"2026.04", award:"优秀案例", org:"教育部" }
    ]
  },
  activities: {
    summary: "",
    rows: []
  }
};

// 分类 key → 显示名（分类页标题用）
window.CATEGORIES = {
  "ai-edu":      "AI+教育",
  "tools":       "工具心得",
  "teaching":    "教学实践",
  "research":    "研究项目",
  "notes":       "随笔杂谈",
  "course":      "公开课",
  // 子分类
  "ai-student":  "AI 与学生工作",
  "ai-research": "AI 与科研",
  "tool-flow":   "工作流搭建",
  "tool-review": "工具评测",
  "class-design":"备课与教案",
  "class-record":"课堂实录",
  "research-projects":"科研项目",
  "papers":"论文发表",
  "awards":"获奖情况",
  "activities":"实践活动"
};

// ===== 顶部导航结构：有 children 的会显示下拉子菜单 =====
// 主项点击跳到该分类列表页；子项跳到对应子分类列表页
window.NAV = [
  { label: "首页", href: "index.html" },
  { label: "AI+教育", cat: "ai-edu", children: [
      { label: "AI 与学生工作", cat: "ai-student" },
      { label: "AI 与科研",     cat: "ai-research" }
  ]},
  { label: "工具心得", cat: "tools", children: [
      { label: "工作流搭建", cat: "tool-flow" },
      { label: "工具评测",   cat: "tool-review" }
  ]},
  { label: "教学实践", cat: "teaching", children: [
      { label: "备课与教案", cat: "class-design" },
      { label: "课堂实录",   cat: "class-record" }
  ]},
  { label: "研究项目", href: "research.html", children: [
      { label: "科研项目", href: "research.html?tab=projects" },
      { label: "论文发表", href: "research.html?tab=papers" },
      { label: "获奖情况", href: "research.html?tab=awards" },
      { label: "实践活动", href: "research.html?tab=activities" }
  ]},
  { label: "随笔杂谈", cat: "notes" },
  { label: "公开课",   cat: "course" },
  { label: "关于我",   href: "about.html" },
  { label: "联系我",   href: "about.html" }
];
