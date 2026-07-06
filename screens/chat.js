(window.SCREENS = window.SCREENS || {})['screens/chat.html'] = `
<div class="screen" style="overflow:hidden;background:var(--bg-primary)">

  <div style="flex-shrink:0;background:var(--bg-primary);display:flex;align-items:center;gap:8px;padding:8px 4px;min-height:60px;border-bottom:1px solid var(--border-secondary)">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
    <button class="chat-members-btn" style="flex:1;border:none;background:transparent;cursor:pointer;text-align:left;padding:0;touch-action:manipulation;border-radius:var(--radius-s);min-width:0">
      <div class="chat-title" style="font-size:16px;font-weight:600;line-height:24px;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></div>
      <div class="chat-members-count" style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-secondary)"></div>
    </button>
    <div class="chat-header-avatar" style="flex-shrink:0;cursor:pointer;touch-action:manipulation"></div>
  </div>

  <div class="chat-messages" style="flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:8px 0;display:flex;flex-direction:column;gap:4px"></div>

  <div class="chat-attach-preview" style="display:none"></div>

  <div style="flex-shrink:0;background:var(--bg-primary);border-top:1px solid var(--border-secondary);padding:8px 16px;padding-bottom:calc(8px + env(safe-area-inset-bottom));display:flex;align-items:center;gap:8px">
    <input type="file" class="chat-attach-input" multiple style="display:none">
    <button type="button" class="chat-attach-btn" title="Прикрепить">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21.44 11.05l-9.19 9.19a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.19a1.5 1.5 0 0 1-2.12-2.12l8.49-8.48" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div style="flex:1;background:var(--surface-secondary);border:1.5px solid var(--border-secondary);border-radius:var(--radius-m);min-height:44px;display:flex;align-items:center;padding:0 12px">
      <textarea class="chat-input" rows="1" placeholder="Сообщение…"
        style="flex:1;border:none;background:transparent;font-family:var(--font-family);font-size:16px;font-weight:400;line-height:24px;color:var(--text-primary);resize:none;outline:none;max-height:88px;overflow-y:auto;padding:10px 0;scrollbar-width:none"></textarea>
    </div>
    <button class="chat-send-btn" style="width:44px;height:44px;border:none;background:var(--btn-primary-bg);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;touch-action:manipulation">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M16.14 2.96L7.11 5.96C1.04 7.99 1.04 11.3 7.11 13.32L9.79 14.21L10.68 16.89C12.7 22.96 16.02 22.96 18.04 16.89L21.05 7.87C22.39 3.82 20.19 1.61 16.14 2.96ZM16.46 8.34L12.66 12.16C12.51 12.31 12.32 12.38 12.13 12.38C11.94 12.38 11.75 12.31 11.6 12.16C11.31 11.87 11.31 11.39 11.6 11.1L15.4 7.28C15.69 6.99 16.17 6.99 16.46 7.28C16.75 7.57 16.75 8.05 16.46 8.34Z" fill="#fff"/>
      </svg>
    </button>
  </div>

</div>
`;
