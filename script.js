// ===== 根据当前页面位置算出前缀（posts/ 子目录里要 ../）=====
const PREFIX = location.pathname.replace(/\\/g,'/').includes('/posts/') ? '../' : '';

// ===== 渲染顶部导航（含下拉子菜单），从 window.NAV 统一生成 =====
function buildNav() {
  const nav = document.getElementById('nav');
  if (!nav || !window.NAV) return;

  // 当前页面信息，用于高亮
  const params = new URLSearchParams(location.search);
  const curCat = params.get('cat');
  const isHome = /(^|\/)index\.html?$/.test(location.pathname) || location.pathname.endsWith('/');

  nav.innerHTML = window.NAV.map(item => {
    const link = item.href ? (PREFIX + item.href)
               : (PREFIX + 'category.html?cat=' + item.cat);
    const onResearch = /research\.html/.test(location.pathname);
    const active =
      (item.href === 'index.html' && isHome) ||
      (item.href === 'research.html' && onResearch) ||
      (item.cat && item.cat === curCat) ||
      (item.children && item.children.some(c => c.cat === curCat));

    if (item.children) {
      const sub = item.children.map(c =>
        `<a href="${PREFIX}${c.href || ('category.html?cat=' + c.cat)}">${c.label}</a>`).join('');
      return `<div class="nav-item has-sub">
        <a href="${link}" class="${active ? 'is-active' : ''}">${item.label}<span class="caret">▾</span></a>
        <div class="submenu">${sub}</div>
      </div>`;
    }
    return `<div class="nav-item">
      <a href="${link}" class="${active ? 'is-active' : ''}">${item.label}</a>
    </div>`;
  }).join('');

  // 移动端：点带子菜单的项时展开/收起子菜单
  nav.querySelectorAll('.has-sub > a').forEach(a => {
    a.addEventListener('click', e => {
      if (window.matchMedia('(max-width:860px)').matches) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });
}
buildNav();

// ===== 移动端菜单总开关 =====
const toggle = document.querySelector('.nav-toggle');
const navEl = document.getElementById('nav');
if (toggle && navEl) {
  toggle.addEventListener('click', () => {
    const open = navEl.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// ===== 卡片 HTML =====
function cardHTML(p) {
  return `
    <article class="gcard">
      <a href="${PREFIX}${p.url}">
        <p class="gcard-cat">${p.catName}</p>
        <h3 class="gcard-title">${p.title}</h3>
        <span class="gcard-img ${p.img}"><em>${p.catName}</em></span>
      </a>
      <p class="gcard-excerpt">${p.excerpt}</p>
      <div class="gcard-foot"><span>姜湉</span><span class="dot">/</span><time>${p.date}</time></div>
    </article>`;
}

// ===== 首页：渲染全部卡片 =====
const grid = document.getElementById('grid');
if (grid && window.POSTS) {
  grid.innerHTML = window.POSTS.map(cardHTML).join('');
}

// ===== 分类页：按 ?cat= 渲染（支持主分类和子分类）=====
const catList = document.getElementById('catList');
if (catList && window.POSTS) {
  const params = new URLSearchParams(location.search);
  const cat = params.get('cat');
  const catName = (window.CATEGORIES && window.CATEGORIES[cat]) || '全部文章';
  // 主分类匹配 cat 或 subcat；子分类只匹配 subcat
  const items = window.POSTS.filter(p => p.cat === cat || p.subcat === cat);

  document.getElementById('catTitle').textContent = catName;
  document.title = catName + ' · AI 与教育手记';
  document.getElementById('catCount').textContent =
    items.length ? `共 ${items.length} 篇文章` : '该分类暂无文章';

  catList.innerHTML = items.map(p => `
    <article class="row">
      <a class="row-thumb ${p.img}" href="${PREFIX}${p.url}"><span>${p.catName}</span></a>
      <div class="row-body">
        <p class="gcard-cat">${p.catName}</p>
        <h2 class="row-title"><a href="${PREFIX}${p.url}">${p.title}</a></h2>
        <p class="row-excerpt">${p.excerpt}</p>
        <div class="gcard-foot"><span>姜湉</span><span class="dot">/</span><time>${p.date}</time></div>
      </div>
    </article>`).join('') ||
    '<p class="cat-empty">还没有发布这个分类的文章。换成你自己的内容后，在 data.js 里添加即可。</p>';
}

// ===== 研究项目页：四个标签页渲染表格 =====
const researchRoot = document.getElementById('researchRoot');
if (researchRoot && window.RESEARCH) {
  const TABS = [
    { key:'projects',  label:'科研项目' },
    { key:'papers',    label:'论文发表' },
    { key:'awards',    label:'获奖情况' },
    { key:'activities',label:'实践活动' }
  ];
  const esc = s => String(s == null ? '' : s);
  const tag = t => t ? `<span class="rt-tag rt-tag--${t}">${t}</span>` : '';

  // 每个标签页的表格渲染器
  function renderProjects(d) {
    if (!d.rows.length) return emptyState('科研项目');
    return `${summary(d.summary)}
      <ol class="rlist">${d.rows.map((r,i) => `
        <li class="ritem">
          <span class="ritem-no">${String(i+1).padStart(2,'0')}</span>
          <div class="ritem-main">
            <h3 class="ritem-title">${esc(r.title)}</h3>
            <div class="ritem-meta">
              <span class="rmeta"><b>角色</b>${esc(r.rank)}</span>
              <span class="rmeta"><b>经费</b>${esc(r.fund)}</span>
              <span class="rmeta"><b>进展</b>${esc(r.status)}</span>
            </div>
            <p class="ritem-source">${esc(r.source)}</p>
          </div>
        </li>`).join('')}</ol>`;
  }
  function renderPapers(d) {
    if (!d.rows.length) return emptyState('论文发表');
    return `${summary(d.summary)}
      <ol class="rlist">${d.rows.map((r,i) => `
        <li class="ritem">
          <span class="ritem-no">${String(i+1).padStart(2,'0')}</span>
          <div class="ritem-main">
            <h3 class="ritem-title">${tag(r.type)}${esc(r.title)}</h3>
            <div class="ritem-meta">
              <span class="rmeta"><b>署名</b>${esc(r.rank)}</span>
              <span class="rmeta"><b>时间</b>${esc(r.date)}</span>
            </div>
            <p class="ritem-source"><span class="rjournal">${esc(r.journal)}</span> · ${esc(r.org)}</p>
          </div>
        </li>`).join('')}</ol>`;
  }
  function renderAwards(d) {
    if (!d.rows.length) return emptyState('获奖情况');
    return `${summary(d.summary)}
      <ol class="rlist">${d.rows.map((r,i) => `
        <li class="ritem">
          <span class="ritem-no">${String(i+1).padStart(2,'0')}</span>
          <div class="ritem-main">
            <h3 class="ritem-title">${esc(r.title)}</h3>
            <div class="ritem-meta">
              <span class="rmeta"><b>等级</b>${esc(r.award)}</span>
              <span class="rmeta"><b>排名</b>${esc(r.rank)}</span>
              <span class="rmeta"><b>年份</b>${esc(r.year)}</span>
            </div>
            <p class="ritem-source">${esc(r.org)}</p>
          </div>
        </li>`).join('')}</ol>`;
  }
  function summary(t) {
    return t ? `<p class="rsummary">${t}</p>` : '';
  }
  function emptyState(name) {
    return `<div class="rempty">
      <p class="rempty-title">${name}内容整理中</p>
      <p class="rempty-sub">这部分材料稍后补充。在 data.js 的 RESEARCH.${'activities'} 里添加条目即可显示。</p>
    </div>`;
  }
  const RENDER = { projects:renderProjects, papers:renderPapers, awards:renderAwards, activities:()=>emptyState('实践活动') };

  // 渲染标签栏
  const tabsEl = document.getElementById('rTabs');
  tabsEl.innerHTML = TABS.map(t => {
    const n = (window.RESEARCH[t.key] && window.RESEARCH[t.key].rows.length) || 0;
    return `<button class="rtab" data-key="${t.key}">${t.label}${n ? `<span class="rtab-n">${n}</span>` : ''}</button>`;
  }).join('');

  const panel = document.getElementById('rPanel');
  function show(key) {
    const t = TABS.find(x => x.key === key) ? key : 'projects';
    tabsEl.querySelectorAll('.rtab').forEach(b =>
      b.classList.toggle('is-active', b.dataset.key === t));
    panel.innerHTML = RENDER[t](window.RESEARCH[t]);
    const params = new URLSearchParams(location.search);
    params.set('tab', t);
    history.replaceState(null, '', location.pathname + '?' + params.toString());
  }
  tabsEl.querySelectorAll('.rtab').forEach(b =>
    b.addEventListener('click', () => show(b.dataset.key)));

  const startTab = new URLSearchParams(location.search).get('tab') || 'projects';
  show(startTab);
}
