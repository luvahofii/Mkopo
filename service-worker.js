const CACHE_NAME = "mkopo-chapchap-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/logo.png",
  "/favicon.png",
  "/airtel.png",
  "/vodacom.png",
  "/yas.png",
  "/halotel.png",
  "/nmb.png",
  "/crdb.png",
  "/azania.png",
  "/exim.png",
  "/nbc.png",
  "/icon-192.png",
  "/icon-512.png"
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
