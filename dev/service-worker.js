/* eslint-disable no-undef */

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerNavigationRoute('/index.html');
