(window.SCREENS = window.SCREENS || {})['screens/enter-code.html'] = `
<div class="screen" style="background:var(--bg-primary);display:flex;flex-direction:column">

  <!-- Navigation header -->
  <div style="display:flex;align-items:center;padding:8px 4px;height:60px;flex-shrink:0">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;padding:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
  </div>

  <!-- Content: 40px gap after nav header (matches Figma: 162-62statusbar-60nav=40) -->
  <div style="padding:40px 16px 0;display:flex;flex-direction:column;gap:32px">

    <!-- Title + subtitle -->
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="font-size:32px;font-weight:600;line-height:40px;color:var(--text-primary)">Введите код</div>
      <div style="font-size:16px;font-weight:400;line-height:24px;color:var(--text-primary)">
        Код подтверждения был отправлен<br>
        на номер <span class="enter-code-phone">+7 *** *** ** **</span>
      </div>
    </div>

    <!-- OTP input + error message -->
    <div style="display:flex;flex-direction:column;gap:12px">
      <div class="otp-input-group">
        <input class="otp-cell" type="tel" inputmode="numeric" maxlength="1" autocomplete="one-time-code">
        <input class="otp-cell" type="tel" inputmode="numeric" maxlength="1">
        <input class="otp-cell" type="tel" inputmode="numeric" maxlength="1">
        <input class="otp-cell" type="tel" inputmode="numeric" maxlength="1">
      </div>
      <div class="otp-error" style="display:none;text-align:center;font-size:12px;font-weight:400;line-height:16px;color:var(--icon-error);font-family:var(--font-family)">
        Введен неверный код
      </div>
    </div>
  </div>

  <!-- Resend button: 32px below content section -->
  <div style="padding:32px 16px 0">
    <button class="btn-resend" disabled style="width:100%;height:44px;border:none;background:transparent;cursor:default;font-family:var(--font-family);font-size:16px;font-weight:500;line-height:24px;color:var(--text-disabled);touch-action:manipulation;border-radius:var(--radius-s)">
      Запросить повторно (60)
    </button>
  </div>

</div>
`;
