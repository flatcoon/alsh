const IS_DEV = ['localhost', '127.0.0.1', ''].includes(location.hostname) || location.protocol === 'file:';

if ('serviceWorker' in navigator) {
  if (IS_DEV) {
    navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
    if (window.caches) caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
  } else {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

function qs(sel)  { return (window.__activeScreen || document).querySelector(sel); }
function qsa(sel) { return (window.__activeScreen || document).querySelectorAll(sel); }

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function isDarkTheme() {
  return document.documentElement.dataset.theme === 'dark';
}

function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : '';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    const shell = document.getElementById('app-shell');
    metaTheme.content = (shell && shell.style.background) ? cssVar('--bg-secondary') : cssVar('--bg-primary');
  }
}

function formatInitials(name) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function toDateKey(date) {
  return date.toISOString().split('T')[0];
}

function formatDate(dateKey) {
  const d = new Date(dateKey + 'T00:00:00');
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
}

function getDayName(dateKey) {
  const d = new Date(dateKey + 'T00:00:00');
  return d.toLocaleDateString('ru-RU', { weekday: 'short' });
}

function getWeekDates(baseDate) {
  const d = new Date(baseDate);
  const day = d.getDay();
  const monday = new Date(d);
  monday.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
  return Array.from({ length: 7 }, (_, i) => {
    const dd = new Date(monday);
    dd.setDate(monday.getDate() + i);
    return toDateKey(dd);
  });
}

function gradeClass(g) {
  if (g >= 5) return 'grade-5';
  if (g >= 4) return 'grade-4';
  if (g >= 3) return 'grade-3';
  return 'grade-2';
}

function renderAvatar(person, size = 'avatar-s') {
  const initials = formatInitials(person.name || '?');
  if (person.avatar) {
    return `<div class="avatar ${size}"><img src="${person.avatar}" alt="${person.name}"></div>`;
  }
  return `<div class="avatar ${size}">${initials}</div>`;
}

/* ===================== BOTTOM SHEET (Toolbar) ===================== */
let bottomSheetSelected = null;
let bottomSheetOnApply = null;

function renderBottomSheetList(items) {
  const listEl = document.getElementById('bottom-sheet-list');
  if (!listEl) return;
  listEl.innerHTML = items.map(item => `
    <button type="button" class="sheet-list-item${item === bottomSheetSelected ? ' selected' : ''}" data-value="${item}">
      <div class="sheet-list-item-label">${item}</div>
      <div class="sheet-radio"></div>
    </button>
  `).join('');
  listEl.querySelectorAll('.sheet-list-item').forEach(btn => {
    btn.onclick = () => {
      bottomSheetSelected = btn.dataset.value;
      renderBottomSheetList(items);
    };
  });
}

function openBottomSheet({ title, items, selected, onApply }) {
  const backdrop = document.getElementById('sheet-backdrop');
  const sheet = document.getElementById('bottom-sheet');
  const titleEl = document.getElementById('bottom-sheet-title');
  if (!backdrop || !sheet || !titleEl) return;

  bottomSheetSelected = selected;
  bottomSheetOnApply = onApply;
  titleEl.textContent = title;
  renderBottomSheetList(items);

  const footerEl = sheet.querySelector('.bottom-sheet-footer');
  if (footerEl) footerEl.style.display = '';

  backdrop.classList.add('open');
  sheet.classList.add('open');
}

function closeBottomSheet() {
  const backdrop = document.getElementById('sheet-backdrop');
  const sheet = document.getElementById('bottom-sheet');
  if (backdrop) backdrop.classList.remove('open');
  if (sheet) sheet.classList.remove('open');
}

(function initBottomSheetChrome() {
  const backdrop = document.getElementById('sheet-backdrop');
  const closeBtn = document.getElementById('bottom-sheet-close');
  const applyBtn = document.getElementById('bottom-sheet-apply');
  if (backdrop) backdrop.onclick = closeBottomSheet;
  if (closeBtn) closeBtn.onclick = closeBottomSheet;
  if (applyBtn) {
    applyBtn.onclick = () => {
      if (bottomSheetOnApply) bottomSheetOnApply(bottomSheetSelected);
      closeBottomSheet();
    };
  }
})();

window.App = { formatInitials, toDateKey, formatDate, getDayName, getWeekDates, gradeClass, renderAvatar, isDarkTheme, setTheme };

function initScreen(path, params = {}) {
  const shell = document.getElementById('app-shell');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (path !== '/home') {
    if (shell) shell.style.background = '';
    if (metaTheme) metaTheme.content = cssVar('--bg-primary');
  }
  updateChatsBadge();
  if (path === '' || path === '/') return initPreloader();
  if (path.startsWith('/onboarding')) return initOnboarding(path);
  if (path === '/welcome') return initWelcome();
  if (path === '/enter-code') return initEnterCode();
  if (path === '/home') return initHome();
  if (path === '/schedule') return initSchedule();
  if (path === '/grades') return initGrades();
  if (path === '/news') return initNewsList();
  if (path.startsWith('/news/')) return initNewsItem(params.id);
  if (path === '/chats') return initChats();
  if (path === '/chats/search') return initChatSearch();
  if (path.startsWith('/chat/') && path.endsWith('/members/search')) return initMemberSearch(params.id);
  if (path.startsWith('/chat/') && path.endsWith('/members')) return initParticipants(params.id);
  if (path.startsWith('/chat/')) return initChat(params.id);
  if (path === '/profile') return initProfile();
  if (path === '/profile/edit') return initProfileEdit();
  if (path === '/notifications') return initNotifications();
  if (path === '/ar') return initAR();
}

window.initScreen = initScreen;

/* ===================== ПРЕЛОАДЕР ===================== */
function initPreloader() {
  const bar = qs('.preloader-bar-fill');
  if (!bar) return;
  let w = 0;
  const iv = setInterval(() => {
    w += 2;
    bar.style.width = w + '%';
    if (w >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        const done = localStorage.getItem('onboarding_done');
        Router.goTo(done ? '/home' : '/onboarding/1');
      }, 400);
    }
  }, 40);
}

/* ===================== ОНБОРДИНГ ===================== */
const ONBOARDING_SLIDES = [
  {
    img: 'images/mascot/onboarding1-animated.svg',
    title: 'Учеба под рукой',
    subtitle: 'Расписание, оценки, домашние задания и школьные новости собраны в одном приложении.',
    showBack: false,
    showSkip: true,
    btnText: 'Дальше',
  },
  {
    img: 'images/mascot/onboarding2.png',
    title: 'Быстрая коммуникация',
    subtitle: 'Общайся с одноклассниками и преподавателями в удобных чатах внутри приложения.',
    showBack: true,
    showSkip: true,
    btnText: 'Дальше',
  },
  {
    img: 'images/mascot/onboarding3.png',
    title: 'Твой цифровой помощник',
    subtitle: 'Открывай новые образы персонажа и используй AR-режим для взаимодействия с ним.',
    showBack: true,
    showSkip: false,
    btnText: 'Начать',
  },
];

