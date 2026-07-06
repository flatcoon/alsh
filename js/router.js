const routes = {
  '':                  { file: 'screens/preloader.html',     nav: false },
  '/':                 { file: 'screens/preloader.html',     nav: false },
  '/onboarding/1':     { file: 'screens/onboarding.html',   nav: false },
  '/onboarding/2':     { file: 'screens/onboarding.html',   nav: false },
  '/onboarding/3':     { file: 'screens/onboarding.html',   nav: false },
  '/welcome':          { file: 'screens/welcome.html',       nav: false },
  '/enter-code':       { file: 'screens/enter-code.html',   nav: false },
  '/home':             { file: 'screens/home.html',          nav: true  },
  '/schedule':         { file: 'screens/schedule.html',      nav: true  },
  '/grades':           { file: 'screens/grades.html',        nav: true  },
  '/news':             { file: 'screens/news-list.html',     nav: true  },
  '/chats':            { file: 'screens/chats.html',         nav: true  },
  '/chats/search':     { file: 'screens/chat-search.html',   nav: false },
  '/profile':          { file: 'screens/profile.html',       nav: true  },
  '/profile/edit':     { file: 'screens/profile-edit.html', nav: false },
  '/notifications':    { file: 'screens/notifications.html', nav: false },
  '/ar':               { file: 'screens/ar.html',            nav: false },
};

const dynamicRoutes = [
  { pattern: /^\/news\/(\d+)$/,                 file: 'screens/news-item.html',    nav: false },
  { pattern: /^\/chat\/(\d+)\/members\/search$/, file: 'screens/chat-search.html', nav: false },
  { pattern: /^\/chat\/(\d+)\/members$/,        file: 'screens/participants.html', nav: false },
  { pattern: /^\/chat\/(\d+)$/,                 file: 'screens/chat.html',         nav: false },
];

let currentPath = null;
let historyStack = [];

function matchRoute(path) {
  if (routes[path]) return { ...routes[path], params: {} };
  for (const r of dynamicRoutes) {
    const m = path.match(r.pattern);
    if (m) return { file: r.file, nav: r.nav, params: { id: m[1] } };
  }
  return { file: 'screens/home.html', nav: true, params: {} };
}

function getPath() {
  const hash = window.location.hash || '#/';
  return hash.slice(1) || '/';
}

function navigate(path, direction = 'forward') {
  const route = matchRoute(path);
  const container = document.getElementById('screen-container');
  const navEl = document.getElementById('bottom-nav');

  const markup = (window.SCREENS || {})[route.file];
  let newScreen;
  if (markup) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = markup;
    newScreen = wrapper.querySelector('.screen') || wrapper.firstElementChild;
  } else {
    newScreen = document.createElement('div');
    newScreen.innerHTML = '<div class="empty-state" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:32px"><p style="color:var(--text-secondary);font-size:16px">Экран не найден</p></div>';
  }
  newScreen.classList.add('screen');

  const old = container.querySelector('.screen');

  if (old) {
    old.classList.add(direction === 'back' ? 'screen-exit-back' : 'screen-exit');
    old.addEventListener('animationend', () => old.remove(), { once: true });
  }

  newScreen.classList.add(direction === 'back' ? 'screen-enter-back' : 'screen-enter');
  container.appendChild(newScreen);
  window.__activeScreen = newScreen;

  if (route.nav) {
    container.classList.add('has-nav');
    if (navEl) {
      navEl.style.display = 'flex';
      updateNavActive(path);
    }
  } else {
    container.classList.remove('has-nav');
    if (navEl) navEl.style.display = 'none';
  }

  currentPath = path;
  window.__routeParams = route.params;

  setTimeout(() => initScreen(path, route.params), 50);
}

function updateNavActive(path) {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    const tabPath = tab.dataset.route;
    tab.classList.toggle('active', path === tabPath || path.startsWith(tabPath + '/'));
    const outline = tab.querySelector('.icon-outline');
    const bulk = tab.querySelector('.icon-bulk');
    const isActive = path === tabPath || path.startsWith(tabPath + '/');
    if (outline) outline.style.display = isActive ? 'none' : 'block';
    if (bulk)    bulk.style.display    = isActive ? 'block' : 'none';
  });
}

function goTo(path, direction = 'forward') {
  if (direction === 'forward') historyStack.push(path);
  window.location.hash = '#' + path;
}

function goBack() {
  historyStack.pop();
  const prev = historyStack[historyStack.length - 1] || '/home';
  window.location.hash = '#' + prev;
}

window.Router = { goTo, goBack, getParams: () => window.__routeParams || {} };

let lastPath = null;
window.addEventListener('hashchange', () => {
  const path = getPath();
  const direction = historyStack.length > 1 && historyStack[historyStack.length - 2] === path ? 'back' : 'forward';
  navigate(path, direction);
  lastPath = path;
});

document.addEventListener('DOMContentLoaded', () => {
  const path = getPath();
  historyStack.push(path);
  navigate(path, 'forward');
  lastPath = path;
});
