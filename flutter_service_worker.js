'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "7cb411adc1aa504874eb1fe53eb463c0",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/index.html": "aaefadefbad7b20e8956f592a105af2b",
"/manifest.json": "6a0edf4842d53388705e7849ec0cd81a",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/lib/res/drawables/google_play.webp": "73dbbc716c8334ce969949732ea9cbc5",
"/assets/lib/res/drawables/bg1.jpg": "09644a28c6ce643f17413e7c09da3aa8",
"/assets/lib/res/drawables/github.webp": "14d916554cddf3041acb64ed46fbc9e7",
"/assets/lib/res/drawables/linkedin.webp": "97db2a2c5490ff1e5893a3789726b6b0",
"/assets/lib/res/drawables/instagram.webp": "5de72d2ca0208443dbb86895c9380dac",
"/assets/lib/res/drawables/stackoverflow.webp": "d9c03270dc73f3bc34f70ba23faad7c9",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/LICENSE": "1af525027a2f0cbce4306b996bc4cb8a",
"/assets/AssetManifest.json": "79ffaf4a6744a11553bb64a9007b6f99"
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
