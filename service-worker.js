const CACHE_NAME = "mkopo-chapchap-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/logo.png",
  "/assets/favicon.png",
  "/assets/airtel.png",
  "/assets/vodacom.png",
  "/assets/yas.png",
  "/assets/halotel.png",
  "/assets/nmb.png",
  "/assets/crdb.png",
  "/assets/azania.png",
  "/assets/exim.png",
  "/assets/nbc.png",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png"
  // Add other critical files like CSS, JS, HTML
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});