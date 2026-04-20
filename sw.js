const CACHE_NAME = 'lexus-pwa-v1';
const urlsToCache = [
    '/lexus-pwa/',
    '/lexus-pwa/index.html',
    '/lexus-pwa/manifest.json',
    '/lexus-pwa/icon-lexus.png',
    '/lexus-pwa/car-default.png'
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