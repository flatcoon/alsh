(window.SCREENS = window.SCREENS || {})['screens/news-list.html'] = `
<div class="screen" style="overflow:hidden;background:var(--bg-secondary)">

  <div style="flex-shrink:0;background:var(--bg-primary);display:flex;align-items:center;gap:4px;padding:8px 4px 8px 4px;min-height:60px">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
    <div style="flex:1;min-width:0;text-align:center">
      <div style="font-size:16px;font-weight:600;line-height:24px;color:var(--text-primary)">Новости школы</div>
    </div>
    <div style="width:44px;flex-shrink:0"></div>
  </div>

  <div class="home-scroll">
    <div style="padding:16px 16px 24px">
      <div class="news-list"></div>
    </div>
  </div>

</div>
`;
