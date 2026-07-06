const CACHE_NAME = 'school-app-v18';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/tokens.css',
  './css/components.css',
  './css/app.css',
  './js/router.js',
  './js/app.js',
  './js/data.js',
  './screens/preloader.js',
  './screens/onboarding.js',
  './screens/welcome.js',
  './screens/enter-code.js',
  './screens/home.js',
  './screens/schedule.js',
  './screens/grades.js',
  './screens/news-list.js',
  './screens/news-item.js',
  './screens/chats.js',
  './screens/chat-search.js',
  './screens/chat.js',
  './screens/participants.js',
  './screens/profile.js',
  './screens/profile-edit.js',
  './screens/notifications.js',
  './screens/ar.js',
  './icons/arrow-left.svg',
  './icons/flag-ru.svg',
  './icons/refresh-2.svg',
  './icons/info-circle.svg',
  './icons/clock.svg',
  './icons/book-outline.svg',
  './icons/award.svg',
  './icons/note.svg',
  './icons/message-circle.svg',
  './icons/arrow-right.svg',
  './icons/hint-badge.svg',
  './images/mascot/grades-widget.png',
  './images/mascot/onboarding1-animated.svg',
  './images/chats/avatar-class.svg',
  './images/chats/avatar-subject.svg',
  './images/chats/avatar-teacher1.svg',
  './images/chats/avatar-boy1.svg',
  './images/chats/avatar-parents.svg',
  './images/chats/avatar-sport.svg',
  './images/chats/avatar-girl1.svg',
  './images/chats/avatar-teacher2.svg',
  './images/chats/photo-demo1.svg',
  './images/chats/photo-demo2.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
      await self.clients.claim();
      const clients = await self.clients.matchAll({ type: 'window' });
      await Promise.all(clients.map(client => client.navigate(client.url)));
    })()
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
