// CALL INSTALL EVENT

const myCached = "d1";

// const myCatchedAssests = [
//     '/',
//     'index.html',
//     'style.css',
//     'App.js',
//     '/images/logo.svg',
//     '/images/desktop/image-header.jpg',
//     '/images/mobile/image-header.jpg',
//     '/images/icon-hamburger.svg',
//     '/images/icon-arrow-down.svg'

// ]

self.addEventListener("install", (e) => {
  console.log("service worker installed");

  // e.waitUntil(
  //     caches.open(myCached)
  //         .then( cache => {
  //             console.log('sevice worker: catching files')
  //             cache.addAll(myCatchedAssests)
  //         })
  //         .then(() => self.skipWaiting())
  // )
});

//CALL THE ACTIVATE EVENT

self.addEventListener("activate", (e) => {
  console.log("service worker activated");

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
  console.log("service worker fecthing");
  if (!(e.request.url.indexOf("http") === 0)) return;

  e.respondWith(
    // fetch(e.request).catch( () => caches.match(e.request))

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
