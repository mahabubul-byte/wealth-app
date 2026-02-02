const CACHE_NAME = "v2"; // Shudhu eikhane v1 ke v2 koro
const assets = ["./index.html", "./app.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
