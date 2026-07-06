(window.SCREENS = window.SCREENS || {})['screens/home.html'] = `
<div class="screen" style="overflow:hidden;background:var(--bg-secondary)">

  <div style="flex-shrink:0;background:var(--bg-secondary);display:flex;align-items:center;gap:4px;padding:8px 6px 8px 16px;min-height:60px;z-index:10">
    <div style="flex:1;min-width:0">
      <div class="home-greeting" style="font-size:28px;font-weight:600;line-height:36px;color:var(--text-primary)"></div>
    </div>
    <button class="home-notif-btn" onclick="Router.goTo('/notifications')" style="position:relative;width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;padding:8px;flex-shrink:0;touch-action:manipulation">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color:var(--icon-primary)">
        <path d="M12.0199 20.53C9.68987 20.53 7.35987 20.16 5.14987 19.42C4.30987 19.13 3.66987 18.54 3.38987 17.77C3.09987 17 3.19987 16.15 3.65987 15.39L4.80987 13.48C5.04987 13.08 5.26987 12.28 5.26987 11.81V8.92C5.26987 5.2 8.29987 2.17 12.0199 2.17C15.7399 2.17 18.7699 5.2 18.7699 8.92V11.81C18.7699 12.27 18.9899 13.08 19.2299 13.49L20.3699 15.39C20.7999 16.11 20.8799 16.98 20.5899 17.77C20.2999 18.56 19.6699 19.16 18.8799 19.42C16.6799 20.16 14.3499 20.53 12.0199 20.53ZM12.0199 3.67C9.12987 3.67 6.76987 6.02 6.76987 8.92V11.81C6.76987 12.54 6.46987 13.62 6.09987 14.25L4.94987 16.16C4.72987 16.53 4.66987 16.92 4.79987 17.25C4.91987 17.59 5.21987 17.85 5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25C17.5599 13.6 17.2699 12.53 17.2699 11.8V8.92C17.2699 6.02 14.9199 3.67 12.0199 3.67Z" fill="currentColor"/>
        <path d="M13.8801 3.93999C13.8101 3.93999 13.7401 3.92999 13.6701 3.90999C13.3801 3.82999 13.1001 3.76999 12.8301 3.72999C11.9801 3.61999 11.1601 3.67999 10.3901 3.90999C10.1101 3.99999 9.81011 3.90999 9.62011 3.69999C9.43011 3.48999 9.37011 3.18999 9.48011 2.91999C9.89011 1.86999 10.8901 1.17999 12.0301 1.17999C13.1701 1.17999 14.1701 1.85999 14.5801 2.91999C14.6801 3.18999 14.6301 3.48999 14.4401 3.69999C14.2901 3.85999 14.0801 3.93999 13.8801 3.93999Z" fill="currentColor"/>
        <path d="M12.02 22.81C11.03 22.81 10.07 22.41 9.37002 21.71C8.67002 21.01 8.27002 20.05 8.27002 19.06H9.77002C9.77002 19.65 10.01 20.23 10.43 20.65C10.85 21.07 11.43 21.31 12.02 21.31C13.26 21.31 14.27 20.3 14.27 19.06H15.77C15.77 21.13 14.09 22.81 12.02 22.81Z" fill="currentColor"/>
      </svg>
      <span class="home-notif-dot" style="display:none;position:absolute;top:8px;right:8px;width:8px;height:8px;border-radius:50%;background:#e93334;border:1.5px solid var(--bg-secondary)"></span>
    </button>
  </div>

  <div class="home-scroll">
    <div style="display:flex;flex-direction:column;gap:24px;padding-bottom:calc(70px + env(safe-area-inset-bottom) + 30px)">

      <!-- Виджет текущего урока -->
      <div style="padding:0 16px">
        <div class="home-lesson-widget" onclick="Router.goTo('/schedule')" style="background:var(--surface-inverse);border-radius:var(--radius-l);padding:20px;display:flex;flex-direction:column;gap:12px;cursor:pointer;touch-action:manipulation">
          <div style="display:flex;align-items:center;gap:16px">
            <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:12px">
              <span style="display:inline-flex;align-items:center;padding:4px 6px;background:var(--surface-success);border-radius:var(--radius-full);font-size:12px;font-weight:500;line-height:16px;color:#1b1b1b;align-self:flex-start;white-space:nowrap">Идет сейчас</span>
              <div>
                <div class="home-lesson-subject" style="font-size:24px;font-weight:600;line-height:32px;color:var(--text-inverse)"></div>
                <div class="home-lesson-teacher" style="font-size:14px;font-weight:400;line-height:20px;color:var(--text-tertiary)"></div>
              </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <div style="display:flex;align-items:center;gap:4px;background:rgba(255,255,255,0.1);border-radius:8px;padding:4px 6px">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="var(--text-tertiary)"/>
                    <path d="M15.7101 15.93C15.5801 15.93 15.4501 15.9 15.3301 15.82L12.2301 13.97C11.4601 13.51 10.8901 12.5 10.8901 11.61V7.51001C10.8901 7.10001 11.2301 6.76001 11.6401 6.76001C12.0501 6.76001 12.3901 7.10001 12.3901 7.51001V11.61C12.3901 11.97 12.6901 12.5 13.0001 12.68L16.1001 14.53C16.4601 14.74 16.5701 15.2 16.3601 15.56C16.2101 15.8 15.9601 15.93 15.7101 15.93Z" fill="var(--text-tertiary)"/>
                  </svg>
                  <span class="home-lesson-time-text" style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-tertiary)"></span>
                </div>
                <div style="display:flex;align-items:center;gap:4px;background:rgba(255,255,255,0.1);border-radius:8px;padding:4px 6px">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z" fill="var(--text-tertiary)"/>
                    <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="var(--text-tertiary)"/>
                  </svg>
                  <span class="home-lesson-room-text" style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-tertiary)"></span>
                </div>
              </div>
            </div>
            <div style="width:1px;align-self:stretch;background:rgba(255,255,255,0.1);flex-shrink:0"></div>
            <div style="width:84px;flex-shrink:0;display:flex;flex-direction:column;gap:8px">
              <div style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-tertiary)">До конца</div>
              <div class="home-lesson-remaining" style="font-size:20px;font-weight:600;line-height:28px;color:var(--surface-accent)"></div>
              <div>
                <div style="background:#8a8a8a;border-radius:var(--radius-full);height:4px;overflow:hidden">
                  <div class="home-lesson-progress" style="background:var(--surface-accent);height:4px;border-radius:var(--radius-full);width:62%"></div>
                </div>
                <div style="text-align:right;margin-top:2px">
                  <span class="home-lesson-percent" style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-tertiary)">62%</span>
                </div>
              </div>
            </div>
          </div>
          <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:12px;display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-tertiary)">Далее</span>
            <span class="home-lesson-next" style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-tertiary)"></span>
          </div>
        </div>
      </div>

      <!-- Последние оценки: заголовок с padding, ряд карточек на полную ширину -->
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="padding:0 16px;display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:20px;font-weight:600;line-height:28px;color:var(--text-primary)">Последние оценки</div>
          <button onclick="Router.goTo('/grades')" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;touch-action:manipulation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="home-grades-row" style="display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding:4px 16px 8px;min-height:80px;align-items:flex-start"></div>
      </div>

      <!-- Домашнее задание: с горизонтальным padding -->
      <div style="padding:0 16px;display:flex;flex-direction:column;gap:8px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:20px;font-weight:600;line-height:28px;color:var(--text-primary)">Домашнее задание</div>
          <button onclick="Router.goTo('/schedule')" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;touch-action:manipulation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="home-homework-card" style="background:var(--surface-primary);border-radius:var(--radius-l);overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
          <div style="padding:12px 16px 0">
            <div class="home-homework-date" style="font-size:12px;font-weight:600;line-height:16px;color:var(--text-secondary)"></div>
          </div>
          <div class="home-homework-list"></div>
        </div>
      </div>

      <!-- Новости школы: заголовок с padding, ряд карточек на полную ширину -->
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="padding:0 16px;display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:20px;font-weight:600;line-height:28px;color:var(--text-primary)">Новости школы</div>
          <button onclick="Router.goTo('/news')" style="width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;touch-action:manipulation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="home-news-row" style="display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding:4px 16px 8px;min-height:148px;align-items:flex-start"></div>
      </div>

    </div>
  </div>

</div>
`;