function initOnboarding(path) {
  const step = parseInt(path.split('/').pop()) || 1;
  const slide = ONBOARDING_SLIDES[step - 1];
  if (!slide) return;

  const imgEl    = qs('.onboarding-slide-img');
  const titleEl  = qs('.onboarding-title');
  const subEl    = qs('.onboarding-subtitle');
  const dotsEl   = qs('.onboarding-dots');
  const backBtn  = qs('.onboarding-back-btn');
  const skipBtn  = qs('.onboarding-skip-btn');
  const nextBtn  = qs('.onboarding-next-btn');

  if (imgEl) imgEl.src = slide.img;
  if (titleEl) titleEl.textContent = slide.title;
  if (subEl) subEl.textContent = slide.subtitle;
  if (nextBtn) nextBtn.textContent = slide.btnText;

  if (backBtn) backBtn.style.display = slide.showBack ? 'flex' : 'none';
  if (skipBtn) skipBtn.style.display = slide.showSkip ? 'flex' : 'none';

  if (dotsEl) {
    dotsEl.innerHTML = ONBOARDING_SLIDES.map((_, i) =>
      `<div class="onboarding-dot${i + 1 === step ? ' active' : ''}"></div>`
    ).join('');
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      if (step < 3) {
        Router.goTo('/onboarding/' + (step + 1));
      } else {
        Router.goTo('/welcome');
      }
    };
  }
  if (backBtn) {
    backBtn.onclick = () => Router.goTo('/onboarding/' + (step - 1));
  }
  if (skipBtn) {
    skipBtn.onclick = () => Router.goTo('/welcome');
  }
}

/* ===================== ДОБРО ПОЖАЛОВАТЬ ===================== */
function initWelcome() {
  const input    = qs('.welcome-phone');
  const btn      = qs('.welcome-get-code-btn');
  const clearBtn = qs('.welcome-clear-btn');
  const darkSpan = qs('.phone-dark');
  const graySpan = qs('.phone-gray');
  const tapArea  = qs('.phone-field-tap');
  if (!input || !btn || !darkSpan || !graySpan) return;

  const MASK = '(000) 000-00-00';
  const digitPositions = [];
  for (let i = 0; i < MASK.length; i++) {
    if (MASK[i] === '0') digitPositions.push(i);
  }

  const cursorEl = qs('.phone-cursor');
  const fieldEl  = qs('.phone-field-wrap');
  let digits = [];
  let focused = false;

  function getDisplayParts() {
    let d = 0;
    let formatted = '';
    for (let i = 0; i < MASK.length; i++) {
      formatted += MASK[i] === '0'
        ? (d < digits.length ? digits[d++] : '0')
        : MASK[i];
    }
    const lastPos = digits.length > 0 ? digitPositions[digits.length - 1] : -1;
    const split = lastPos + 1;
    return { dark: formatted.slice(0, split), gray: formatted.slice(split) };
  }

  function updateUI() {
    const { dark, gray } = getDisplayParts();
    darkSpan.textContent = dark;
    graySpan.textContent = gray;
    if (cursorEl) cursorEl.classList.toggle('shown', focused);
    const full = digits.length >= 10;
    btn.disabled = !full;
    btn.style.background = full ? 'var(--btn-primary-bg)' : 'var(--btn-primary-disabled)';
    btn.style.color      = full ? 'var(--text-inverse)' : 'var(--text-disabled)';
    btn.style.cursor     = full ? 'pointer' : 'default';
    if (clearBtn) clearBtn.style.display = digits.length > 0 ? 'flex' : 'none';
  }

  updateUI();

  if (tapArea) tapArea.addEventListener('click', () => input.focus());

  input.addEventListener('focus', () => {
    focused = true;
    if (fieldEl) fieldEl.style.borderColor = '#333';
    if (cursorEl) cursorEl.classList.add('shown');
  });

  input.addEventListener('blur', () => {
    focused = false;
    if (fieldEl) fieldEl.style.borderColor = 'var(--border-secondary)';
    if (cursorEl) cursorEl.classList.remove('shown');
  });

  input.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
      e.preventDefault();
      if (digits.length < 10) { digits.push(e.key); updateUI(); }
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      if (digits.length > 0) { digits.pop(); updateUI(); }
    } else if (e.key !== 'Tab') {
      e.preventDefault();
    }
  });

  input.addEventListener('input', () => {
    let raw = input.value.replace(/\D/g, '');
    input.value = '';
    if (raw.length === 11 && raw.startsWith('7')) raw = raw.slice(1);
    digits = raw.slice(0, 10).split('');
    updateUI();
  });

  if (clearBtn) {
    clearBtn.onclick = () => { digits = []; updateUI(); input.focus(); };
  }

  btn.onclick = () => {
    if (!btn.disabled) {
      window._phoneDigits = [...digits];
      Router.goTo('/enter-code');
    }
  };
}

/* ===================== ВВОД КОДА ===================== */
function initEnterCode() {
  const cells  = qsa('.otp-cell');
  const errEl  = qs('.otp-error');
  const resend = qs('.btn-resend');
  const phoneEl = qs('.enter-code-phone');
  if (!cells.length) return;

  // Показываем замаскированный номер
  const digits = window._phoneDigits || [];
  if (phoneEl && digits.length >= 10) {
    phoneEl.textContent = `+7 ${digits[0]}** *** ** ${digits[8]}${digits[9]}`;
  }

  // Таймер повторного запроса
  let resendTimer = 60;
  let resendInterval = null;
  function updateResend() {
    if (!resend) return;
    if (resendTimer <= 0) {
      resend.disabled = false;
      resend.style.color = 'var(--text-accent)';
      resend.style.cursor = 'pointer';
      resend.textContent = 'Запросить код повторно';
    } else {
      resend.textContent = `Запросить повторно (${resendTimer})`;
      resendTimer--;
    }
  }
  updateResend();
  resendInterval = setInterval(() => {
    updateResend();
    if (resendTimer < 0) clearInterval(resendInterval);
  }, 1000);

  if (resend) {
    resend.onclick = () => {
      if (resend.disabled) return;
      resendTimer = 60;
      resend.disabled = true;
      resend.style.color = 'var(--text-disabled)';
      resend.style.cursor = 'default';
      clearInterval(resendInterval);
      updateResend();
      resendInterval = setInterval(() => {
        updateResend();
        if (resendTimer < 0) clearInterval(resendInterval);
      }, 1000);
    };
  }

  function submitCode() {
    const code = Array.from(cells).map(c => c.value).join('');
    if (code === '0000') {
      clearInterval(resendInterval);
      localStorage.setItem('onboarding_done', '1');
      Router.goTo('/home');
    } else {
      if (errEl) errEl.style.display = 'block';
      cells.forEach(c => c.style.borderColor = 'var(--icon-error)');
      setTimeout(() => {
        cells.forEach(c => { c.style.borderColor = ''; c.value = ''; });
        if (errEl) errEl.style.display = 'none';
        cells[0].focus();
      }, 2000);
    }
  }

  cells.forEach((cell, i) => {
    cell.addEventListener('input', (e) => {
      const v = e.target.value.replace(/\D/g, '');
      e.target.value = v.slice(-1);
      if (v && i < cells.length - 1) {
        cells[i + 1].focus();
      } else if (v && i === cells.length - 1) {
        cell.blur();
        submitCode();
      }
    });
    cell.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !cell.value && i > 0) cells[i - 1].focus();
    });
  });
}

