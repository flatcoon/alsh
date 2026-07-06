(window.SCREENS = window.SCREENS || {})['screens/chat-search.html'] = `
<div class="screen" style="overflow:hidden;background:var(--bg-primary)">

  <div class="chat-search-header">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
    <div class="chat-search-input-wrap">
      <input type="text" class="chat-search-input" placeholder="Поиск по чатам" autocomplete="off">
      <button type="button" class="chat-search-clear" style="display:none">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 18L18 6M6 6l12 12" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>

  <div class="home-scroll">
    <div style="padding:8px 16px 24px">
      <div class="chats-list chat-search-results"></div>
      <div class="chat-search-empty">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="var(--text-secondary)" stroke-width="1.5"/>
          <path d="M22 22L20 20" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <div style="font-size:16px;font-weight:500;line-height:24px;color:var(--text-secondary)">Ничего не найдено</div>
      </div>
    </div>
  </div>

</div>
`;
