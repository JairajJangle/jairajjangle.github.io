'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "9050f3721efe57ef7832c98e7c704575",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/index.html": "aaefadefbad7b20e8956f592a105af2b",
"/manifest.json": "6a0edf4842d53388705e7849ec0cd81a",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/lib/res/drawables/google_play.webp": "73dbbc716c8334ce969949732ea9cbc5",
"/assets/lib/res/drawables/bg1.jpg": "09644a28c6ce643f17413e7c09da3aa8",
"/assets/lib/res/drawables/github.webp": "14d916554cddf3041acb64ed46fbc9e7",
"/assets/lib/res/drawables/ASUS.jpeg": "dd6511d1c50ee8067c4b86d847596b53",
"/assets/lib/res/drawables/Schaeffler.png": "22789f3560e180039c78411c84b50067",
"/assets/lib/res/drawables/linkedin.webp": "97db2a2c5490ff1e5893a3789726b6b0",
"/assets/lib/res/drawables/PSPIP.jpg": "1c5dff55027b07f9d31e27d48998b932",
"/assets/lib/res/drawables/instagram.webp": "5de72d2ca0208443dbb86895c9380dac",
"/assets/lib/res/drawables/IEPC.jpeg": "ea87469da82f3943d25bcc11f536d861",
"/assets/lib/res/drawables/stackoverflow.webp": "d9c03270dc73f3bc34f70ba23faad7c9",
"/assets/lib/res/drawables/Robocon_2018.jpg": "eb4c7014752b73cb7a390922aa64227a",
"/assets/lib/res/drawables/Robocon_2017.jpg": "b10a7c400bc3163e23e25320e5e569cb",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/LICENSE": "1af525027a2f0cbce4306b996bc4cb8a",
"/assets/AssetManifest.json": "46609b35402a37ad41733c60ab2c056c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
