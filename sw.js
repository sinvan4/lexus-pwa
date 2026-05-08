const CACHE_NAME = 'lexus-pwa-v5';
const urlsToCache = [
    '/lexus-pwa/',
    '/lexus-pwa/index.html',
    '/lexus-pwa/manifest.json',
    '/lexus-pwa/icon-lexus.png',
    '/lexus-pwa/car-default.png',
    '/lexus-pwa/sw-register.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
    );
});
