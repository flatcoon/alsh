(window.SCREENS = window.SCREENS || {})['screens/participants.html'] = `
<div class="screen" style="overflow:hidden;background:var(--bg-primary)">

  <div style="flex-shrink:0;background:var(--bg-primary);display:flex;align-items:center;padding:8px 16px 8px 8px;min-height:60px">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:var(--bg-primary);box-shadow:0px 2px 4px rgba(0,0,41,0.1);border-radius:999px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
  </div>

  <div class="home-scroll">
    <div style="padding:8px 16px 24px;display:flex;flex-direction:column;gap:24px">

      <div class="chat-info-header">
        <div class="participants-avatar"></div>
        <div>
          <div class="chat-info-name participants-chat-name"></div>
          <div class="chat-info-count participants-chat-count"></div>
        </div>
      </div>

      <div class="chat-info-actions">
        <button type="button" class="chat-info-action participants-sound-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13.535 2.63a9.75 9.75 0 0 0-3.07 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M18.35 18.02V13.7c0-3.09-2.51-5.6-5.6-5.6h-1.5c-3.09 0-5.6 2.51-5.6 5.6v4.32c0 .59-.24 1.15-.66 1.57l-.66.65c-.9.9-.28 2.44 1 2.44h13.24c1.24 0 1.86-1.5 1-2.44l-.66-.65a2.21 2.21 0 0 1-.66-1.57z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
          <span class="participants-sound-label">звук</span>
        </button>
        <button type="button" class="chat-info-action participants-search-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 22L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>поиск</span>
        </button>
        <button type="button" class="chat-info-action participants-more-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="19" cy="12" r="1.5" fill="currentColor"/>
          </svg>
          <span>ещё</span>
        </button>
      </div>

      <div class="chat-info-members participants-members-wrap">
        <div class="participants-list"></div>
      </div>

    </div>
  </div>

</div>
`;
