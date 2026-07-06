(window.SCREENS = window.SCREENS || {})['screens/profile.html'] = `
<div class="screen" style="overflow:hidden;background:var(--bg-secondary)">

  <div style="flex-shrink:0;background:var(--bg-secondary);display:flex;align-items:center;gap:4px;padding:8px 6px 8px 16px;min-height:60px">
    <div style="flex:1;min-width:0">
      <div style="font-size:28px;font-weight:600;line-height:36px;color:var(--text-primary)">Профиль</div>
    </div>
    <button class="profile-edit-btn" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13.26 3.6L5.05 12.29C4.74 12.62 4.44 13.27 4.38 13.72L4.01 16.96C3.88 18.13 4.72 18.93 5.88 18.73L9.1 18.18C9.55 18.1 10.18 17.77 10.49 17.43L18.7 8.74C20.07 7.3 20.74 5.65 18.55 3.58C16.37 1.53 14.63 2.16 13.26 3.6Z" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.89 5.05C12.32 7.81 14.56 9.92 17.34 10.2M3 22H21" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>

  <div class="home-scroll">
    <div style="display:flex;flex-direction:column;gap:16px;padding:0 16px 32px">

      <div class="profile-top-card">
        <div class="profile-top-row">
          <div class="profile-avatar avatar avatar-m"></div>
          <div class="profile-top-info">
            <div class="profile-name"></div>
            <div class="profile-school"></div>
          </div>
        </div>
        <div class="profile-stats-row">
          <div class="profile-stat-tile">
            <div class="profile-stat-value profile-stat-avg"></div>
            <div class="profile-stat-label">Средний балл</div>
          </div>
          <div class="profile-stat-tile">
            <div class="profile-stat-value profile-stat-attended"></div>
            <div class="profile-stat-label">Посещено</div>
          </div>
          <div class="profile-stat-tile">
            <div class="profile-stat-value profile-stat-class"></div>
            <div class="profile-stat-label">Класс</div>
          </div>
        </div>
      </div>

      <div class="settings-card">
        <div class="settings-row">
          <div class="settings-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.43 18.37C10.28 18.37 10.14 18.33 10.01 18.24C9.8 18.1 9.68 17.87 9.68 17.62C9.68 17.47 9.67 17.31 9.65 17.15C9.56 16.44 9.24 15.82 8.7 15.28C8.16 14.74 7.49 14.4 6.77 14.31C6.65 14.3 6.48 14.29 6.32 14.3C6.06 14.32 5.82 14.21 5.67 14C5.52 13.8 5.48 13.53 5.56 13.29C5.71 12.88 5.93 12.51 6.19 12.21L7.73 10.27C10.38 6.96 15.75 2.98 19.68 1.4C20.51 1.08 21.4 1.27 22.01 1.87C22.64 2.5 22.83 3.4 22.5 4.22C20.92 8.16 16.95 13.52 13.64 16.17L11.67 17.75C11.3 18.02 11 18.19 10.7 18.31C10.62 18.35 10.52 18.37 10.43 18.37ZM7.54 12.94C8.38 13.16 9.13 13.6 9.76 14.23C10.39 14.85 10.81 15.57 11.02 16.37L12.71 15.01C15.85 12.5 19.62 7.41 21.11 3.67C21.26 3.3 21.05 3.04 20.95 2.95C20.88 2.88 20.62 2.66 20.22 2.81C16.5 4.31 11.41 8.08 8.89 11.22L7.54 12.94Z" fill="var(--icon-accent)"/>
              <path d="M4.08 22.75C3.33 22.75 2.61 22.45 2.07 21.91C1.45 21.29 1.15 20.43 1.25 19.55L1.52 17.09C1.78 14.65 3.78 12.84 6.26 12.79C6.45 12.78 6.7 12.79 6.93 12.81C8.02 12.95 8.99 13.44 9.77 14.22C10.54 14.99 11 15.91 11.14 16.94C11.17 17.16 11.19 17.4 11.19 17.61C11.19 18.93 10.68 20.16 9.76 21.09C8.99 21.85 8 22.32 6.88 22.46L4.41 22.73C4.3 22.74 4.19 22.75 4.08 22.75Z" fill="var(--icon-accent)"/>
              <path d="M14.24 15.22C13.83 15.22 13.49 14.88 13.49 14.47C13.49 12.27 11.7 10.49 9.51 10.49C9.1 10.49 8.76 10.15 8.76 9.74C8.76 9.33 9.09 8.99 9.5 8.99C12.52 8.99 14.98 11.45 14.98 14.47C14.99 14.89 14.65 15.22 14.24 15.22Z" fill="var(--icon-accent)"/>
            </svg>
          </div>
          <div class="settings-label">Тёмная тема</div>
          <button class="theme-switch" role="switch" aria-checked="false">
            <span class="theme-switch-knob"></span>
          </button>
        </div>
        <div class="settings-divider"></div>
        <button class="settings-row settings-row-btn" onclick="Router.goTo('/notifications')">
          <div class="settings-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 10.52C11.59 10.52 11.25 10.18 11.25 9.77V6.44C11.25 6.03 11.59 5.69 12 5.69C12.41 5.69 12.75 6.03 12.75 6.44V9.77C12.75 10.19 12.41 10.52 12 10.52Z" fill="var(--icon-accent)"/>
              <path d="M12.02 20.35C9.44 20.35 6.87 19.94 4.42 19.12C3.51 18.82 2.82 18.17 2.52 17.35C2.22 16.53 2.32 15.59 2.81 14.77L4.08 12.65C4.36 12.18 4.61 11.3 4.61 10.75V8.65C4.61 4.56 7.93 1.24 12.02 1.24C16.11 1.24 19.43 4.56 19.43 8.65V10.75C19.43 11.29 19.68 12.18 19.96 12.65L21.23 14.77C21.7 15.55 21.78 16.48 21.47 17.33C21.16 18.18 20.48 18.83 19.62 19.12C17.17 19.95 14.6 20.35 12.02 20.35ZM12.02 2.75C8.76 2.75 6.11 5.4 6.11 8.66V10.76C6.11 11.57 5.79 12.74 5.37 13.43L4.1 15.56C3.84 15.99 3.78 16.45 3.93 16.85C4.08 17.25 4.42 17.55 4.9 17.71C9.5 19.24 14.56 19.24 19.16 17.71C19.59 17.57 19.92 17.25 20.07 16.83C20.23 16.41 20.18 15.95 19.95 15.56L18.68 13.44C18.26 12.75 17.94 11.58 17.94 10.77V8.67C17.93 5.4 15.28 2.75 12.02 2.75Z" fill="var(--icon-accent)"/>
              <path d="M12 22.9C10.93 22.9 9.88 22.46 9.12 21.7C8.36 20.94 7.92 19.89 7.92 18.82H9.42C9.42 19.5 9.7 20.16 10.18 20.64C10.66 21.12 11.32 21.4 12 21.4C13.42 21.4 14.58 20.24 14.58 18.82H16.08C16.08 21.07 14.25 22.9 12 22.9Z" fill="var(--icon-accent)"/>
            </svg>
          </div>
          <div class="settings-label">Уведомления</div>
          <img src="icons/arrow-right.svg" width="24" height="24" alt="" class="settings-chevron">
        </button>
        <div class="settings-divider"></div>
        <div class="settings-row">
          <div class="settings-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z" fill="var(--icon-accent)"/>
              <path d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z" fill="var(--icon-accent)"/>
              <path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z" fill="var(--icon-accent)"/>
            </svg>
          </div>
          <div class="settings-label">Конфиденциальность</div>
          <img src="icons/arrow-right.svg" width="24" height="24" alt="" class="settings-chevron">
        </div>
        <div class="settings-divider"></div>
        <div class="settings-row">
          <div class="settings-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 22.32C7.72 22.32 7.43 22.25 7.17 22.11C6.6 21.81 6.25 21.21 6.25 20.57V19.15C3.23 18.84 1.25 16.62 1.25 13.44V7.44C1.25 4 3.56 1.69 7 1.69H17C20.44 1.69 22.75 4 22.75 7.44V13.44C22.75 16.88 20.44 19.19 17 19.19H13.23L8.97 22.03C8.68 22.22 8.34 22.32 8 22.32ZM7 3.18C4.42 3.18 2.75 4.85 2.75 7.43V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93 20.81 8.03 20.84 8.14 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.43C21.26 4.85 19.59 3.18 17.01 3.18H7Z" fill="var(--icon-accent)"/>
              <path d="M12 12.11C11.59 12.11 11.25 11.77 11.25 11.36V11.15C11.25 9.99 12.1 9.42 12.42 9.2C12.79 8.95 12.91 8.78 12.91 8.52C12.91 8.02 12.5 7.61 12 7.61C11.5 7.61 11.09 8.02 11.09 8.52C11.09 8.93 10.75 9.27 10.34 9.27C9.93 9.27 9.59 8.93 9.59 8.52C9.59 7.19 10.67 6.11 12 6.11C13.33 6.11 14.41 7.19 14.41 8.52C14.41 9.66 13.57 10.23 13.26 10.44C12.87 10.7 12.75 10.87 12.75 11.15V11.36C12.75 11.78 12.41 12.11 12 12.11Z" fill="var(--icon-accent)"/>
              <path d="M12 14.6C11.58 14.6 11.25 14.26 11.25 13.85C11.25 13.44 11.59 13.1 12 13.1C12.41 13.1 12.75 13.44 12.75 13.85C12.75 14.26 12.42 14.6 12 14.6Z" fill="var(--icon-accent)"/>
            </svg>
          </div>
          <div class="settings-label">Помощь и поддержка</div>
          <img src="icons/arrow-right.svg" width="24" height="24" alt="" class="settings-chevron">
        </div>
      </div>

      <button class="logout-card profile-logout-btn">Выйти</button>

    </div>
  </div>

</div>
`;
