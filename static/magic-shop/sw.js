const CACHE = "hacsi-magic-shops-8249d6a755c4";
const PRECACHE = ["/magic-shop/apple-touch-icon.png","/magic-shop/assets/bag.png","/magic-shop/assets/cloak.png","/magic-shop/assets/header-merchant.png","/magic-shop/assets/index-CoqUFtqo.css","/magic-shop/assets/index-CrXic25r.js","/magic-shop/assets/item-type-armor.jpg","/magic-shop/assets/item-type-rod.jpg","/magic-shop/assets/item-type-staff.jpg","/magic-shop/assets/item-type-wand.jpg","/magic-shop/assets/item-type-weapon.jpg","/magic-shop/assets/merchant-offer.png","/magic-shop/assets/parchment.png","/magic-shop/assets/potion.png","/magic-shop/assets/ring.png","/magic-shop/assets/scroll.png","/magic-shop/icon-192.png","/magic-shop/icon-512.png","/magic-shop/index.html","/magic-shop/manifest.webmanifest"];
const APP_URL = "/magic-shop/";

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(Promise.all([
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith('hacsi-magic-shops-') && key !== CACHE).map((key) => caches.delete(key)))),
    self.clients.claim(),
  ]));
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(APP_URL)) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      if (response.ok) return response;
      return caches.match(APP_URL + 'index.html').then((cached) => cached || response);
    }).catch(() => caches.match(APP_URL + 'index.html')));
    return;
  }

  if (!['script', 'style', 'image', 'font', 'manifest'].includes(request.destination)) return;
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    if (response.ok) {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then((cache) => cache.put(request, copy)));
    }
    return response;
  })));
});
