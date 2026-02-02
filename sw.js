const CACHE_NAME = 'la-fuente-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/logo192.png',
  '/images/logo512.png'
];

// Instalación
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activación
self.addEventListener('activate', (e) => {
  console.log('Service Worker Activo');
});

// Estrategia de red (necesaria para PWA)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