/* ===================== ГЛАВНАЯ ===================== */
function initHome() {
  const shell = document.getElementById('app-shell');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (shell) shell.style.background = cssVar('--bg-secondary');
  if (metaTheme) metaTheme.content = cssVar('--bg-secondary');

  const firstName = APP_DATA.user.name.split(' ')[1] || APP_DATA.user.name.split(' ')[0];
  const greetEl = qs('.home-greeting');
  if (greetEl) greetEl.textContent = `Привет, ${firstName}!`;

  const dot = qs('.home-notif-dot');
  const unread = APP_DATA.notifications.filter(n => !n.read).length;
  if (dot) dot.style.display = unread > 0 ? 'block' : 'none';

  const today = toDateKey(new Date());
  const todayLessons = APP_DATA.schedule[today] || [];
  const demoKey = Object.keys(APP_DATA.schedule).find(k => APP_DATA.schedule[k].length > 0) || today;
  const lessons = todayLessons.length > 0 ? todayLessons : APP_DATA.schedule[demoKey] || [];

  if (lessons.length > 0) {
    const l = lessons[0];
    const next = lessons[1];
    const roomLabel = l.room === 'Зал' ? 'Зал' : 'Каб.' + l.room;
    const subjectEl = qs('.home-lesson-subject');
    const teacherEl = qs('.home-lesson-teacher');
    const timeEl    = qs('.home-lesson-time-text');
    const roomEl    = qs('.home-lesson-room-text');
    const remainEl  = qs('.home-lesson-remaining');
    const nextEl    = qs('.home-lesson-next');
    if (subjectEl) subjectEl.textContent = l.subject;
    if (teacherEl) teacherEl.textContent = l.teacher;
    if (timeEl)    timeEl.textContent    = l.time;
    if (roomEl)    roomEl.textContent    = roomLabel;
    if (remainEl)  remainEl.textContent  = '10 мин';
    if (nextEl)    nextEl.textContent    = next ? next.subject + ' · ' + (next.room === 'Зал' ? 'Зал' : 'Каб.' + next.room) : '—';
  }

  const gradesRow = qs('.home-grades-row');
  if (gradesRow) {
    gradesRow.innerHTML = APP_DATA.grades.slice(0, 6).map(s => {
      const g = s.grades[s.grades.length - 1];
      const color = g >= 4 ? 'var(--grade-success)' : g >= 3 ? 'var(--grade-warning)' : 'var(--grade-error)';
      return `<div style="flex-shrink:0;width:88px;background:var(--surface-primary);border-radius:12px;box-shadow:0 2px 5px rgba(0,0,0,0.08);padding:8px 12px 4px;display:flex;flex-direction:column;gap:4px">
        <div style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.subject}</div>
        <div style="font-size:32px;font-weight:600;line-height:40px;color:${color}">${g}</div>
      </div>`;
    }).join('');
  }

  const hwDate = qs('.home-homework-date');
  const hwList = qs('.home-homework-list');
  if (hwDate && hwList && APP_DATA.homework && APP_DATA.homework.length > 0) {
    const hw = APP_DATA.homework;
    const d = new Date(hw[0].date + 'T00:00:00');
    const day = d.getDate();
    const month = d.toLocaleDateString('ru-RU', { month: 'long' });
    const weekday = d.toLocaleDateString('ru-RU', { weekday: 'long' });
    hwDate.textContent = `${day} ${month}, ${weekday.charAt(0).toUpperCase() + weekday.slice(1)}`;
    hwList.innerHTML = hw.map((item, i) => `
      <div style="${i > 0 ? 'border-top:1px solid var(--border-secondary);' : ''}padding:12px 16px 16px;display:flex;flex-direction:column;gap:2px">
        <div style="font-size:16px;font-weight:500;line-height:24px;color:var(--text-primary)">${item.subject}</div>
        <div style="font-size:16px;font-weight:400;line-height:24px;color:var(--text-secondary)">${item.task}</div>
      </div>
    `).join('');
  }

  [qs('.home-grades-row'), qs('.home-news-row')].forEach(row => {
    if (!row) return;
    let sx, sl, moving = false;
    row.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sl = row.scrollLeft; moving = true; }, { passive: true });
    row.addEventListener('touchmove', e => { if (moving) row.scrollLeft = sl + (sx - e.touches[0].clientX); }, { passive: true });
    row.addEventListener('touchend', () => { moving = false; }, { passive: true });
  });

  const newsRow = qs('.home-news-row');
  if (newsRow) {
    const tagColors = [
      { bg: 'var(--surface-accent)', text: '#1b1b1b', label: 'Сегодня' },
      { bg: 'var(--surface-inverse)', text: 'var(--text-inverse)', label: null },
      { bg: 'var(--surface-inverse)', text: 'var(--text-inverse)', label: null },
    ];
    const cardBg = ['#c8d8f0', '#c0e0c8', '#f0d8c8'];
    newsRow.innerHTML = APP_DATA.news.slice(0, 3).map((n, i) => {
      const t = tagColors[i] || tagColors[tagColors.length - 1];
      const tagLabel = t.label || n.dateShort;
      return `<div onclick="Router.goTo('/news/${n.id}')" style="flex-shrink:0;width:164px;height:148px;background:var(--surface-primary);border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);cursor:pointer;position:relative">
        <div style="display:flex;flex-direction:column;overflow:hidden;border-radius:inherit;height:100%">
          <div style="height:100px;background:${cardBg[i % cardBg.length]};flex-shrink:0"></div>
          <div style="padding:8px 12px;height:48px;display:flex;align-items:center">
            <div style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-primary);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word">${n.title}</div>
          </div>
        </div>
        <div style="position:absolute;top:8px;left:8px;padding:4px 6px;border-radius:var(--radius-full);background:${t.bg};font-size:12px;font-weight:500;line-height:16px;color:${t.text};white-space:nowrap;z-index:1">${tagLabel}</div>
      </div>`;
    }).join('');
  }
}

