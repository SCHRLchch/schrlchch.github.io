// public/service-worker.js
const CACHE_NAME = "your-app-cache";
const urlsToCache = [
  "/",
  "/manifest.json",
  // Add other static assets (CSS, JS, images) that you want to cache
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});
