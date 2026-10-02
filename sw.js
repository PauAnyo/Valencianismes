const CACHE_NAME = 'valencianismes-v8';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './valencianisme.html',
  './valencianismes.html',
  './styles.css',
  './app.js',
  './paraules.js',
  './music.mp3',
  './icon-192.png',
  './icon-512.png',
  './favicon.ico',
  './favicon.png',
  './manifest.json'
];

// Install - Cache essential assets with relative paths
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Activate - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - Network first, fallback to cache
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        if (cachedResponse) return cachedResponse;
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html') || caches.match('./');
        }
      });
    })
  );
});
