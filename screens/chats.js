(window.SCREENS = window.SCREENS || {})['screens/chats.html'] = `
<div class="screen" style="overflow:hidden;background:var(--bg-primary)">

  <div style="flex-shrink:0;background:var(--bg-primary);display:flex;align-items:center;gap:4px;padding:8px 6px 8px 16px;min-height:60px">
    <div style="flex:1;min-width:0">
      <div style="font-size:28px;font-weight:600;line-height:36px;color:var(--text-primary)">Чаты</div>
    </div>
    <button onclick="Router.goTo('/notifications')" style="position:relative;width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <span class="chats-notif-dot" style="display:none;position:absolute;top:8px;right:8px;width:8px;height:8px;border-radius:50%;background:#e93334;border:1.5px solid var(--bg-primary)"></span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color:var(--icon-primary)">
        <path d="M12.0199 20.53C9.68987 20.53 7.35987 20.16 5.14987 19.42C4.30987 19.13 3.66987 18.54 3.38987 17.77C3.09987 17 3.19987 16.15 3.65987 15.39L4.80987 13.48C5.04987 13.08 5.26987 12.28 5.26987 11.81V8.92C5.26987 5.2 8.29987 2.17 12.0199 2.17C15.7399 2.17 18.7699 5.2 18.7699 8.92V11.81C18.7699 12.27 18.9899 13.08 19.2299 13.49L20.3699 15.39C20.7999 16.11 20.8799 16.98 20.5899 17.77C20.2999 18.56 19.6699 19.16 18.8799 19.42C16.6799 20.16 14.3499 20.53 12.0199 20.53ZM12.0199 3.67C9.12987 3.67 6.76987 6.02 6.76987 8.92V11.81C6.76987 12.54 6.46987 13.62 6.09987 14.25L4.94987 16.16C4.72987 16.53 4.66987 16.92 4.79987 17.25C4.91987 17.59 5.21987 17.85 5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25C17.5599 13.6 17.2699 12.53 17.2699 11.8V8.92C17.2699 6.02 14.9199 3.67 12.0199 3.67Z" fill="currentColor"/>
        <path d="M13.8801 3.93999C13.8101 3.93999 13.7401 3.92999 13.6701 3.90999C13.3801 3.82999 13.1001 3.76999 12.8301 3.72999C11.9801 3.61999 11.1601 3.67999 10.3901 3.90999C10.1101 3.99999 9.81011 3.90999 9.62011 3.69999C9.43011 3.48999 9.37011 3.18999 9.48011 2.91999C9.89011 1.86999 10.8901 1.17999 12.0301 1.17999C13.1701 1.17999 14.1701 1.85999 14.5801 2.91999C14.6801 3.18999 14.6301 3.48999 14.4401 3.69999C14.2901 3.85999 14.0801 3.93999 13.8801 3.93999Z" fill="currentColor"/>
        <path d="M12.02 22.81C11.03 22.81 10.07 22.41 9.37002 21.71C8.67002 21.01 8.27002 20.05 8.27002 19.06H9.77002C9.77002 19.65 10.01 20.23 10.43 20.65C10.85 21.07 11.43 21.31 12.02 21.31C13.26 21.31 14.27 20.3 14.27 19.06H15.77C15.77 21.13 14.09 22.81 12.02 22.81Z" fill="currentColor"/>
      </svg>
    </button>
  </div>

  <div class="home-scroll">
    <div style="padding:20px 16px 24px;display:flex;flex-direction:column;gap:20px">

      <button type="button" class="chat-search-field" onclick="Router.goTo('/chats/search')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 22L20 20" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Поиск</span>
      </button>

      <div class="chats-list"></div>
    </div>
  </div>

</div>
`;