/* ===================== РАСПИСАНИЕ ===================== */
function initSchedule() {
  const picker  = qs('.day-picker');
  const listEl  = qs('.schedule-list');
  const emptyEl = qs('.schedule-empty');
  const monthEl = qs('.schedule-month');
  const dayLabelEl = qs('.schedule-day-label');
  if (!picker || !listEl) return;

  const today = new Date();
  let selectedKey = toDateKey(today);
  let weekBase = new Date(today);

  const allKeys = Object.keys(APP_DATA.schedule);
  const hasDataToday = APP_DATA.schedule[selectedKey] !== undefined;
  // "Виртуальное сегодня" — когда у реальной даты устройства нет данных,
  // показываем демо-день (13 января) и симулируем, что сейчас идёт 2-й урок,
  // чтобы карточки "Идёт сейчас"/тени прошедших уроков были видны в демо.
  let referenceKey = toDateKey(today);
  let referenceNowMin = today.getHours() * 60 + today.getMinutes();
  if (!hasDataToday) {
    const demoKey = APP_DATA.schedule['2025-01-13'] ? '2025-01-13' : allKeys.find(k => APP_DATA.schedule[k].length > 0);
    if (demoKey) {
      selectedKey = demoKey;
      weekBase = new Date(demoKey + 'T00:00:00');
      referenceKey = demoKey;
      referenceNowMin = 9 * 60;
    }
  }

  function pluralLesson(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'урок';
    if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'урока';
    return 'уроков';
  }

  function breakDuration(prev, next) {
    const end   = prev.time.split('–')[1];
    const start = next.time.split('–')[0];
    const [eh, em] = end.split(':').map(Number);
    const [sh, sm] = start.split(':').map(Number);
    const diff = (sh * 60 + sm) - (eh * 60 + em);
    return diff > 0 ? diff : 10;
  }

  function lessonCardHtml(l, i, lessons) {
    const roomLabel = l.room === 'Зал' ? 'Зал' : `Каб.${l.room}`;

    const breakHtml = i > 0 ? `
      <div style="display:flex;align-items:center;gap:8px;padding:2px 0">
        <div style="flex:1;height:1px;background:var(--border-secondary)"></div>
        <span style="font-size:12px;font-weight:400;line-height:16px;color:var(--text-secondary);white-space:nowrap">Перемена ${breakDuration(lessons[i-1], l)} мин</span>
        <div style="flex:1;height:1px;background:var(--border-secondary)"></div>
      </div>` : '';

    const tagHtml = l.tag ? `
      <div style="align-self:flex-start;padding:4px 6px;border-radius:var(--radius-full);background:${l.tag.type === 'warning' ? 'var(--surface-warning)' : 'var(--surface-error-bg)'};font-size:12px;font-weight:500;line-height:16px;color:#1b1b1b">
        ${l.tag.text}
      </div>` : '';

    const hwHtml = l.homework ? `
      <div style="background:var(--surface-secondary);border-radius:var(--radius-s);padding:12px;display:flex;flex-direction:column;gap:4px">
        <div style="display:flex;align-items:center;gap:6px">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6.32 17.27C5.63 16.87 5.04 16.1 5.04 15.01V4.76C5.04 3.69 5.91 2.84 7 2.84h9.93c1.09 0 1.96.85 1.96 1.92v10.25c0 1.09-.59 1.86-1.28 2.26" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.04 15.22c0-.69.31-1.31.82-1.71.51-.39 1.24-.54 1.98-.32l6.79 2.16c.96.3 1.59 1.17 1.59 2.12V20c0 .66-.44 1.08-1.08.88L6.35 18.62c-.75-.24-1.31-.96-1.31-1.76v-1.64z" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 12.22H8.5M11.5 8.72h-3" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-secondary)">ДОМАШНЕЕ ЗАДАНИЕ</span>
        </div>
        <div style="font-size:14px;font-weight:400;line-height:20px;color:var(--text-primary)">${l.homework}</div>
      </div>` : '';

    const [sh, sm] = l.time.split('–')[0].split(':').map(Number);
    const [eh, em] = l.time.split('–')[1].split(':').map(Number);
    const startMin = sh * 60 + sm;
    const endMin = eh * 60 + em;

    let isCurrent = false;
    let isPast = false;
    if (selectedKey === referenceKey) {
      isCurrent = referenceNowMin >= startMin && referenceNowMin <= endMin;
      isPast = referenceNowMin > endMin;
    } else if (selectedKey < referenceKey) {
      isPast = true;
    }

    let currentHtml = '';
    if (isCurrent) {
      const totalMin = Math.max(endMin - startMin, 1);
      const elapsedMin = Math.min(Math.max(referenceNowMin - startMin, 0), totalMin);
      const progressPct = (elapsedMin / totalMin) * 100;
      const remainingMs = (totalMin - elapsedMin) * 60000;
      currentHtml = `
      <div class="lesson-current">
        <div class="lesson-current-fill" data-remaining-ms="${remainingMs}" style="width:${progressPct}%"></div>
        <span class="lesson-current-label">Идет сейчас</span>
      </div>`;
    }

    const boxShadow = isPast ? 'none' : '0 4px 20px rgba(0,0,0,0.08)';

    return `${breakHtml}
      <div style="background:var(--surface-primary);border-radius:var(--radius-l);box-shadow:${boxShadow};overflow:hidden;display:flex;flex-direction:column">
        <div style="display:flex;align-items:center;gap:8px;padding:16px;border-bottom:1px solid var(--bg-secondary)">
          <div style="flex:1;display:flex;align-items:center;gap:8px">
            <span style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-secondary)">${l.num} урок</span>
            <span style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-secondary)">${l.time}</span>
          </div>
          <span style="font-size:12px;font-weight:500;line-height:16px;color:var(--text-secondary)">${roomLabel}</span>
        </div>
        <div style="padding:8px 16px 16px;display:flex;flex-direction:column;gap:12px">
          <div>
            <div style="font-size:20px;font-weight:600;line-height:28px;color:var(--text-primary)">${l.subject}</div>
            <div style="font-size:14px;font-weight:400;line-height:20px;color:var(--text-secondary)">${l.teacher}</div>
          </div>
          ${tagHtml}${hwHtml}
        </div>
        ${currentHtml}
      </div>`;
  }

  function renderWeek() {
    const days = getWeekDates(weekBase);

    if (monthEl) {
      const first = new Date(days[0] + 'T00:00:00');
      const last  = new Date(days[6] + 'T00:00:00');
      const f = first.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }).replace(' г.', '');
      const l = last.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }).replace(' г.', '');
      monthEl.textContent = `${f} – ${l}`;
    }

    picker.innerHTML = days.map(key => {
      const d  = new Date(key + 'T00:00:00');
      const dn = d.toLocaleDateString('ru-RU', { weekday: 'short' }).replace('.', '');
      const num = d.getDate();
      const isActive = key === selectedKey;
      return `<button class="day-chip${isActive ? ' active' : ''}" data-key="${key}">
        <span class="day-name">${dn.charAt(0).toUpperCase() + dn.slice(1)}</span>
        <span class="day-num">${num}</span>
      </button>`;
    }).join('');

    picker.querySelectorAll('.day-chip').forEach(btn => {
      btn.onclick = () => {
        selectedKey = btn.dataset.key;
        renderWeek();
        renderSchedule();
      };
    });
  }

  function renderSchedule() {
    const lessons = APP_DATA.schedule[selectedKey] || [];
    const date = new Date(selectedKey + 'T00:00:00');
    const dateStr = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }).replace(' г.', '');

    if (lessons.length === 0) {
      if (dayLabelEl) dayLabelEl.textContent = `Уроков нет, ${dateStr}`;
      listEl.style.display = 'none';
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'flex';
    } else {
      const count = lessons.length;
      if (dayLabelEl) dayLabelEl.textContent = `${count} ${pluralLesson(count)}, ${dateStr}`;
      if (emptyEl) emptyEl.style.display = 'none';
      listEl.style.display = 'flex';
      listEl.innerHTML = lessons.map((l, i) => lessonCardHtml(l, i, lessons)).join('');
      startCurrentLessonProgress();
    }
  }

  function startCurrentLessonProgress() {
    const fills = listEl.querySelectorAll('.lesson-current-fill');
    fills.forEach(fill => {
      const remainingMs = parseFloat(fill.dataset.remainingMs);
      if (!(remainingMs > 0)) return;
      fill.style.transitionDuration = remainingMs + 'ms';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          fill.style.width = '100%';
        });
      });
    });
  }

  const prevBtn = qs('.schedule-week-prev');
  const nextBtn = qs('.schedule-week-next');
  if (prevBtn) prevBtn.onclick = () => {
    weekBase.setDate(weekBase.getDate() - 7);
    renderWeek();
    renderSchedule();
  };
  if (nextBtn) nextBtn.onclick = () => {
    weekBase.setDate(weekBase.getDate() + 7);
    renderWeek();
    renderSchedule();
  };

  const notifDot = qs('.schedule-notif-dot');
  if (notifDot) {
    const unread = APP_DATA.notifications.filter(n => !n.read).length;
    notifDot.style.display = unread > 0 ? 'block' : 'none';
  }

  renderWeek();
  renderSchedule();
}

