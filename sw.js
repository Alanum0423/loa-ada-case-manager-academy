const CACHE_NAME = "loa-academy-v3";

const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js?v=3",
  "./manifest.json",

  "./data/modules.js",
  "./data/cases.js",
  "./data/questions.js",
  "./data/calculators.js",
  "./data/lessons.js",
  "./data/scenarios.js",
  "./data/rubrics.js",
  "./data/glossary.js",
  "./data/references.js",
  "./data/content-map.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then(networkResponse => {

            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type !== "basic"
            ) {
              return networkResponse;
            }

            const responseToCache =
              networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(
                  event.request,
                  responseToCache
                );
              });

            return networkResponse;
          });

      })
      .catch(() =>
        caches.match("./index.html")
      )
  );

});
