/* eslint-disable no-undef */

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerNavigationRoute('/index.html');

workbox.routing.registerRoute(
  new RegExp('.*artists.json'),
  workbox.strategies.cacheFirst({
    cacheName: 'artists-data'
  })
);
