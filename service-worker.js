/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.86b0881474f5beb84a9fff31f17938e2.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate({ "cacheName":"google-fonts-styles", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":31536000,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, workbox.strategies.cacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":31536000,"maxEntries":30,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/\.(?:js|css)$/, workbox.strategies.staleWhileRevalidate({ "cacheName":"static-resources", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":31536000,"purgeOnQuotaError":false})] }), 'GET');
