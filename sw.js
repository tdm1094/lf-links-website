self.addEventListener('install', (event) => {
    console.log('SW instalado');
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Necesario para que Chrome lo detecte como PWA funcional
    event.respondWith(fetch(event.request));
});
