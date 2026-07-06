(window.SCREENS = window.SCREENS || {})['screens/ar.html'] = `
<div class="screen" style="background:var(--bg-primary)">

  <div style="flex-shrink:0;background:var(--bg-primary);display:flex;align-items:center;gap:4px;padding:8px 4px;min-height:60px">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
    <div style="flex:1;min-width:0;text-align:center">
      <div style="font-size:16px;font-weight:600;line-height:24px;color:var(--text-primary)">AR-режим</div>
    </div>
    <div style="width:44px;flex-shrink:0"></div>
  </div>

  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;padding:32px">
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style="opacity:0.3">
      <path d="M2 8.5C2 5 4 3 7.5 3H16.5C20 3 22 5 22 8.5V15.5C22 19 20 21 16.5 21H7.5C4 21 2 19 2 15.5V8.5Z" stroke="var(--icon-primary)" stroke-width="1.5"/>
      <path d="M7 10L10 7L13 10" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 7V17" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M17 14L14 17L11 14" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 17V7" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center">
      <div style="font-size:20px;font-weight:600;line-height:28px;color:var(--text-primary)">AR-режим</div>
      <div style="font-size:14px;font-weight:400;line-height:20px;color:var(--text-secondary)">Дополненная реальность будет доступна в следующем обновлении</div>
    </div>
  </div>

</div>
`;
