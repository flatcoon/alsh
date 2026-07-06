(window.SCREENS = window.SCREENS || {})['screens/profile-edit.html'] = `
<div class="screen" style="background:var(--bg-secondary)">

  <div style="flex-shrink:0;background:var(--bg-secondary);display:flex;align-items:center;gap:4px;padding:8px 4px;min-height:60px">
    <button onclick="Router.goBack()" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
    </button>
    <div style="flex:1;min-width:0;text-align:center">
      <div style="font-size:16px;font-weight:600;line-height:24px;color:var(--text-primary)">Редактировать профиль</div>
    </div>
    <div style="width:44px;flex-shrink:0"></div>
  </div>

  <div style="flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch">
    <div style="display:flex;flex-direction:column;gap:24px;padding:24px 16px 32px">

      <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
        <div class="profile-avatar avatar avatar-3xl" style="background:var(--btn-primary-bg);color:var(--text-inverse);font-size:36px;font-weight:600"></div>
        <button style="border:none;background:transparent;font-family:var(--font-family);font-size:14px;font-weight:500;color:var(--text-accent);cursor:pointer;touch-action:manipulation;padding:4px 8px;border-radius:var(--radius-s)">
          Изменить фото
        </button>
      </div>

      <div style="background:var(--surface-primary);border-radius:var(--radius-l);box-shadow:0 4px 20px rgba(0,0,0,0.08);overflow:hidden">
        <div style="padding:16px;border-bottom:1px solid var(--border-secondary);display:flex;flex-direction:column;gap:4px">
          <label style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-secondary)">Имя и фамилия</label>
          <input name="profile-name" type="text"
            style="border:none;background:transparent;font-family:var(--font-family);font-size:16px;font-weight:400;line-height:24px;color:var(--text-primary);outline:none;width:100%;padding:0">
        </div>
        <div style="padding:16px;display:flex;flex-direction:column;gap:4px">
          <label style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-secondary)">Номер телефона</label>
          <input name="profile-phone" type="tel"
            style="border:none;background:transparent;font-family:var(--font-family);font-size:16px;font-weight:400;line-height:24px;color:var(--text-primary);outline:none;width:100%;padding:0">
        </div>
      </div>

      <button class="profile-save-btn" style="width:100%;height:56px;background:var(--btn-primary-bg);color:var(--text-inverse);border:none;border-radius:var(--radius-m);font-family:var(--font-family);font-size:16px;font-weight:500;line-height:24px;cursor:pointer;touch-action:manipulation">
        Сохранить
      </button>

    </div>
  </div>

</div>
`;