/* ===================== ОЦЕНКИ ===================== */
function avgGradeColor(avg) {
  const r = Math.round(avg);
  if (r >= 5) return '#50ac35';
  if (r === 4) return '#1b1b1b';
  if (r === 3) return '#e6cf2a';
  return '#e93334';
}

function initGrades() {
  const listEl = qs('.grades-list');
  if (!listEl) return;

  const notifDot = qs('.grades-notif-dot');
  if (notifDot) {
    const unread = APP_DATA.notifications.filter(n => !n.read).length;
    notifDot.style.display = unread > 0 ? 'block' : 'none';
  }

  const msg = APP_DATA.motiMessages[Math.floor(Math.random() * APP_DATA.motiMessages.length)];
  const motiTitleEl = qs('.moti-msg-title');
  const motiSubEl   = qs('.moti-msg-subtitle');
  const motiLevelEl = qs('.moti-level-tag');
  const motiFillEl  = qs('.moti-progress-fill');
  const motiXpEl    = qs('.moti-progress-text');
  const motiLinkEl  = qs('.moti-link');
  if (motiTitleEl) motiTitleEl.textContent = msg.title;
  if (motiSubEl)   motiSubEl.textContent   = msg.subtitle;
  if (motiLevelEl) motiLevelEl.textContent = `Уровень ${APP_DATA.moti.level}`;
  if (motiFillEl)  motiFillEl.style.width  = Math.round(APP_DATA.moti.xp / APP_DATA.moti.xpMax * 100) + '%';
  if (motiXpEl)    motiXpEl.textContent    = `${APP_DATA.moti.xp} / ${APP_DATA.moti.xpMax} XP`;
  if (motiLinkEl)  motiLinkEl.href         = APP_DATA.moti.linkUrl;

  function renderList(className) {
    const subjects = APP_DATA.gradesByClass[className] || [];
    listEl.innerHTML = subjects.map(item => {
      const avg = item.avg.toFixed(1);
      const chips = item.grades.map(g => `<div class="grade-chip grade-${g}">${g}</div>`).join('');
      return `
        <div class="grades-card">
          <div class="grades-card-header">
            <div class="t-h4" style="flex:1">${item.subject}</div>
            <div class="grades-card-avg" style="color:${avgGradeColor(item.avg)}">${avg}</div>
          </div>
          <div class="grades-card-chips">${chips}</div>
        </div>
      `;
    }).join('');
  }

  const classSelectBtn = qs('.grades-class-select');
  const classSelectLabel = qs('.grades-class-input');
  const classNames = Object.keys(APP_DATA.gradesByClass);

  function setClass(className) {
    if (classSelectBtn) classSelectBtn.dataset.value = className;
    if (classSelectLabel) classSelectLabel.textContent = className;
    renderList(className);
  }

  setClass(classSelectBtn ? classSelectBtn.dataset.value : '8 класс');

  if (classSelectBtn) {
    classSelectBtn.onclick = () => {
      openBottomSheet({
        title: 'Выбор класса',
        items: classNames,
        selected: classSelectBtn.dataset.value,
        onApply: setClass,
      });
    };
  }

  qsa('.quarter-tab').forEach(tab => {
    if (tab.disabled) return;
    tab.onclick = () => {
      qsa('.quarter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    };
  });
}

/* ===================== СПИСОК НОВОСТЕЙ ===================== */
function initNewsList() {
  const listEl = qs('.news-list');
  if (!listEl) return;
  listEl.innerHTML = APP_DATA.news.map(n => `
    <div class="news-card" style="margin-bottom:16px" onclick="Router.goTo('/news/${n.id}')">
      <div style="height:180px;background:var(--surface-secondary);display:flex;align-items:center;justify-content:center;color:var(--text-secondary);font-size:14px">Фото</div>
      <div class="news-card-body">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <span class="news-tag">${n.tag}</span>
          <span class="t-caption c-secondary">${n.dateShort}</span>
        </div>
        <div class="t-h4" style="margin-top:8px">${n.title}</div>
        <div class="t-bodys c-secondary">${n.preview}</div>
      </div>
    </div>
  `).join('');
}

/* ===================== ДЕТАЛЬ НОВОСТИ ===================== */
function initNewsItem(id) {
  const news = APP_DATA.news.find(n => n.id === parseInt(id));
  if (!news) return;
  const titleEl   = qs('.news-item-title');
  const dateEl    = qs('.news-item-date');
  const contentEl = qs('.news-item-content');
  const tagEl     = qs('.news-item-tag');
  if (titleEl)   titleEl.textContent   = news.title;
  if (dateEl)    dateEl.textContent    = news.date;
  if (contentEl) contentEl.innerHTML   = news.content.split('\n').map(p => p ? `<p>${p}</p>` : '<br>').join('');
  if (tagEl)     tagEl.textContent     = news.tag;
}

/* ===================== СПИСОК ЧАТОВ ===================== */
function updateChatsBadge() {
  const total = APP_DATA.chats.reduce((sum, c) => sum + (c.unread || 0), 0);
  const navBadge = document.getElementById('chats-badge');
  if (navBadge) navBadge.style.display = total > 0 ? '' : 'none';
  if (navBadge) navBadge.textContent = total > 99 ? '99+' : String(total);
}

function chatStatusIconHtml(status) {
  if (status === 'read') {
    return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8.3L4.3 11.6L8.6 5.4" stroke="var(--icon-accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.7 8.3L9 11.6L15 4" stroke="var(--icon-accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  if (status === 'sent') {
    return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8.3L6 12L14 3" stroke="var(--text-secondary)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  return '';
}

function chatItemHtml(chat) {
  const isGroup = chat.type === 'group';
  const isMine = chat.lastSender === 'me';
  const statusHtml = isMine ? chatStatusIconHtml(chat.status) : '';
  const badgeHtml = chat.unread > 0
    ? `<div class="chat-badge">${chat.unread > 99 ? '99+' : chat.unread}</div>`
    : '';
  const senderHtml = (isGroup && chat.lastSender)
    ? `<div class="chat-item-sender">${isMine ? 'Вы' : chat.lastSender}:</div>`
    : '';

  return `
    <div class="chat-item" onclick="Router.goTo('/chat/${chat.id}')">
      ${renderAvatar(chat, 'avatar-m')}
      <div class="chat-item-info">
        <div class="chat-item-top">
          <div class="chat-item-name">${chat.name}</div>
          <div class="chat-item-meta">${statusHtml}<span class="chat-item-time">${chat.dateLabel}</span></div>
        </div>
        <div class="chat-item-bottom">
          <div class="chat-item-message">
            ${senderHtml}
            <div class="chat-item-preview">${chat.lastMessage}</div>
          </div>
          ${badgeHtml}
        </div>
      </div>
    </div>
  `;
}

function initChats() {
  const listEl = qs('.chats-list');
  if (!listEl) return;
  const notifDot = qs('.chats-notif-dot');
  if (notifDot) {
    const unread = APP_DATA.notifications.filter(n => !n.read).length;
    notifDot.style.display = unread > 0 ? 'block' : 'none';
  }
  listEl.innerHTML = APP_DATA.chats.map(chatItemHtml).join('');
  updateChatsBadge();
}

/* ===================== ПОИСК ПО ЧАТАМ ===================== */
function initChatSearch() {
  const input   = qs('.chat-search-input');
  const clearBtn = qs('.chat-search-clear');
  const listEl  = qs('.chat-search-results');
  const emptyEl = qs('.chat-search-empty');
  if (!input || !listEl) return;

  function render() {
    const query = input.value.trim().toLowerCase();
    clearBtn.style.display = query ? 'flex' : 'none';
    const results = query
      ? APP_DATA.chats.filter(c =>
          c.name.toLowerCase().includes(query) ||
          c.lastMessage.toLowerCase().includes(query))
      : APP_DATA.chats;

    listEl.style.display = results.length ? 'block' : 'none';
    emptyEl.style.display = results.length ? 'none' : 'flex';
    listEl.innerHTML = results.map(chatItemHtml).join('');
  }

  input.oninput = render;
  clearBtn.onclick = () => { input.value = ''; render(); input.focus(); };
  render();
  setTimeout(() => input.focus(), 50);
}

/* ===================== ЧАТ ===================== */
function formatFileSize(bytes) {
  if (!bytes && bytes !== 0) return '';
  if (bytes < 1024) return `${bytes} Б`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} КБ`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
}

function fileIconHtml() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-6z" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 2v6h5" stroke="var(--icon-primary)" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
}

function messageBubbleHtml(msg) {
  const metaHtml = `<span class="message-meta">${msg.time}${msg.outgoing ? chatStatusIconHtml(msg.status || 'sent') : ''}</span>`;
  const attachments = msg.attachments || [];
  const imageAttachment = attachments.find(a => a.type === 'image');
  const fileAttachments = attachments.filter(a => a.type !== 'image');

  let inner = '';
  if (imageAttachment) {
    inner += `<div class="message-media"><img src="${imageAttachment.url}" alt="${imageAttachment.name || 'Фото'}" loading="lazy"></div>`;
  }
  fileAttachments.forEach(f => {
    inner += `
      <div class="message-file">
        <div class="message-file-icon">${fileIconHtml()}</div>
        <div class="message-file-info">
          <div class="message-file-name">${f.name}</div>
          <div class="message-file-size">${formatFileSize(f.size)}</div>
        </div>
      </div>`;
  });
  if (msg.text || !attachments.length) {
    inner += `<div class="message-text-block"><p class="message-text">${msg.text || ''}${metaHtml}</p></div>`;
  } else if (imageAttachment) {
    inner += `<div class="message-text-block"><p class="message-text">${metaHtml}</p></div>`;
  }

  return `<div class="message-bubble">${inner}</div>`;
}

function initChat(id) {
  const chat = APP_DATA.chats.find(c => c.id === parseInt(id));
  if (!chat) return;

  const titleEl   = qs('.chat-title');
  const membersEl = qs('.chat-members-count');
  const listEl    = qs('.chat-messages');
  const input     = qs('.chat-input');
  const sendBtn   = qs('.chat-send-btn');
  const membersBtn = qs('.chat-members-btn');
  const avatarEl  = qs('.chat-header-avatar');
  const attachBtn = qs('.chat-attach-btn');
  const attachInput = qs('.chat-attach-input');
  const previewEl = qs('.chat-attach-preview');

  const isDirect = chat.type === 'direct';
  const isGroup = !isDirect;

  if (titleEl) titleEl.textContent = chat.name;
  if (membersEl) {
    if (isDirect) {
      const other = chat.members.find(m => m.name === chat.name);
      membersEl.textContent = other ? other.role : '';
    } else {
      membersEl.textContent = `${chat.members.length} участников`;
    }
  }

  const goToInfo = () => Router.goTo(`/chat/${id}/members`);
  if (membersBtn) membersBtn.onclick = goToInfo;
  if (avatarEl) {
    avatarEl.innerHTML = renderAvatar(chat, 'avatar-s');
    avatarEl.onclick = goToInfo;
  }

  chat.unread = 0;
  updateChatsBadge();

  function memberBySender(senderId, senderName) {
    return chat.members.find(m => m.id === senderId) || chat.members.find(m => m.name === senderName);
  }

  function renderMessages() {
    if (!listEl) return;
    listEl.innerHTML = chat.messages.map(msg => {
      const sender = memberBySender(msg.senderId, msg.sender);
      const avatarHtml = (!msg.outgoing) ? `<div class="message-avatar">${renderAvatar(sender || { name: msg.sender, avatar: null }, 'avatar-xs')}</div>` : '';
      const senderNameHtml = (!msg.outgoing && isGroup) ? `<div class="message-sender">${msg.sender}</div>` : '';
      return `
        <div class="message-wrap ${msg.outgoing ? 'outgoing' : 'incoming'}">
          <div class="message-row">
            ${avatarHtml}
            <div class="message-bubble-col">
              ${senderNameHtml}
              ${messageBubbleHtml(msg)}
            </div>
          </div>
        </div>`;
    }).join('');
    listEl.scrollTop = listEl.scrollHeight;
  }

  if (listEl) {
    listEl.onclick = (e) => {
      const img = e.target.closest('.message-media img');
      if (img) window.open(img.src, '_blank');
    };
  }

  renderMessages();

  /* ---- Вложения (фото и файлы из телефона) ---- */
  let pendingAttachments = [];

  function renderPreview() {
    if (!previewEl) return;
    if (!pendingAttachments.length) {
      previewEl.style.display = 'none';
      previewEl.innerHTML = '';
      return;
    }
    previewEl.style.display = 'flex';
    previewEl.innerHTML = pendingAttachments.map((a, i) => `
      <div class="chat-attach-chip">
        ${a.type === 'image'
          ? `<img class="chat-attach-chip-image" src="${a.url}" alt="${a.name}">`
          : `<div class="chat-attach-chip-file">${fileIconHtml()}<span>${a.name}</span></div>`}
        <button type="button" class="chat-attach-remove" data-index="${i}" aria-label="Убрать">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </div>
    `).join('');
    previewEl.querySelectorAll('.chat-attach-remove').forEach(btn => {
      btn.onclick = () => {
        pendingAttachments.splice(parseInt(btn.dataset.index), 1);
        renderPreview();
      };
    });
  }

  if (attachBtn && attachInput) {
    attachBtn.onclick = () => attachInput.click();
    attachInput.onchange = () => {
      Array.from(attachInput.files).forEach(file => {
        if (file.type.startsWith('image/')) {
          pendingAttachments.push({ type: 'image', url: URL.createObjectURL(file), name: file.name });
        } else {
          pendingAttachments.push({ type: 'file', url: null, name: file.name, size: file.size });
        }
      });
      attachInput.value = '';
      renderPreview();
    };
  }

  if (input && sendBtn) {
    const send = () => {
      const text = input.value.trim();
      if (!text && !pendingAttachments.length) return;
      const now = new Date();
      const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

      if (pendingAttachments.length) {
        pendingAttachments.forEach((att, i) => {
          const isLast = i === pendingAttachments.length - 1;
          chat.messages.push({
            id: Date.now() + i,
            sender: 'me',
            senderId: APP_DATA.user.id,
            text: isLast ? text : '',
            time,
            outgoing: true,
            status: 'sent',
            attachments: [att],
          });
        });
        chat.lastMessage = text || (pendingAttachments[0].type === 'image' ? 'Фото' : 'Файл: ' + pendingAttachments[0].name);
        pendingAttachments = [];
        renderPreview();
      } else {
        chat.messages.push({ id: Date.now(), sender: 'me', senderId: APP_DATA.user.id, text, time, outgoing: true, status: 'sent' });
        chat.lastMessage = text;
      }

      chat.lastSender = 'me';
      chat.status = 'sent';
      chat.dateLabel = time;
      input.value = '';
      renderMessages();
    };
    sendBtn.onclick = send;
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } });
  }
}

/* ===================== ИНФОРМАЦИЯ О ЧАТЕ ===================== */
function memberRowHtml(m) {
  return `
    <div class="chat-item" style="min-height:56px">
      ${renderAvatar(m, 'avatar-xs')}
      <div class="chat-item-info">
        <div class="chat-item-name">${m.name}</div>
        <div class="chat-item-preview">${m.presence || m.role}</div>
      </div>
    </div>
  `;
}

function openActionSheet(title, actions) {
  const backdrop = document.getElementById('sheet-backdrop');
  const sheet = document.getElementById('bottom-sheet');
  const titleEl = document.getElementById('bottom-sheet-title');
  const listEl = document.getElementById('bottom-sheet-list');
  const footerEl = sheet ? sheet.querySelector('.bottom-sheet-footer') : null;
  if (!backdrop || !sheet || !titleEl || !listEl) return;

  titleEl.textContent = title;
  if (footerEl) footerEl.style.display = 'none';
  listEl.innerHTML = actions.map((a, i) => `
    <button type="button" class="sheet-list-item" data-index="${i}" style="justify-content:flex-start">
      <div class="sheet-list-item-label" style="${a.danger ? 'color:var(--icon-error)' : ''}">${a.label}</div>
    </button>
  `).join('');
  listEl.querySelectorAll('.sheet-list-item').forEach(btn => {
    btn.onclick = () => {
      closeBottomSheet();
      if (footerEl) footerEl.style.display = '';
      actions[parseInt(btn.dataset.index)].onClick();
    };
  });

  backdrop.classList.add('open');
  sheet.classList.add('open');
}

function initParticipants(id) {
  const chat = APP_DATA.chats.find(c => c.id === parseInt(id));
  if (!chat) return;

  const isDirect = chat.type === 'direct';
  const avatarEl = qs('.participants-avatar');
  const nameEl   = qs('.participants-chat-name');
  const countEl  = qs('.participants-chat-count');
  const soundBtn = qs('.participants-sound-btn');
  const soundLabel = qs('.participants-sound-label');
  const searchBtn = qs('.participants-search-btn');
  const moreBtn  = qs('.participants-more-btn');
  const membersWrap = qs('.participants-members-wrap');
  const listEl   = qs('.participants-list');

  if (avatarEl) avatarEl.innerHTML = renderAvatar(chat, 'avatar-3xl');
  if (nameEl) nameEl.textContent = chat.name;
  if (countEl) {
    if (isDirect) {
      const other = chat.members.find(m => m.name === chat.name);
      countEl.textContent = other ? other.role : '';
    } else {
      countEl.textContent = `${chat.members.length} участников`;
    }
  }

  function renderSound() {
    if (!soundBtn) return;
    soundBtn.classList.toggle('is-muted', !!chat.muted);
    if (soundLabel) soundLabel.textContent = chat.muted ? 'выкл.' : 'звук';
  }
  renderSound();
  if (soundBtn) soundBtn.onclick = () => {
    chat.muted = !chat.muted;
    renderSound();
  };

  if (searchBtn) {
    if (isDirect) {
      searchBtn.style.display = 'none';
    } else {
      searchBtn.onclick = () => Router.goTo(`/chat/${id}/members/search`);
    }
  }

  if (moreBtn) {
    moreBtn.onclick = () => {
      const actions = [
        {
          label: 'Очистить историю переписки',
          onClick: () => {
            chat.messages = [];
            chat.lastMessage = '';
            chat.dateLabel = '';
            updateChatsBadge();
          },
        },
      ];
      if (!isDirect) {
        actions.push({
          label: 'Покинуть чат',
          danger: true,
          onClick: () => {
            const idx = APP_DATA.chats.findIndex(c => c.id === chat.id);
            if (idx >= 0) APP_DATA.chats.splice(idx, 1);
            updateChatsBadge();
            Router.goTo('/chats');
          },
        });
      }
      openActionSheet(chat.name, actions);
    };
  }

  if (isDirect) {
    if (membersWrap) membersWrap.style.display = 'none';
    return;
  }

  if (!listEl) return;
  listEl.innerHTML = chat.members.map(memberRowHtml).join('');
}

/* ===================== ПОИСК УЧАСТНИКОВ ЧАТА ===================== */
function initMemberSearch(id) {
  const chat = APP_DATA.chats.find(c => c.id === parseInt(id));
  if (!chat) return;

  const input   = qs('.chat-search-input');
  const clearBtn = qs('.chat-search-clear');
  const listEl  = qs('.chat-search-results');
  const emptyEl = qs('.chat-search-empty');
  if (!input || !listEl) return;

  input.placeholder = 'Поиск по участникам';

  function render() {
    const query = input.value.trim().toLowerCase();
    clearBtn.style.display = query ? 'flex' : 'none';
    const results = query
      ? chat.members.filter(m => m.name.toLowerCase().includes(query))
      : chat.members;

    listEl.style.display = results.length ? 'block' : 'none';
    emptyEl.style.display = results.length ? 'none' : 'flex';
    listEl.innerHTML = results.map(memberRowHtml).join('');
  }

  input.oninput = render;
  clearBtn.onclick = () => { input.value = ''; render(); input.focus(); };
  render();
  setTimeout(() => input.focus(), 50);
}

/* ===================== ПРОФИЛЬ ===================== */
function initProfile() {
  const u = APP_DATA.user;
  const nameEl     = qs('.profile-name');
  const schoolEl   = qs('.profile-school');
  const avatarEl   = qs('.profile-avatar');
  const avgEl      = qs('.profile-stat-avg');
  const attendedEl = qs('.profile-stat-attended');
  const classEl    = qs('.profile-stat-class');
  if (nameEl)   nameEl.textContent   = u.name;
  if (schoolEl) schoolEl.textContent = u.school;
  if (avatarEl) avatarEl.textContent = formatInitials(u.name);

  const avg = GRADES_8_CLASS.reduce((sum, item) => sum + item.avg, 0) / GRADES_8_CLASS.length;
  if (avgEl)      avgEl.textContent      = avg.toFixed(1);
  if (attendedEl) attendedEl.textContent = u.attended;
  if (classEl)    classEl.textContent    = u.grade;

  const editBtn = qs('.profile-edit-btn');
  if (editBtn) editBtn.onclick = () => Router.goTo('/profile/edit');

  const themeSwitch = qs('.theme-switch');
  if (themeSwitch) {
    const syncSwitch = () => {
      const dark = isDarkTheme();
      themeSwitch.classList.toggle('on', dark);
      themeSwitch.setAttribute('aria-checked', String(dark));
    };
    syncSwitch();
    themeSwitch.onclick = () => {
      setTheme(!isDarkTheme());
      syncSwitch();
    };
  }

  const logoutBtn = qs('.profile-logout-btn');
  if (logoutBtn) logoutBtn.onclick = () => {
    localStorage.removeItem('onboarding_done');
    location.hash = '';
    location.reload();
  };
}

/* ===================== РЕДАКТИРОВАНИЕ ПРОФИЛЯ ===================== */
function initProfileEdit() {
  const u = APP_DATA.user;
  const nameInput  = qs('[name="profile-name"]');
  const phoneInput = qs('[name="profile-phone"]');
  const saveBtn    = qs('.profile-save-btn');
  if (nameInput)  nameInput.value  = u.name;
  if (phoneInput) phoneInput.value = u.phone;
  if (saveBtn) {
    saveBtn.onclick = () => {
      if (nameInput)  APP_DATA.user.name  = nameInput.value.trim() || u.name;
      if (phoneInput) APP_DATA.user.phone = phoneInput.value.trim() || u.phone;
      Router.goBack();
    };
  }
}

/* ===================== УВЕДОМЛЕНИЯ ===================== */
const NOTIFICATION_ICONS = {
  grade:    'icons/award.svg',
  message:  'icons/message-circle.svg',
  schedule: 'icons/refresh-2.svg',
  news:     'icons/note.svg',
};

function initNotifications() {
  const listEl = qs('.notifications-list');
  if (!listEl) return;
  APP_DATA.notifications.forEach(n => { n.read = true; });
  listEl.innerHTML = APP_DATA.notifications.map(n => {
    const icon = NOTIFICATION_ICONS[n.type] || 'icons/note.svg';
    return `
    <div class="notification-item">
      <div class="notification-icon"><img src="${icon}" alt=""></div>
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:4px">
        <div style="display:flex;align-items:flex-start;gap:4px">
          <div class="t-h4" style="flex:1">${n.title}</div>
          <div class="t-caption c-secondary" style="flex-shrink:0">${n.time}</div>
        </div>
        <div class="t-bodys" style="color:var(--text-primary)">${n.text}</div>
      </div>
    </div>
  `;
  }).join('');
}

/* ===================== AR ===================== */
function initAR() {}
