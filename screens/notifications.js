(window.SCREENS = window.SCREENS || {})['screens/notifications.html'] = `
<div class="screen" style="overflow:hidden;background:var(--bg-secondary)">

  <div style="flex-shrink:0;background:var(--bg-secondary);display:flex;align-items:center;gap:4px;padding:8px 16px 8px 4px;min-height:60px">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
    <div style="font-size:18px;font-weight:500;line-height:24px;color:var(--text-primary)">Уведомления</div>
  </div>

  <div class="home-scroll">
    <div class="notifications-list"></div>
  </div>

</div>
`;
