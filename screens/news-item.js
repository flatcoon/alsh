(window.SCREENS = window.SCREENS || {})['screens/news-item.html'] = `
<div class="screen" style="background:var(--bg-primary)">

  <div style="flex-shrink:0;background:var(--bg-primary);display:flex;align-items:center;gap:4px;padding:8px 4px 8px 4px;min-height:60px">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
    <div style="flex:1"></div>
  </div>

  <div style="flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none">

    <div style="height:200px;background:var(--surface-secondary);display:flex;align-items:center;justify-content:center;flex-shrink:0">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path opacity="0.3" d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7z" fill="var(--text-secondary)"/>
        <path d="M2.67 17.47l4.23-4.23c.77-.77 2.04-.72 2.74.1l.97 1.16c.7.83 1.97.87 2.74.1l3.7-3.7" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <div style="padding:24px 16px 32px;display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <span class="news-item-tag news-tag"></span>
        <span class="news-item-date" style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-secondary)"></span>
      </div>
      <div class="news-item-title" style="font-size:24px;font-weight:600;line-height:32px;color:var(--text-primary)"></div>
      <div class="news-item-content" style="font-size:16px;font-weight:400;line-height:24px;color:var(--text-primary);display:flex;flex-direction:column;gap:12px"></div>
    </div>
  </div>

</div>
`;
