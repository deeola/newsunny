// CALL INSTALL EVENT

const myCached = "d2";

self.addEventListener("install", (e) => {});

//CALL THE ACTIVATE EVENT

self.addEventListener("activate", (e) => {
  // Remove unwanted caches

  e.waitUntil(
    caches.keys().then((cachNames) => {
      return Promise.all(
        cachNames.map((cache) => {
          if (cache !== myCached) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//CALL FETCH EVENT

self.addEventListener("fetch", (e) => {
  if (!(e.request.url.indexOf("http") === 0)) return;

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //make copy/clone
        const resClone = res.clone();

        //open cache

        caches.open(myCached).then((cache) => {
          //Add response to cache

          cache.put(e.request, resClone);
        });

        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
