(window.SCREENS = window.SCREENS || {})['screens/welcome.html'] = `
<div class="screen" style="background:var(--bg-primary);display:flex;flex-direction:column;padding:0 16px">
  <div style="height:100px;flex-shrink:0"></div>

  <div style="display:flex;flex-direction:column;gap:32px">
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="font-size:32px;font-weight:600;line-height:40px;color:var(--text-primary)">Добро пожаловать</div>
      <div style="font-size:16px;font-weight:400;line-height:24px;color:var(--text-primary)">Введите номер телефона, чтобы войти в приложение</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:16px">

      <div class="phone-field-wrap" style="height:56px;background:var(--surface-secondary);border:1.5px solid var(--border-secondary);border-radius:var(--radius-m);display:flex;align-items:center;padding:4px 2px 4px 4px;gap:4px;transition:border-color 0.15s">

        <div style="display:flex;align-items:center;justify-content:center;width:48px;height:44px;flex-shrink:0;padding:8px 12px;border-radius:var(--radius-s)">
          <img src="icons/flag-ru.svg" width="24" height="24" alt="RU" style="display:block;flex-shrink:0">
        </div>

        <div class="phone-field-tap" style="flex:1;position:relative;display:flex;align-items:center;min-width:0;height:44px;cursor:text">
          <div class="phone-display-text" style="position:absolute;inset:0;display:flex;align-items:center;pointer-events:none;white-space:nowrap;overflow:hidden;font-size:16px;font-weight:500;font-family:var(--font-family);line-height:24px">
            <span class="phone-prefix" style="color:var(--text-primary)">+&nbsp;7&nbsp;</span><span class="phone-dark" style="color:var(--text-primary)"></span><span class="phone-cursor"></span><span class="phone-gray" style="color:var(--text-secondary)">(000) 000-00-00</span>
          </div>
          <input class="welcome-phone" type="text" inputmode="numeric" autocomplete="tel"
            style="position:absolute;inset:0;opacity:0;width:100%;height:100%;border:none;background:transparent;cursor:text">
        </div>

        <button class="welcome-clear-btn" style="display:none;align-items:center;justify-content:center;width:48px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);flex-shrink:0;padding:12px;touch-action:manipulation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="#8a8a8a" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <button class="welcome-get-code-btn" disabled style="height:56px;width:100%;border:none;border-radius:var(--radius-m);background:var(--btn-primary-disabled);color:var(--text-disabled);font-family:var(--font-family);font-size:16px;font-weight:500;line-height:24px;cursor:default;padding:16px 12px;touch-action:manipulation;transition:background 0.15s,color 0.15s">
        Получить код
      </button>
    </div>
  </div>

  <div style="flex:1"></div>

  <div style="padding:0 0 54px;text-align:center">
    <p style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-secondary)">
      Нажимая «Получить код» вы соглашаетесь с <span style="color:var(--text-primary);text-decoration:underline;cursor:pointer">условиями пользовательского соглашения</span>
    </p>
  </div>

  <div style="height:env(safe-area-inset-bottom);flex-shrink:0"></div>
</div>
`;
