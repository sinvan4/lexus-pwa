const CACHE_NAME = 'lexus-pwa-v1';
const urlsToCache = [
    '.',
    'index.html',
    'manifest.json',
    'icon-lexus.png',
    'car-default.png',
    'sw-register.js'
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
