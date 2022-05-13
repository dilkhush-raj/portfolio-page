const staticCacheName = "static-cache-v6"
const assets = [
  "/",
  "/index.html",
  "/assets/js/app.js",
  "/assets/js/script.js",
  "/assets/js/core.js",
  "/assets/css/style.css",
  "/assets/css/clouds.css",
  "/assets/css/aos.css",
  "/assets/img/logo.svg",
  "/assets/img/hero-img.svg",
  "/assets/img/hero-img-dark.svg",
  "/assets/img/Dilkhush_Raj-150px.webp"
]

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})

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
  

self.addEventListener("fetch", evt => {
    evt.respondWith(
      caches.match(evt.request).then(res => {
        return res || fetch(evt.request)
      })
    )
  })