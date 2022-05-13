const staticCacheName = 'site-static-v3';
const assets = [
  "/",
  "/index.html",
  "/js/app.js",
  "/js/script.js",
  "/css/style.css",
  "/css/clouds.css",
  "/img/logo.svg",
  "/img/hero-img.svg",
  "/img/hero-img-dark.svg",
  "/img/Dilkhush_Raj-150px.webp",
  "https://unpkg.com/aos@next/dist/aos.css",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css",
  "https://unpkg.com/aos@next/dist/aos.js",
  "https://unpkg.com/typewriter-effect@latest/dist/core.js",
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});